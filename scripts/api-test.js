// Import necessary modules
import { createEntry } from "../functions/createFunctions.js"

export const options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 0 },
    ],
};


export default function createPost() {

    createEntry(
        "https://jsonplaceholder.typicode.com/posts", {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    )
}