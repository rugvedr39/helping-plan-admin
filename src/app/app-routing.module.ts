import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { UserTableComponent } from "./components/user-table/user-table.component";
import { EpinsComponent } from "./epins/epins.component";
import { authGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "user", component: UserTableComponent, canActivate: [authGuard] },
  { path: "epin", component: EpinsComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
