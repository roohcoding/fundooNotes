
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
  gridView:any=true;

  

  private _mobileQueryListener: () => void;
 

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private snav:MatSnackBar, private router: Router, private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscription = this. data.currentMessage.subscribe((message: any) => this.message = message)
    this.data.currentView.subscribe(flag => this.gridView = flag)
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
  grid(){
    this.gridView=true;
    this.data.changeView(this.gridView)
  }
  list(){
    this.gridView=false;
    this.data.changeView(this.gridView)
  }
  

}
