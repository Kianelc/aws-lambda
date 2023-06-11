import { log } from "./log.mjs";

export const handler = async(event) => {
    // TODO implement
    const event_body = JSON.stringify(event);

    log(`Executando evento: ${event_body}`);

    return {
        statusCode: 200,
        body: event_body,
    };
};
