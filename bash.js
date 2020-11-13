process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  //   process.stdout.write("you typed:" + cmd);
  if (cmd === "pwd") {
    process.stdout.write(`this the directory ${process.cwd()}`);
  }
  process.stdout.write("\nprompt > ");
});
