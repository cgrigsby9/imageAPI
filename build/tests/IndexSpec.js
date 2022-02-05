"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("../test"));
it('expect myFunc(5) to equal 25', () => {
    expect((0, test_1.default)(5)).toEqual(25);
});
