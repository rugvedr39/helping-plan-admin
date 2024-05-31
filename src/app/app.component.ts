import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

password: any;
  constructor(private router: Router,private userService: UserService) {}
logout() {
  localStorage.removeItem('login');
  this.router.navigate(["/login"]);
}
  title = 'helpingPlan';

  save() {
   this.userService.setPassword({password: this.password}).subscribe({
     next: (response) => {
      console.log(response);
      this.router.navigate(["/login"]);
     },
     error: (error) => {
       console.error("Error fetching user", error);
     },
   });
  }
}
