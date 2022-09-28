import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getSocialUsers() {
    return this.http.get('http://localhost:3000/grafica')
  }

  getSocialUsersDonaData() {
    return this.getSocialUsers()
      .pipe(
        delay(2500),
        map((data) => {
          return {
            labels: Object.keys(data),
            datasets: [{ data: Object.values(data) }],
          };
        })
      );
  }
}
