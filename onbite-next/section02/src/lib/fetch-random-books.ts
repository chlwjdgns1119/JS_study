import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]>{
    const url = `https://ubiquitous-space-dollop-jjjw4vw5ppwjf7r6-12345.app.github.dev/book/random`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }

        return await response.json();
    } catch (err) {
        console.log(err);
        return [];
    }
}