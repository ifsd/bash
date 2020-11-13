module.exports = (err, data) => {
  if (err) throw err;
  process.stdout.write(data.toString());
};
