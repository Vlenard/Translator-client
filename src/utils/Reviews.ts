import { env } from "./Environment";

export type Review = {
    id: number;
    name: string;
    review: string;
    publish: Date;
};

export type ReviewResponse = Array<Review>;

export const getReviews = async (): Promise<ReviewResponse> => {
    const res = await fetch(`${env.api}/reviews`);
    const data: ReviewResponse = await res.json();
    return data;
};