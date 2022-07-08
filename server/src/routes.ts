import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedbacksUseCase } from "./use-cases/submit-feedbacks-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapters } from "./adapters/nodemailer/nodemailer-mail-adapters";

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapters = new NodemailerMailAdapters();

    const submitFeedbacksUseCase = new SubmitFeedbacksUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapters
        );

    await submitFeedbacksUseCase.execute({
        type,
        comment,
        screenshot
    });
    
return res.status(201).send()
})
