export interface AiResponse {
    concept: Concept;
    images: string[];
}

export interface Concept {
    title: string;
    genre: string;
    key_mechanic: string;
    description: string;
    visuals: string;
    special: string;
}
