import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';
import {HttpHeaders} from '@angular/common/http';
import {Registration} from '../modal/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name = '';
  formData: any[] = [];
  test: Registration[];

  constructor(private service: CommonService) {
  }

  ngOnInit() {
  }

  addName() {
    const message = {
      id: 12,
      name: 'asish',
      address: 'jharkhand'
    };
    this.formData.push(message);
    console.log(this.formData);
  }

  getDate() {
    this.service.getName().subscribe(data => {
      this.formData = data;
    });
  }

  submit() {
    const nameList = [{
      id: 12,
      name: 'asish',
      address: 'jharkhand'
    },
      {
        id: 13,
        name: 'gurpreet',
        address: 'haryana'
      },
    ];
    this.service.setName(nameList).subscribe(data => {
     this.test = data;
     for (let i = 0; i < this.test.length; i++) {
       alert(i);
       this.formData.push(this.test[i]);
     }
    });
  }

}
