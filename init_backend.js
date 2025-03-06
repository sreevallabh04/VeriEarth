const { execSync } = require('child_process');
const fs = require('fs');

try {
  fs.mkdirSync('backend', { recursive: true });
  execSync('npm init -y', { cwd: 'backend', stdio: 'inherit' });
  console.log('Backend initialized successfully!');
} catch (error) {
  console.error('Failed to initialize backend:', error);
}
