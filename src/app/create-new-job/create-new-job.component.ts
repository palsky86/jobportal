import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseServiceService } from '../services/base-service/base-service.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss']
})
export class CreateNewJobComponent implements OnInit {

  creatJobForm:any = FormGroup;
  submitted = false;

  constructor(
    private toastrService: ToastrService,
    private baseService: BaseServiceService,
    private fb: FormBuilder, 
    private route: Router) { }

    ngOnInit(): void {
      this.buildForm();
    }
  
    buildForm(){
      this.creatJobForm = this.fb.group({
        job_number: ['', Validators.required],
        job_title: ['', Validators.required],
        job_start_date: ['', Validators.required],
        job_close_date: ['', Validators.required],
        number_of_openings: ['', Validators.required],
        job_notes: ['', Validators.required],
        experience_required: [false, Validators.requiredTrue]
      })
    }
  
    get f(){
      return this.creatJobForm.controls;
    }
  
    submit(){
  
      this.submitted = true;
  
      if (this.creatJobForm.invalid){
        return
      }
      this.baseService.post(this.creatJobForm.value).subscribe(res =>{
        this.toastrService.success('Job Create successfully!');
        this.route.navigate(['jobs'])
        this.submitted = false;
        this.creatJobForm.reset();
      });
    
    }

}
