import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const url = `${this._baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!)
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      )

  }

  logout() {
    localStorage.clear();
  }
}
