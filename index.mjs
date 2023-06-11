import { log } from "./log.mjs";

export const handler = async(event) => {
    // TODO implement
    const event_body = JSON.stringify(event);

    log(`event: ${event_body}`);

    return {
        statusCode: 200,
        body: `
        <!DOCTYPE html>
        <html>
        <body>
            <h3>Dados da requisição:</h3>
            <p>${event_body}</p>
        </body>
        </html>`,
        headers: {
            "content-type": "text/html;charset=UTF-8"
        }
    };
};
