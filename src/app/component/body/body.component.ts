import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, publishReplay, refCount, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Body} from "../../model/body.model";
import {BodyService} from "../../service/body.service";
import { bodyRoute } from 'src/app/shared/routes';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public body$: Observable<Body>;
  public readonly bodyRoute = bodyRoute;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private bodyService: BodyService) {
  }

  public ngOnInit(): void {
    this.body$ = this.route.params
      .pipe(switchMap(params => {
        if (params && params.id) {
          return this.bodyService.getBodyById(params.id);
        } else {
          return of(null);
        }
      }))
      .pipe(publishReplay())
      .pipe(refCount());
  }

  public onMoonClick(moon: any): void {
    const id = moon.rel.split('/').pop();
    this.router.navigate(bodyRoute(id));
  }
}
