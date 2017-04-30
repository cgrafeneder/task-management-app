import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'intro',
    template: `
    <br/><br/><br/>
    <div class="jumbotron">
      <h1>Welcome to Task Management System</h1>
      <p>The task management application is intended to make the user organize his tasks.
      For each job a title and a due date can be set. Tasks themselves can only be created by means of a title.
      Subsequently, tasks can be chopped off and marked as 'Done' and they can also be deleted.
      Furthermore you can filter them by their state.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Go to the Task-List
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a></p>
    </div>
    `
})

export class IntroComponent{
    constructor(private route: ActivatedRoute){

    }
}