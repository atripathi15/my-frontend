import { Component, OnInit } from '@angular/core';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';
import {UrlConstants} from 'src/app/shared/constants/api-route.constants';
import { UserDetail } from '../domain/UserDetail';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../app.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private httpService:HttpGeneralService) { 
    this.get();
  }

  hide = true;
  data: any = [];
  response : any = [];
  uname:string='';
  pwd:string='';
  msg:string='';
  styleObj:any={"color":""};
  errorMsg: string='';
  user: UserDetail = {
    "username" :"ashish",
    "password" : "test123"
};

  get(){
    this.httpService.get(UrlConstants.get).subscribe(
      data=>{ 
        this.data = data;
      }
    );
  }
  authenticateUser(){
    /*if( this.uname==='kiran' && this.pwd==='kumar'){
      this.msg='Credentials found correct...';
      this.styleObj={"color":"GREEN"};
    }else{
      this.msg='Invalid input crednetials...';
      this.styleObj={"color":"RED"};
    }*/
    this.httpService.post(UrlConstants.get,this.user)
    .pipe(catchError(error => {
      this.errorMsg = error.message;
      throw error;
  })).subscribe(
      data=>{ 
        this.response = data;
        console.log(this.response);
      }
    );
  }


  ngOnInit(): void {
  }

}
