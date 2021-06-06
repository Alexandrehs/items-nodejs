"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
require("./database");
dotenv_1.default.config();
var app = express_1.default();
var PORT = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(PORT, function () {
    console.log("Running in port " + PORT);
});
