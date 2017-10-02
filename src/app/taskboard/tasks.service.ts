import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Task } from './task.model';
import { DueStatus } from './duestatus.model';
import { TaskState } from './taskstate.model';

@Injectable()

export class TasksSummaryService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
  getTaskSummary(filterId:number, bcp:number) {
    //alert('filterId=' + filterId + 'bcp=' + bcp);
    return this.http.get('http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieAPI/api/WorkingSets/'+ bcp + '/TaskInfos?filterId=' + filterId)
      .map((response: Response) => <Task[]>response.json().taskInfos)
      .do(data => console.log('Get all tasks completed', data))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
  getAppName() {
    return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
