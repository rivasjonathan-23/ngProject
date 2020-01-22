import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Record } from "../components/client/record";
import { Result } from "./result";

@Injectable({
  providedIn: "root"
})
export class Service {
  constructor(private http: HttpClient) {}
  url: string = "http://localhost:3002/post";

  getData(): Observable<Record[]> {
    return this.http.get<Record[]>(this.url + "/category/testing");
  }

  addData(data: Record): Observable<Record[]> {
    return this.http.post<Record[]>("http://localhost:3002/create", data);
  }

  deleteData(id: string): Observable<Result> {
    return this.http.delete<Result>("http://localhost:3002/delete/" + id);
  }

  updateData(data: Record): Observable<Result> {
    return this.http.put<Result>("http://localhost:3002/update", data);
  }
}
