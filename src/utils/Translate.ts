import { env } from "./Environment";

export type TranslateRequest = {
    text: string;
    source: string | null;
    target: string;
};

export type TranslateResponse = {
    translatedText: string | null;
    errorMessage: string | null;
};

let controller: AbortController | null;

export const translate = async (request: TranslateRequest): Promise<TranslateResponse> => {
    
    try {
        if(controller !== null) controller.abort();

        controller = new AbortController();
        const res = await fetch(`${env.api}/translate`, {
            signal: controller.signal,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });
        controller = null;
    
        const data: TranslateResponse = await res.json();
    
        return data;
    } catch (error) {
        return {
            errorMessage: null,
            translatedText: request.text
        }
    }

}