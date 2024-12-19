import { yarg } from "./config/plugins/yargs.plugins";
import ServerApp from "./presentation/server-app";

(() => {
  main();
})();

async function main() {
  const { b: base, l: limit, s: showTable } = yarg;
  ServerApp.run({ base, limit, showTable });
}
