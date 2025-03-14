import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
    let url = `https://ubiquitous-space-dollop-jjjw4vw5ppwjf7r6-12345.app.github.dev/book`;

    if(q){
        url += `/search/?q=${q}`;
    };

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }

        return await response.json();
    }catch (err){
        console.log(err);
        return [];
    }
}