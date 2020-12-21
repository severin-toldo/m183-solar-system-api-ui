import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {getBodiesUrl, getBodyByIdUrl} from "../shared/urls";
import {map} from "rxjs/operators";
import {Body} from "../model/body.model";

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor(private http: HttpClient) {
  }

  public getBodyById(id: string): Observable<Body> {
    return this.http.get<Body>(getBodyByIdUrl(id));
  }

  public getBodiesBySearchTerm(searchTerm: string): Observable<Body[]> {
    const params = new HttpParams()
      .set('filter', `englishName,cs,${searchTerm}`);

    return this.http.get<{}>(getBodiesUrl(), {params}).pipe(map(res => this.responseToList(res)));
  }

  // fuck this api. it's in french and shitty designed
  private responseToList(res: any): Body[] {
    return res.bodies && res.bodies.length !== 0 ? res.bodies : [];
  }
}
