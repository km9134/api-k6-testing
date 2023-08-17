// Imports
import http from "k6/http"
import { statusCheck } from "../functions/checkValues.js"

/**
 * 
 * @param {string} url - endpoint to test
 * @param {JSON} payload - title, body and userID
 * @param {JSON} params - headers
 * @returns 
 */
export function createEntry(url, payload, params) {

    // send a post request and save response as a variable
    const res = http.post(url, JSON.stringify(payload), params);

    // check that response is 201
    statusCheck(res, 201)

}