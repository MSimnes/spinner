const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ' ]
let timer = 100;
for (const cursor of spinner) {
  setTimeout(() => {
    process.stdout.write(cursor);
  }, timer);
  timer += 200;
}
