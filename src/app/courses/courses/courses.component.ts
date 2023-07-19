import { Component, OnInit } from '@angular/core';

import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'Categoria' ]
  courses: Course[] = [
    { id: 1, name: 'Java API', category: 'Backend' },
    { id: 2, name: 'Banco De Dados', category: 'Backend' },
    { id: 3, name: 'Angular', category: 'Frontend' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
