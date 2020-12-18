import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {getBodiesUrl} from "../shared/urls";
import {map} from "rxjs/operators";
import {Body} from "../model/body.model";

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor(private http: HttpClient) {
  }

  public getBodyById(id: string): Observable<Body> {
    return this.getBodiesByFilter(`id,eq,${id}`)
      .pipe(map(res => res && res.length !== 0 ? res[0] : null));
  }

  public getBodiesBySearchTerm(searchTerm: string): Observable<Body[]> {
    return this.getBodiesByFilter(`englishName,cs,${searchTerm}`);
  }

  private getBodiesByFilter(filter: string): Observable<Body[]> {
    const params = new HttpParams()
      .set('filter', filter);

    return this.http.get<{}>(getBodiesUrl(), {params}).pipe(map((res: any) => res.bodies)); // fuck this api. it's in french and shitty designed
  }
}
