"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.http = exports.getUUID = exports.getAge = void 0;
const get_age_plugin_1 = require("./get-age-plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
const get_id_plugin_1 = require("./get-id-plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
const http_client_1 = require("./http-client");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_1.http; } });
const logger_plugins_1 = __importDefault(require("./logger-plugins"));
exports.buildLogger = logger_plugins_1.default;
