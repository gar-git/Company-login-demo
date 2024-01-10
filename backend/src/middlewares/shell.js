// restartServer.js

const shell = require('shelljs');

exports.restartServer = (next) => {
  // Execute the shell command to restart nodemon
  const result = shell.exec(`Stop-Process -Name nodemon -Force -ErrorAction SilentlyContinue ; nodemon server.js`);

  // Check if the command was successful
  if (result.code !== 0) {
    console.error('Error restarting server:', result.stderr);
  } else {
    console.log('Server restarted successfully.');
  }
  next();
}

