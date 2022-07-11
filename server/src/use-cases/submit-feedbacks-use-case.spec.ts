import { SubmitFeedbacksUseCase } from "./submit-feedbacks-use-case";

const createFeedbackSpiek = jest.fn();
const sendMailSpiek = jest.fn();

const submitFeedback = new SubmitFeedbacksUseCase(
    { create: createFeedbackSpiek},
    { sendMail: sendMailSpiek}
)

describe('Submit feedback', () =>{
    it('should be able to submit a feedback', async () =>{

        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpiek).toHaveBeenCalled();
        expect(sendMailSpiek).toHaveBeenCalled();
    });


    it('should not be able to submit feedback without type', async () =>{

        await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });


    it('should not be able to submit feedback without comment', async () =>{

        await expect(submitFeedback.execute({
            type: 'Bug ',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });


    it('should not be able to submit feedback with an invalid screenshot ', async () =>{

        await expect(submitFeedback.execute({
            type: 'Bug ',
            comment: 'Example comment',
            screenshot: 'teste.png'
        })).rejects.toThrow();
    });
});