import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../api-const/api-const';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  baseUrl: string =  'http://localhost:3000';

  constructor(private http: HttpClient) { 
  }


  post(data:any){
    return this.http.post<any>(`${this.baseUrl}/${Api.jobs}`, data).pipe(map((res:any) => res));
  }

  put(url:any, id:any, data:any){
    return this.http.put<any>(`${this.baseUrl}/${url}/`+id, data).pipe(map((res:any) => res));
  }

  get(url:any){
    return this.http.get<any>(`${this.baseUrl}/${url}`).pipe(map((res:any)=> res))
  }

  getById(url:any, id:any){
    return this.http.get<any>(`${this.baseUrl}/${url}/${id}`).pipe(map((res:any)=> res))
  }
  
  delete(url:any, id:any){
    return this.http.delete<any>(`${this.baseUrl}/${url}/`+id).pipe(map((res:any)=> res))
  }



}
