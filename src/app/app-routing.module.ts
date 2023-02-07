import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewJobComponent } from './create-new-job/create-new-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  { path:'jobs', component:JobsComponent, pathMatch:'full' },
  { path:'jobs/new', component:CreateNewJobComponent, pathMatch:'full'},
  { path:'jobs/:id', component:JobDetailsComponent, pathMatch:'full' },
  { path:'', redirectTo:'jobs', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
