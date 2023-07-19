import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';

import { Course } from '../courses/courses/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly urlBase = '../../assets/CoursesDb.json'

  constructor(
    private http: HttpClient
  ) { }

    getCourses(): Observable<Course[]> {
      return this.http.get<Course[]>(this.urlBase)
        .pipe(
          first(),
          tap(courses => console.log(courses))
        )
    }
}