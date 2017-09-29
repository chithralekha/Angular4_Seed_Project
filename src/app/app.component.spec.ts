// import { TestBed, async } from '@angular/core/testing';
// import {RouterModule} from "@angular/router";
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
// });

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

@Component({
  template: `
    <a routerLink="/settings/{{collName}}/edit/{{item._id}}">link</a>
    <router-outlet></router-outlet>
  `
})
class TestComponent {
  collName = 'testing';
  item = {
    _id: 1
  };
}

@Component({
  template: ''
})
class DummyComponent {
}

describe('component: TestComponent', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'settings/:collection/edit/:item', component: DummyComponent }
        ])
      ],
      declarations: [ TestComponent, DummyComponent ]
    });
  });

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/settings/testing/edit/1');
      console.log('after expect');
    });
  })));
});