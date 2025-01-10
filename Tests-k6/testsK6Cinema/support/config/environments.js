import { Rate, Trend } from "k6/metrics";

const successRate = new Rate("success_rate");

export function addMetrics(checks) {
    successRate.add(checks);
}

const thresholds = {
    getMovies: {
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<100"],
        http_req_failed: ["rate<0.05"],
    },

    getIDMovies: {
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<50"],
        http_req_failed: ["rate<0.05"],
    },

    postMovies: {
        http_reqs: ["rate>100"],
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<200"],
        http_req_failed: ["rate<0.05"],
    },
    
    postTickets: {
        http_reqs: ["rate>100"],
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<200"],
        http_req_failed: ["rate<0.05"],
    },

    deleteMovies: {
        http_reqs: ["rate>100"],
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<400"],
        http_req_failed: ["rate<0.05"],
    },

    putMovies: {
        http_reqs: ["rate>50"],
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<300"],
        http_req_failed: ["rate<0.05"],
    }}

const stages = {
    soakTest: [
        { duration: "1m", target: 300 },
        { duration: "120m", target: 300 }
    ],
    spikeTest: [
        { duration: "1m", target: 300 },
        { duration: "1m", target: 1000 },
        { duration: "1m", target: 300 },
    ],
    stressTest:[
        { duration: "1m", target: 100 },
        { duration: "1m", target: 200 },
        { duration: "1m", target: 300 },
        { duration: "1m", target: 400 },
        { duration: "1m", target: 500 },
        { duration: "1m", target: 600 },
        { duration: "1m", target: 700 },
        { duration: "1m", target: 800 },
        { duration: "1m", target: 900 },
        { duration: "1m", target: 1000 }
    ],
    loadTest: [
        { duration: "1m", target: 300 },
        { duration: "1m", target: 300 },
    ]

}

export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000",
        }
    },

    options: {

        tudoOkTest:{
            vus: 1,
            duration: "1s",
            iterations: 1
        },

        loadTest: {
            stages: stages.loadTest,
            thresholds: thresholds.deleteMovies

        },
        loadTest2: {
            stages: stages.loadTest,
            thresholds: thresholds.postTickets
        },
        
        smokeTest: {
            vus: 10,
            duration: "1m",
            thresholds: thresholds.getIDMovies
        },
        
        stressTest:{
            stages: stages.stressTest,
            thresholds: thresholds.postMovies
        },
        
        spikeTest: {
            stages: stages.spikeTest,
            thresholds: thresholds.putMovies
        },
        
        soakTest: {
            stages: stages.soakTest,
            thresholds: thresholds.getMovies

        }
    }
}

