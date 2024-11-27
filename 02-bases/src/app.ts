/* const { emailTemplate } = require("./js-foundation/01-template");
require("./js-foundation/02-destructiring"); */
/* const { getUserById } = require("./js-foundation/03-callbacks"); */
/* const { getAge, getUUID } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/04-factory");

const obj = { name: "John", birthdate: "1985-10-21" };

const makePerson = buildMakePerson({ getUUID, getAge });

const john = makePerson(obj);

console.log(john); */
/* const { getPokemonById } = require("./js-foundation/06-promises");
const retorno = getPokemonById(4);
console.log(retorno.then((resp) => console.log(resp))); */

const { buildLogger } = require("./plugins");

const logger = buildLogger("app.js");

logger.log("HOLA MUNDO");
logger.error("Un error");
