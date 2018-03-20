import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  fetchStatsData() {
    return this.http.get('http://localhost:8080/getstatsdata').map(
      (response) => response.json()
    );
  }

  fetchAllData() {
    return this.http.get('http://localhost:8080/getalldata').map(
      (response) => response.json()
    );
  }

  fetchCompareData() {
    return this.http.get('http://localhost:8080/getcomparedata').map(
      (response) => response.json()
    );
  }

}
