import express from 'express';

import { SubmitFeedbackUseCase } from './use-cases/SubmitFeedbackUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodeMailerMailAdapter } from './adapters/nodeMailer/NodeMailerAdapter';

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
    const { type, comment, screenshot } = request.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodeMailerAdapter = new NodeMailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodeMailerAdapter
    );

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });

    return response.status(201).send();
});