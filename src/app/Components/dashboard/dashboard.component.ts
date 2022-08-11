
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { DataService } from 'src/app/sevice/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  token: any;
  message:any;
  subscription: any;
  searchString:any='';

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
 

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private snav:MatSnackBar, private router: Router, private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscription = this. data.currentMessage.subscribe((message: any) => this.message = message)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout()
  {
    this.token=localStorage.removeItem("token")
    this.router.navigateByUrl("/login");
    this.snav.open('Logout Successfully..!!!','..', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    })
  }
  reloadCurrentPage() {
    window.location.reload();
   }
   searchNote(text:any){
    this.data.changeMessage(text.target.value);
    console.log(this.searchString);
  }
  

}
