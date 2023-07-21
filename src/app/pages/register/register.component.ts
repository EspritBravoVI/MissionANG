import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../service/user/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(protected registerService:RegisterService,protected router:Router) { }

  ngOnInit() {
  }

  register(d:any):void{
    this.registerService.createAccount(d).subscribe((res) => {
        console.log(res);
        this.router.navigate(['login']);
      },
      error => {
        // Handle login error
        console.log(error)
        alert("wrong")
      })
  }

}
