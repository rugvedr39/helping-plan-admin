import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem("login") === "true";
  if (!loggedIn) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};
