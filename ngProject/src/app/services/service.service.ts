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
  url: string = "http://localhost:3002";

  getData(): Observable<Record[]> {
    return this.http.get<Record[]>(this.url + "/post/category/testing");
  }

  addData(data: Record): Observable<Record[]> {
    return this.http.post<Record[]>(this.url + "/create", data);
  }

  deleteData(id: string): Observable<Result> {
    return this.http.delete<Result>(this.url + "/delete/" + id);
  }

  updateData(data: Record): Observable<Result> {
    return this.http.put<Result>(this.url + "/update", data);
  }

  view(id: string): Observable<Record> {
    return this.http.get<Record>(this.url + "/view/" + id);
  }
}
