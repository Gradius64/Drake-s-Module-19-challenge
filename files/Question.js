"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var mongoose_1 = require("mongoose");
var QuestionSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    answers: [
        {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        }
    ]
});
var Question = (0, mongoose_1.model)('Question', QuestionSchema);
exports.Question = Question;
