import { execSync } from 'child_process';
try {
  execSync('npx tsc --noEmit', { cwd: 'c:\\Users\\Hydra\\Pictures\\backend', stdio: 'inherit' });
} catch (error) {
  console.error('TypeScript check failed:', error.message);
  process.exit(1);
}
