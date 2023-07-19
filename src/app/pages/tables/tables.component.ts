import { Component, OnInit } from '@angular/core';
import { Event } from './Event';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  events: Event[] = [];
  selectedLink:String="";
  event: Event = {
    title: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    capacity: 0,
    status: '',
    category: '',
    price: 0,
    createdAt: '',
    reservations: [],
    transports: [],
    feedbacks: [],
    products: [],
    user: undefined
  };
  constructor(private eventService: EventService) { }
  

  ngOnInit(): void {
    
    this.getEvents();
    
    
  }
  

  getEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  createEvent(event: Event): void {
    this.eventService.createEvent(event).subscribe(
      (createdEvent: Event) => {
        this.events.push(createdEvent);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEvent(event: Event): void {
    if (event.id !== undefined) {
    this.eventService.updateEvent(event.id, event).subscribe(
      (updatedEvent: Event) => {
        const index = this.events.findIndex(e => e.id === updatedEvent.id);
        if (index !== -1) {
          this.events[index] = updatedEvent;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }}

  deleteEvent(event: Event): void {
    if (event.id !== undefined) {
      this.eventService.deleteEvent(event.id).subscribe(
        () => {
        this.events = this.events.filter(e => e.id !== event.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

  saveEvent(): void {
    if (this.event.id) {
      this.updateEvent(this.event);
    } else {
      this.createEvent(this.event);
    }
  }

}
