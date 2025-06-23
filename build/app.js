"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.f1 = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
exports.app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-store");
    next();
});
exports.app.get("/", (req, res) => {
    res.status(200).send("Carregou com sucesso!");
    return;
});
const f1 = function (a, b) {
    return a * b;
};
exports.f1 = f1;
