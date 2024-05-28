import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  counts: any;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    try {
      this.counts = await this.userService.getCounts();
      console.log(this.counts);
    } catch (error) {
      console.error("Error fetching counts in HomeComponent:", error);
    }
  }
}
