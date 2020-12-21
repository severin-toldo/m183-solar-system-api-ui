import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {bodyRoute} from "../../shared/routes";
import {debounce, debounceTime, delay, last, map, publishReplay, refCount, startWith, switchMap} from "rxjs/operators";
import {combineLatest, Observable, of} from "rxjs";
import {BodyService} from "../../service/body.service";
import {Body} from "../../model/body.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bodies$: Observable<Body[]>;

  public searchForm: FormGroup;
  public readonly bodyRoute = bodyRoute;


  constructor(private fb: FormBuilder,
              private router: Router,
              private bodyService: BodyService) {
  }

  public ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    });

    this.bodies$ = this.searchForm.get('searchTerm').valueChanges
      .pipe(startWith(null))
      .pipe(debounceTime(500))
      .pipe(switchMap(searchTerm => searchTerm ? this.bodyService.getBodiesBySearchTerm(searchTerm.trim()) : this.getPlanets()))
      .pipe(publishReplay())
      .pipe(refCount());
  }

  public onBodyClick(body: Body): void {
    this.router.navigate(bodyRoute(body.id));
  }

  // api somehow cannot filter for isPlanet...
  private getPlanets(): Observable<Body[]> {
    return combineLatest(
      this.bodyService.getBodyById('mercure'),
      this.bodyService.getBodyById('venus'),
      this.bodyService.getBodyById('terre'),
      this.bodyService.getBodyById('mars'),
      this.bodyService.getBodyById('jupiter'),
      this.bodyService.getBodyById('saturne'),
      this.bodyService.getBodyById('uranus'),
      this.bodyService.getBodyById('neptune')
    )
  }
}
