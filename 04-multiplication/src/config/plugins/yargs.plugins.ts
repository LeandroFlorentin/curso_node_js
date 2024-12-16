import yargs from "yargs";
import { hideBin } from "yargs/helpers.mjs";

export const yarg = yargs(process.argv).parseSync();
