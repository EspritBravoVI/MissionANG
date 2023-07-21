import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { Transport } from 'src/app/models/Transport';
import { ReservationService } from 'src/app/service/reservation/reservation.service';
import { TransportService } from 'src/app/service/transport/transport.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  transportList!: Transport[];
  tot = 0;

  constructor(private transposrtService: TransportService) {}

  ngOnInit(): void {
    this.transposrtService.getAllTransports().subscribe((res:HttpResponse<Transport[]>) => {
      this.transportList = res.body!;
    });
  }

}
