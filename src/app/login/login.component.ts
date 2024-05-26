import { Component } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

  login() {
    if (this.username === "admin" && this.password === "123456") {
      this.router.navigate(["/home"]);
    } else {
      this.errorMessage = "Invalid credentials";
    }
  }
}
