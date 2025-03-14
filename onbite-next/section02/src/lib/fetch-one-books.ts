import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null>{
    const url = `https://ubiquitous-space-dollop-jjjw4vw5ppwjf7r6-12345.app.github.dev/book/${id}`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }

        return await response.json();
    } catch(err){
        console.error(err);
        return null;
    }
}