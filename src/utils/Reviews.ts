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

export const postReview = async (name: string, review: string): Promise<string | Error> => {

    let date: string = new Date().toLocaleDateString();
    date = date.replaceAll(". ", "-").substring(0, date.length - 1);
    
    const res = await fetch(`${env.api}/reviews/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            review: review,
            publish: new Date().toISOString()
        })
    });

    if(!res.ok) throw new Error("Something goes wrong");

    return res.text();
};