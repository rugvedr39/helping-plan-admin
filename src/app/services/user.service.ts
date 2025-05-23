import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // private apiUrl = "http://localhost:4000/api/";
  private apiUrl = "https://helping.rrinstitute.cloud/api/";

  constructor(private http: HttpClient) {}

  getUsers(page: number, limit: number, search: string): Observable<any> {
    const params = {
      page: page.toString(),
      limit: limit.toString(),
      search,
    };

    return this.http.get<any>(this.apiUrl + "admin/users", { params });
  }

  genrateEpin(body: any) {
    return this.http.post(this.apiUrl + "epin/createEpin", body);
  }
  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}admin/users/${user.id}`;
    return this.http.put(url, user);
  }

  async getCounts(): Promise<any> {
    try {
      const counts = await this.http
        .get(this.apiUrl + "admin/usersCount")
        .toPromise();
      return counts;
    } catch (error) {
      console.error("Error fetching user counts:", error);
      throw error;
    }
  }

  getPassword():Observable<any> {
    return this.http.get(this.apiUrl + "admin/getPassword");
  }
  setPassword(body: any): Observable<any> {
    return this.http.post(this.apiUrl + "admin/updatePassword", body);
  }

  getComunicationData(): Observable<any> {
    return this.http.get(`${this.apiUrl}admin/getAdminDetails`);
  }

   saveMeetingDetails(data: any) {
    return this.http.post(`${this.apiUrl}admin/save-meeting-details`, data);
  }


}
