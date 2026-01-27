const { exec } = require('child_process');

console.log('🔍 Tentando compilar apenas a home page...\n');

const proc = exec('npx next build --experimental-build-mode=compile 2>&1');

let output = '';
proc.stdout.on('data', (data) => {
  output += data;
  process.stdout.write(data);
});

proc.stderr.on('data', (data) => {
  output += data;
  process.stderr.write(data);
});

setTimeout(() => {
  console.log('\n\n⏱️  30 segundos se passaram. Matando processo...\n');
  proc.kill();
  
  if (output.includes('Error')) {
    console.log('\n❌ Erro encontrado!\n');
  } else {
    console.log('\n⚠️  Processo muito lento, provavelmente problema de import circular ou arquivo muito grande.\n');
  }
}, 30000);
