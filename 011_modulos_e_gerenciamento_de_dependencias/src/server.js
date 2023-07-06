import config from "./config/configDefault";

const oldModule = require("./modules/oldModule");

const sum = oldModule.fun(1,5);

console.log(oldModule.text + " Soma de 1 + 5: ", sum);
console.log("Config: ", config.name);