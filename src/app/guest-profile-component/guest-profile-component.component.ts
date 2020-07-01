import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-guest-profile-component',
  templateUrl: './guest-profile-component.component.html',
  styleUrls: ['./guest-profile-component.component.css']
})
export class GuestProfileComponentComponent implements OnInit {

  constructor(private  commonService: CommonService) { }

  ngOnInit() {
  }

  login() {
    this.commonService.login();
  }

}
