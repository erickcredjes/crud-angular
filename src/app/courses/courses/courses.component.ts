import { Component, OnInit } from '@angular/core';

import { Course } from './model/course';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'Categoria' ]
  courses!: Observable<Course[]>

  constructor(
    private courseSevice: CourseService
  ) {
    this.loadCourses()
  }

  ngOnInit(): void {
  }

  loadCourses() {
    this.courses = this.courseSevice.getCourses()


    // this.courseSevice.getCourses().subscribe(
    //   (res) => {
    //     this.courses = res !== null ? res : []
    //   },
    //   (resError) => {
    //     console.log(resError)
    //     console.log(resError.status)
    //     console.log(resError.statusText)
    //     console.log(resError.error)
    //   }
    // )
  }

}
