import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';

import { Course } from './model/course';
import { CourseService } from 'src/app/services/course.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'category', 'actions' ]
  courses$!: Observable<Course[]>

  constructor(
    private courseSevice: CourseService,
    private dialogErro: MatDialog
  ) {
    this.loadCourses()
  }

  ngOnInit(): void {
  }

  loadCourses() {
    this.courses$ = this.courseSevice.getCourses()
      .pipe(
        catchError(error => {
          this.onError(
            error.status,
            error.statusText,
            '',
            'Por favor entre em contato com nosso suporte!'
          )
          return of([])
        })
      )
  }

  onError(status: number, statusText: string, error: any, description: string) {
    this.dialogErro.open(ErrorDialogComponent, {
      data: {
        status,
        statusText,
        error,
        description
      }
    })
  }

}
