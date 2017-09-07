import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { WorkingSet} from '../models/workingSet.model';
@Injectable()

export class NavigationService {
  constructor(private http: Http) {}
  
  getNavigationSummary() {
    return this.http.get('http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8087/MagpieAPI/api/WorkingSets/')
      .map((response: Response) => <WorkingSet[]>response.json())
      .do(data => console.log('Get all WorkingSets completed',data))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
  
}
