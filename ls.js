module.exports = (err, files) => {
  if (err) throw err;
  else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
};
