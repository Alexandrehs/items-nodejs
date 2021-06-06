"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
try {
    typeorm_1.createConnection();
}
catch (error) {
    throw new Error(error);
}
