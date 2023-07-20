import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { ReqStatus } from 'src/app/models/ReqStatus';
import { EventsService } from 'src/app/service/events/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent  {

  newEvent: Event = {
  id: 0,
  hostId: 0,
  supplierId: 0,
  location: '',
  dateEvent: new Date,
  maxParticipants: 0,
  description: '',
  participantsCount: 0,
};

  constructor(private eventSerivce: EventsService) { }

  onSubmit(): void {
    console.log(this.newEvent)
    this.eventSerivce.createEvent(this.newEvent).subscribe(
      (res: HttpResponse<Event>) => {
        console.log('event created successfully:', res.body);
      },
      (error: any) => {
        console.error('Error creating event:', error);
      }
    );
  }
}
