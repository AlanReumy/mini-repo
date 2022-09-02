#!/usr/bin/env node
import { spawn } from "child_process";
import chokidar from "chokidar";
import chalk from "chalk";
import { debounce } from "./utils.js";

let childProcess;

const fileName = process.argv[2];

const debounceRestart = debounce(restart, 500);

chokidar.watch(`${fileName}`).on("all", (event, path) => {
  debounceRestart();
});

function restart() {
  if (childProcess) {
    childProcess.kill();
    console.log(chalk.green("[mini-nodemon] restarting due to changes..."));
  }
  childProcess = spawn("node", [`${fileName}`], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
  console.log(chalk.green(`[mini-nodemon] starting 'node ${fileName}'`));
}