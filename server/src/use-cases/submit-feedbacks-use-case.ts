import { error } from "console";
import { MailAdapters } from "../adapters/mail-adapters";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbacksUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
};

export class SubmitFeedbacksUseCase{


    constructor(
       private feedbacksRepository: FeedbacksRepository,
       private mailAdapters: MailAdapters
    ){}

    async execute(request: SubmitFeedbacksUseCaseRequest){
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error('Type is required')
        }

        if(!comment){
            throw new Error('Type is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapters.sendMail({
            subject: 'Novo Feedback',
            body:[
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
};