import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  user: any = null;
  errorMessage: string = "";

  constructor(private router: Router,private userService: UserService) {}

  login() {
    this.userService.getPassword().subscribe({
      next: (response) => {
       if(this.username === "admin" && this.password === response.password){
         localStorage.setItem("login", "true");
         this.router.navigate(["/home"]);
       }else {
        this.errorMessage = "Invalid credentials";
      }
      },
      error: (error) => {
        console.error("Error fetching user", error);
      },
    });}
}
