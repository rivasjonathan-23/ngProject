import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Record } from "../components/client/record";

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
    this.http
      .post<Record[]>("http://localhost:3002/create", data)
      .subscribe(result => {
        console.log(result);
        return result;
      });
    return null;
  }

  deleteData(id: Record): Observable<Record[]> {
    this.http
      .delete<Record[]>("http://localhost:3002/delete/" + id._id)
      .subscribe(result => {
        return result;
      });
    return null;
  }

  updateData(data: Record): Observable<Record[]> {
    this.http
      .put<Record[]>("http://localhost:3002/update", data)
      .subscribe(result => {
        return result;
      });
    return null;
  }
}
