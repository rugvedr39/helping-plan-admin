import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent implements OnInit {
  users: any = [];
  totalUsers: number = 0;
  totalPages: number = 100;
  currentPage: number = 1;
  pageSize: number = 50;
  searchQuery: string = "";
  count: number = 0;
  userId: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService
      .getUsers(this.currentPage, this.pageSize, this.searchQuery)
      .subscribe({
        next: (response) => {
          console.log(response.users);
          this.users = response.users;
          this.totalUsers = response.total;
          this.totalPages = response.totalPages;
        },
        error: (error) => {
          console.error("Error fetching users", error);
        },
      });
  }

  pageChanged(): void {
    this.currentPage = this.currentPage + 1;
    this.fetchUsers();
  }
  perChanged(): void {
    this.currentPage = this.currentPage - 1;
    this.fetchUsers();
  }
  setUserId(userId: number) {
    this.userId = userId;
  }
  generateEpin() {
    console.log(
      "Generate Epin for userId:",
      this.userId,
      "with count:",
      this.count,
    );
    this.userService
      .genrateEpin({ count: this.count, userId: this.userId })
      .subscribe((data: any) => {
        if (data.data) {
          alert(data.message);
        }
      });
  }
}
