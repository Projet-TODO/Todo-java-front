import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class ProjectDetailsService {
  constructor(private http: HttpClient) {
  }

  // private majorUrl = "http://localhost:8080/majors"

  // findAll(): Observable<Major[]> {
  //   return this.http.get<Major[]>(this.majorUrl)
  // }

  // findStudentsFromMajor(majorId: string): Observable<Student[]> {
  //   // return this.http.get<Student[]>(this.majorUrl + `/${majorId}/students`)
  // }
}
