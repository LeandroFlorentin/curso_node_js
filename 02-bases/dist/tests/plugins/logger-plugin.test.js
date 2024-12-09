"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../plugins");
const logger_plugins_1 = require("../../plugins/logger-plugins");
describe("plugins/logger-plugins.ts", () => {
    test("buildLogger should return a function logger", () => {
        const logger = (0, plugins_1.buildLogger)("test");
        expect(typeof logger.log).toBe("function");
        expect(typeof logger.error).toBe("function");
    });
    test("logger.log should log a message", () => {
        const winstonLoggerMock = jest.spyOn(logger_plugins_1.logger, "log");
        const message = "test message";
        const service = "test service";
        const logger = (0, plugins_1.buildLogger)(service);
        logger.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith("info", expect.objectContaining({
            level: "info",
            message: "test message",
            service: "test service",
        }));
    });
});
