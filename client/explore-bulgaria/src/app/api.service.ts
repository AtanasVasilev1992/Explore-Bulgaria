import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getInfo() {
        const {apiUrl} = environment;

        return this.http.get(`${apiUrl}`)
        
    }
}
