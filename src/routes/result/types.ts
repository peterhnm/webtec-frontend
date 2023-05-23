export interface Image {
    url: string;
    title: string;
}

export interface AiResponse {
    description: string;
    images: [Image];
}
