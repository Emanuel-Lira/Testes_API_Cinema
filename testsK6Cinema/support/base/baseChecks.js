import { check } from "k6";

export class BaseChecks {
    checkStatusCode(title, response, expectedStatus = 200) {
        return check(response, {
            [title]: (r) => r.status === expectedStatus
        });
    }

    checkBody(title, response, expectedResponseBody) {
        return check(response, {
            [title]: (r) => r.json().includes(expectedResponseBody)
        });
    }

    checkResponseTime(response, expectedTime = 200) {
        return check(response, {
            "Tempo de resposta": (r) => r.timings.duration < expectedTime
        });
    }
}