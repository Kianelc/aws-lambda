import { log } from "./log.mjs";

export const handler = async(event) => {
    // TODO implement
    const event_body = JSON.stringify(event);

    log(`Log de execução. Event: ${event_body}`);

    return {
        statusCode: 200,
        body: event_body,
    };
};
