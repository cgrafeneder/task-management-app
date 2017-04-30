import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from "./task/task-list.component";

const APP_ROUTES: Routes = [
    { path: ':filter_status', component: TaskListComponent },
    { path: '**', redirectTo: '/all' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);