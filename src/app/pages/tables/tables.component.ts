import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { AddCartComponent } from '../cart/add-cart/add-cart.component';
import { EventsService } from 'src/app/service/events/events.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  showNewEventForm: boolean = false;
  eventToEdit: string;
  eventDetail !: FormGroup;
  // events: Event[] = [];
  events!: any;
  //selectedLink:String="";
  // event: Event = {
  //   title: '',
  //   description: '',
  //   location: '',
  //   startDate: '',
  //   endDate: '',
  //   capacity: 0,
  //   status: '',
  //   category: '',
  //   price: 0,
  //   createdAt: '',
  //   reservations: [],
  //   transports: [],
  //   feedbacks: [],
  //   products: [],
  //   user: undefined
  // };

  NewEvent: any = {
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
  constructor(private eventService: EventsService) { }
  

  ngOnInit(): void {
    
    // this.getEvents();
    
    this.eventService.getAllEvent().subscribe(result => {
      this.events = result;
    });
  }
  
  // navigateToCreateEvent():void {
  //   ()=>{this.router.navigate(['create-event'])}
  // }

//   navigateToCreateEvent = function () {
//     this.router.navigate(['create-event']);
// };

  showCreateNewEvent(confirm:boolean){
    this.showNewEventForm = true;
    if(confirm){
      this.createEvent();
      console.log('event',this.NewEvent);
      this.showNewEventForm = false;
      this.NewEvent;
    }
  }
  
  selectEventToEdit(id: string){
    this.eventToEdit = id;
  }

  deleteEvent(id: number) {
     if (id !== -1) {
       this.eventService.deleteEvent(id).subscribe(
         (events) => {
         this.events = events;
       },
       (error) => {
         console.log(error);
       }
     );
   }
 }

   updateEvent(): void {
    if (this.eventToEdit !== undefined) {
    this.eventService.updateEvent(this.NewEvent,this.eventToEdit).subscribe(
      () => {
        this.eventService.getAllEvent().subscribe(result => {
          this.events = result;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }}

 createEvent(): void {
  this.eventService.createEvent(this.NewEvent).subscribe(
    (createdEvent) => {
      if(createdEvent){
        this.events.push(createdEvent);
        this.eventService.getAllEvent().subscribe(result => {
          this.events = result;
        });
      }
    },
    (error) => {
      console.log(error);
    }
  )
}



    // this.eventService.deleteEvent(id)
    //   .subscribe(
    //     data => {
    //       this.events = this.events.filter(event => event.id !== id);
    //     },
    //     error => console.log(error));


    // Find the index of the item with the specified ID
    // const index = this.events.findIndex(item => item.id === id);

    // // If the item with the specified ID is found, remove it from the array
    // if (index !== -1) {
    //   this.events.splice(index, 1);
    // }
  }

//   getEvents(): void {
//     this.eventService.getAllEvents().subscribe(
//       (events: Event[]) => {
//         this.events = events;
//         console.log('events',events);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

  // deleteEvent(event: Event): void {
  //   if (event.id !== -1) {
  //     this.eventService.deleteEvent(event[id].getId).subscribe(
  //       () => {
  //       this.events = this.events.filter(e => e.id !== event.id);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
// }

//   saveEvent(): void {
//     if (this.event.id) {
//       this.updateEvent(this.event);
//     } else {
//       this.createEvent(this.event);
//     }
//   }

