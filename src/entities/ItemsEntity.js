"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsEntity = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var ItemsEntity = /** @class */ (function () {
    function ItemsEntity() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ItemsEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], ItemsEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "price" }),
        __metadata("design:type", String)
    ], ItemsEntity.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ name: "storage" }),
        __metadata("design:type", Number)
    ], ItemsEntity.prototype, "storage", void 0);
    __decorate([
        typeorm_1.Column({ name: "minimum" }),
        __metadata("design:type", Number)
    ], ItemsEntity.prototype, "minimum", void 0);
    ItemsEntity = __decorate([
        typeorm_1.Entity('items'),
        __metadata("design:paramtypes", [])
    ], ItemsEntity);
    return ItemsEntity;
}());
exports.ItemsEntity = ItemsEntity;
