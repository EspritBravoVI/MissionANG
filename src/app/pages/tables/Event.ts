export class Event {
    id?: number;
    title!: string;
    description!: string;
    location!: string;
    startDate!: string;
    endDate!: string;
    capacity!: number;
    status!: string;
    category!: string;
    price!: number;
    createdAt!: string;
    reservations!: Reservation[];
    transports!: Transport[];
    feedbacks!: Feedback[];
    products!: Product[];
    user?: CustomUser;
    // Add any additional properties from the Event entity as needed
  }
  export interface Reservation {
    // Define Reservation properties here
  }
  
  export interface Transport {
    // Define Transport properties here
  }
  
  export interface Feedback {
    // Define Feedback properties here
  }
  
  export interface Product {
    // Define Product properties here
  }
  
  export interface CustomUser {
    // Define CustomUser properties here
  }