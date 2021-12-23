
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title : " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <h3>{{ num }}</h3>
        `
})

export class CoursesComponent {
    title = "List of Courses";
    courses;
    num;

    getTitle() {
        
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.num = service.num;
        service.num++;
    }
}