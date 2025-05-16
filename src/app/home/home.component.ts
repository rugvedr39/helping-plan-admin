import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  counts: any;
    zoomMeetingForm = {
    title: '',
    time: '',
    url: '',
    whatsappUrl: ''
  };


  constructor(private userService: UserService) {}

  async ngOnInit() {
    try {
      this.counts = await this.userService.getCounts();
      console.log(this.counts);
    } catch (error) {
      console.error("Error fetching counts in HomeComponent:", error);
    }
    this.loadMeetingDetails();
  }

  loadMeetingDetails() {
    this.userService.getComunicationData().subscribe(
      (data: any) => {
        this.zoomMeetingForm = {
          title: data.data.zoomMeetingTitle || '',
          time: data.data.zoomMeetingTime || '',
          url: data.data.zoomMeetingUrl || '',
          whatsappUrl: data.data.whatsappGroupUrl || ''
        };
      },
      (error:any) => {
        console.error('Error loading meeting details:', error);
      }
    );
  }

  saveMeetingDetails() {
    const meetingData = {
      zoomMeetingTitle: this.zoomMeetingForm.title,
      zoomMeetingTime: this.zoomMeetingForm.time,
      zoomMeetingUrl: this.zoomMeetingForm.url,
      whatsappGroupUrl: this.zoomMeetingForm.whatsappUrl
    };

    this.userService.saveMeetingDetails(meetingData).subscribe(
      (response:any) => {
        alert('Meeting details saved successfully!');
        // You can use a toast notification here instead
      },
      (error:any) => {
        console.error('Error saving meeting details:', error);
        alert('Failed to save meeting details');
      }
    );
  }
}
