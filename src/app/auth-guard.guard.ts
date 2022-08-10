import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './sevice/authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private Authservice: AuthserviceService, private router: Router) {}  
  canActivate(): boolean {  
      if (!this.Authservice.gettoken()) {  
          this.router.navigateByUrl("/login");  
      }  
      return this.Authservice.gettoken();  
  }
 
  
}
