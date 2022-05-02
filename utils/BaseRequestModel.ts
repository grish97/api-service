import {Observable} from 'rxjs'
import { Method, _Headers, Body } from "./types";

interface Props {
    getUrl(): string;
    getMethod(): Method;
    getHeaders(): _Headers;
    getBody(): Body;
    request(): Observable<any>;
}

const baseUrl = "//localhost:8000/api";

class BaseRequestModel implements Props {
    constructor(private url: string, private method?: Method, private headers?: _Headers, private body?: Body) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }

    request(): Observable<any> {
        return new Observable(observable => {
            fetch(`${baseUrl}/${this.getUrl()}`, {
                method: this.getMethod(),
                headers: this.getHeaders(),
                body: this.getBody(),
            })
            .then((response: Response) => response.json())
            .then((data: any) => {
                observable.next(data);
                observable.complete();
            })
            .catch((error: any) => {
                observable.error(error);
            });
        });
    }

    getUrl(): string {
        return this.url;
    }

    getMethod(): Method {
        return this.method || "GET";
    }

    getHeaders(): _Headers {
        return this.headers || {};
    }

    getBody(): Body {
        return this.body;
    }
}

export default BaseRequestModel;