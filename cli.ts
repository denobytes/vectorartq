import { parse as argparse } from "https://deno.land/std@0.181.0/flags/mod.ts";
import { Table } from "https://deno.land/x/tbl@1.0.3/mod.ts";

const args = argparse(Deno.args, {
  boolean: [
    // instructions for this script
    "help",

    // output js
    "j",
    "json",

    // debug mode
    "debug",
  ],
});

const commandName = `vectoartq`;

const usageMessage = `
Usage: ${commandName} [OPTIONS] <search term>
a vectorartai query tool

Options:
  --help              Show this help message
  --debug             Debug mode

  -j, --json          Output json

  Examples:
  ${commandName} dino
`;

// parse args
const help = args.help;
const debugMode = args.debug;
let outputJSON = args.json || args.j;

const baseUrl = "https://vectorart.ai/api/list";

// setup query
let searchTerm = args._.at(0);
let searchQuery = `${baseUrl}?from=0&q=${searchTerm}`;

if (debugMode) {
  console.debug("will query: " + searchQuery);
}

if (help) {
  console.log(usageMessage);
  Deno.exit();
}

// fetch
let res = await fetch(searchQuery);
let result = await res.json();

if (debugMode) {
  let res = JSON.stringify(result, null, "  ");
  console.debug("fetch result: " + res);
}

if (outputJSON) {
  result = JSON.stringify(result, null, "  ");
  console.log(result);
} else {
  const table = new Table({
    // specifying the header is necessary
    header: ["urlpath", "description"],
    widths: [44, 29],
  });

  for (const res of result.results) {
    let shortUrl = new URL(res.url).pathname;
    table.push([shortUrl, res.description]);
  }

  console.log(table.toString());
}
