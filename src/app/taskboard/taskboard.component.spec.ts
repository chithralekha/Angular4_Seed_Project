import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskboardComponent } from './taskboard.component';
import {SortablejsModule} from 'angular-sortablejs';
import { FormsModule } from '@angular/forms';
import { TasksSummaryService } from './tasks.service';
import { Headers, HttpModule, Response, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MdModalDialog } from '../components/common/directives/mdModal.component';
import { Modal } from 'angular2-modal/plugins/bootstrap';
// TestBed.configureTestingModule({
//   imports: [ FormsModule ],
//   declarations: [
//     AppComponent
//   ],
//   providers:[AppService]
// });
import { Subscription } from 'rxjs/Subscription';

export abstract class AbstractMockObservableService {
  protected _subscription: Subscription;
  protected _fakeContent: any;
  protected _fakeError: any;

  set error(err) {
    this._fakeError = err;
  }

  set content(data) {
    this._fakeContent = data;
  }

  get subscription(): Subscription {
    return this._subscription;
  }

  subscribe(next: Function, error?: Function, complete?: Function): Subscription {
    this._subscription = new Subscription();
    spyOn(this._subscription, 'unsubscribe');

    if (next && this._fakeContent && !this._fakeError) {
      next(this._fakeContent);
    }
    if (error && this._fakeError) {
      error(this._fakeError);
    }
    if (complete) {
      complete();
    }
    return this._subscription;
  }
}
class MockService extends AbstractMockObservableService {
  doStuff() {
    return this;
  }
}

 let mockService;
 let modal;

// beforeEach(() => {
//   mockService = new MockService();
//   TestBed.configureTestingModule({
//     providers: [{provide: TasksSummaryService, useValue: mockService }],
//     declarations: [ TaskboardComponent ]
//   });
// });
// it('should call service success', () => {
//   mockService.content = 'some content';
//   let fixture = TestBed.createComponent(TaskboardComponent);
//   // test component for success case
// });
// it('should call service error', () => {
//   mockService.error = 'Some error';
//   let fixture = TestBed.createComponent(TaskboardComponent);
//   // test component for error case
//   // this should handle your coverage problem
// });

// // this assumes you have unsubscribed from the subscription in your
// // component, which you should always do in the ngOnDestroy of the component
// it('should unsubscribe when component destroyed', () => {
//   let fixture = TestBed.createComponent(TaskboardComponent);
//   fixture.detectChanges();
//   fixture.destroy();
//   expect(mockService.subscription.unsubscribe).toHaveBeenCalled();
// })

describe('TaskboardComponent', () => {
  let component: TaskboardComponent;
  let fixture: ComponentFixture<TaskboardComponent>;

  beforeEach(async(() => {
    mockService = new MockService();
     modal = { openModal: jasmine.createSpy('openModal') }
    TestBed.configureTestingModule({
      imports: [SortablejsModule, RouterTestingModule],
      declarations: [ TaskboardComponent ],
      providers: [TasksSummaryService, HttpModule, FormsModule, Http, BrowserModule, {provide: HttpClient, deps: [MockBackend]}, {provide: TasksSummaryService, useValue: mockService }, { provide: Modal, useValue: modal }, { provide: MdDialog, useValue: modal }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
