import http  from "k6/http";
import { BaseService } from "./baseServices.js";

export class BaseRest extends BaseService {

    constructor(baseURI) {
        super(baseURI);
    }

    getId(id, endpoint, headers = {}, params = {}) {
        let uri = this.baseURI + endpoint + "/" + id;
        let options = this.buildOptions(headers, params);
        return http.get(uri, options);
    }

    get(endpoint, headers = {}, params = {}) {
        let uri = this.baseURI + endpoint;
        let options = this.buildOptions(headers, params);
        return http.get(uri, options);
    }

    delete(id, endpoint, headers = {}, params = {}) {
        let uri = this.baseURI + endpoint + "/" + id;
        let options = this.buildOptions(headers, params);
        return http.del(uri, null, options);
    }
    
    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.baseURI + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options);
    }
    put(id, body, endpoint, headers = {}, params = {}) {
        let uri = this.baseURI + endpoint + "/" + id;
        let options = this.buildOptions(headers, params);
        return http.put(uri, JSON.stringify(body), options);
    }
    
    buildOptions(headers = {}, params = {}) {
        return {
            headers: Object.assign ({"Content-Type": "application/json"}, headers),
            params: Object.assign ({}, params)
        };
    }
}