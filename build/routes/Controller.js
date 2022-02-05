"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = require("../utilities/resize");
const app = (0, express_1.default)();
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const image = req.query.name;
    const widthString = req.query.width;
    const heightString = req.query.height;
    const widthNum = Number(widthString);
    const heightNum = Number(heightString);
    const localImage = path.join(__dirname, "../../images", `${image}.jpg`);
    const newImage = path.join(__dirname, "../../resized", `${image}_${widthNum}_${heightNum}.jpg`);
    const resizedImage = path.join(__dirname, "../../", `${image}_${widthNum}_${heightNum}.jpg`);
    if (fs.existsSync(newImage)) {
        console.log(`Image exists, sending: ${newImage}`);
        res.sendFile(newImage);
    }
    else {
        console.log(`Image created, sending: ${newImage}`);
        try {
            yield (0, resize_1.resize)(localImage, widthNum, heightNum, image);
            yield fsPromises
                .copyFile(resizedImage, newImage)
                .then(function () {
                fs.unlink(resizedImage, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log(`deleted file: ${resizedImage}`);
                    }
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        catch (err) {
            console.log(err);
        }
        res.sendFile(newImage);
    }
}));
exports.default = router;
