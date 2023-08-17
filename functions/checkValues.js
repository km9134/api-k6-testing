import { check } from "k6";

export function statusCheck(res, statusCode) {
    check(res, {
        [`Response code equals ${statusCode}`]: (r) => r.status === statusCode,
    })
}