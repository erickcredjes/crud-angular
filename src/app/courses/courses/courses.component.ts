import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from './models/course';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type']
  courses: Course[] = [
    { id: 1, name: 'Java API', type: 'Backend' },
    { id: 2, name: 'Banco De Dados', type: 'Backend' },
    { id: 3, name: 'Angular', type: 'Frontend' },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
