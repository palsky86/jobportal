import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api-const/api-const';
import { BaseServiceService } from '../services/base-service/base-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  Id: any;
  dataDetails:any;

  constructor(
    private baseService: BaseServiceService, 
    private route: ActivatedRoute ) {
     this.Id = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.baseService.getById(Api.jobs, this.Id).subscribe(res => {
      this.dataDetails = res;
      console.log(res, 'ppp');
    })
  }

}
