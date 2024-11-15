import { Injectable,inject } from "@angular/core"
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { tap, catchError } from "rxjs/operators"
import { environment } from "../../environments/environment"


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private authUrl = `${environment.API_URL}/auth`

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) : Observable<any> {
    const url = `${this.authUrl}/login`
    console.log("Authenticating...")
    const options = {
      params: new HttpParams().set("email", email).set("password", password),
    }
    return this.http
      .post(url, null, options)
      .pipe(
        tap((response) => {
          console.log("Authenticated successfully")
          this.setSession(response)
        }),
        catchError(this.handleError("authenticate a")),
      )
  }
  private setSession(authResult: any) {
    console.log("Setting session...")
    console.log(authResult)
    localStorage.setItem("user", JSON.stringify(authResult))
    console.log("Session set")
    console.log(localStorage.getItem("user"))
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem("user")
  }

  logout(): void {
    localStorage.removeItem("user")
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
