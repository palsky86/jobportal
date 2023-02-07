import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../services/api-const/api-const';
import { BaseServiceService } from '../services/base-service/base-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobList:any;

  constructor(
    private baseService: BaseServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(){
    this.baseService.get(Api.jobs).subscribe(res => this.jobList = res)
  }

  goToDatils(id:any){
    this.route.navigate([`jobs/${id}`])
  }

}
