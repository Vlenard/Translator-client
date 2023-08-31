export type Language = {
    name: string;
    code: string;
    supportsFormality: boolean | null
};

export type SupportedLanguages = {
    source: Array<Language>;
    target: Array<Language>;
};