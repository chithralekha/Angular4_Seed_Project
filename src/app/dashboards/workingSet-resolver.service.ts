import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { WorkingSet} from '../components/common/models/workingSet.model';
import { NavigationService} from '../components/common/navigation/navigation.service';
@Injectable()
export class WorkingSetResolver implements Resolve<WorkingSet> {
    constructor(private workingSetService: NavigationService,
    private router: Router )  {

    }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.workingSetService.getNavigationSummary()
      .map(workingSets => {
        if (workingSets) {
          return workingSets;
        }        
      })
      .do(data => console.log('Get all WorkingSets completed',data))
      .catch((error: any) => {
        console.log(`${error}. Heading back to vehicle list`);
        this.router.navigate(['/vehicles']);
        return Observable.of(null);
      });
  }
}
