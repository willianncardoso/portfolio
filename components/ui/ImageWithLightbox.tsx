/**
 * ============================================
 * COMPONENTE: ImageWithLightbox
 * ============================================
 *
 * Imagem clicável que abre em modal fullscreen.
 * Permite zoom para ver detalhes da imagem.
 */

"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageWithLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  caption?: string;
}

export function ImageWithLightbox({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  className = "",
  containerClassName = "",
  priority = false,
  caption,
}: ImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback(() => setIsOpen(true), []);
  const closeLightbox = useCallback(() => setIsOpen(false), []);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeLightbox();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeLightbox]);

  return (
    <>
      {/* Thumbnail with zoom icon overlay */}
      <button
        onClick={openLightbox}
        className={cn(
          "relative group cursor-zoom-in overflow-hidden rounded-xl",
          containerClassName
        )}
        aria-label={`View ${alt} in full size`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover transition-transform duration-500 group-hover:scale-105", className)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={cn("transition-transform duration-500 group-hover:scale-105", className)}
          />
        )}

        {/* Zoom icon overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
              <ZoomIn className="w-5 h-5 text-primary-800" />
            </div>
          </div>
        </div>
      </button>

      {/* Caption below image */}
      {caption && (
        <p className="text-sm text-primary-600 italic text-center mt-3">
          {caption}
        </p>
      )}

      {/* Lightbox modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen view of ${alt}`}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 min-w-[48px] min-h-[48px] flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Full size image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                sizes="100vw"
              />

              {/* Caption in lightbox */}
              {caption && (
                <p className="text-white/80 text-center mt-4 text-sm md:text-base">
                  {caption}
                </p>
              )}
            </motion.div>

            {/* Instructions */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm hidden md:block">
              Press ESC or click outside to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
