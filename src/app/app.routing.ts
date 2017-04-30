import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from "./task/task-list.component";
import { IntroComponent } from "./intro/intro.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'tasks/all', pathMatch: 'full' },
    { path: 'tasks/:filter_status', component: TaskListComponent },
    { path: 'home', component: IntroComponent },
    { path: '**', redirectTo: 'tasks/all', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);