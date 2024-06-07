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
const cors_1 = __importDefault(require("cors"));
const get_code_content_1 = require("./get-code-content");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, outputLanguage } = req.query;
    if (typeof fileName !== "string" || typeof outputLanguage !== "string") {
        return res.status(400).send();
    }
    const response = yield (0, get_code_content_1.getCodeContent)(fileName, outputLanguage);
    if (response === null) {
        return res.status(404).send();
    }
    res.header("Content-Type", "application/json").send(JSON.stringify(response));
}));
app.listen(port, () => {
    console.log(`Slides API listening on port ${port}`);
});
//# sourceMappingURL=index.js.map