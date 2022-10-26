import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Angular2"},
    {"id": 3, "name": "Angular3"},
    {"id": 4, "name": "Angular4"},
    {"id": 5, "name": "Angular5"}

  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
