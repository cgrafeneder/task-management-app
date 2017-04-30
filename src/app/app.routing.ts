import { Routes, RouterModule } from '@angular/router';
import {TaskFormComponent} from "./task/task-form.component";


const APP_ROUTES: Routes = [
    { path: 'tasks/:task_id', component: TaskFormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);