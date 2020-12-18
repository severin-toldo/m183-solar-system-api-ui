import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {bodyRoute, homeRoute} from "./shared/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public searchForm: FormGroup;
  public homeRoute = homeRoute;


  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    });
  }

  public onSearch(): void {
    const searchTerm = this.searchForm.get('searchTerm').value;
    this.router.navigate(bodyRoute(searchTerm));
  }
}
