import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements OnInit {

  constructor() {
    
   }

   users = [
    { firstName: 'Gina', email: 'gina.jabowski@test.com', level: 2 },
    { firstName: 'Frank',  email: 'frank.murphy@test.com', level: 11 },
    { firstName: 'Jessi', email: 'jessi.glaser@test.com', level: 4 },
    { firstName: 'Vic', email: 'vic.reynolds@test.com', level: 7 },
    { firstName: 'Jay', email: 'jay.bilzerian@test.com', level: 1 }
];

  ngOnInit(): void {
  }

}
