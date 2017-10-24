import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { BlogAdminService } from '../providers/blog-admin.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BsModalComponent  } from 'ng2-bs3-modal';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('myFirstModal')
  modal: BsModalComponent;
  // encapsulation: ViewEncapsulation.None
  message:String;
  data;
  private userData: any = {};
  constructor(public router: Router, private blogAdmin: BlogAdminService) {
    window.scrollTo(0, 0);
    this.userData = {"email": "", "password": ""};
   }

  ngOnInit() {
  }
  open(textContent:any) {
    this.message = textContent;
    this.modal.open('sm');
  }
  errorText = "";
  login(validVal: NgForm) {    
    if(validVal.valid){
    this.blogAdmin.login(this.userData)
      .then(
        data => {
          this.open('Login Successfully');
          var tempData = data;
          this.data = data;
          if (this.data.status == 200) {
            var userInfo = {              
                firstname: this.data.user.firstname, 
                lastname:this.data.user.lastname, 
                email: this.data.user.email,
                userId: this.data.user.id,
                mobile: this.data.user.mobile,
                state: this.data.user.state,
                country: this.data.user.country          
            };
            localStorage.setItem('userData', JSON.stringify(userInfo));
            validVal.resetForm();
             this.router.navigate(['/main/ListAllUsersComponent']);
            
          } 
          else {
            console.log(data);
            this.errorText = JSON.parse(this.data['_body']).error;
          }
          
        });
    } else {
      this.open("Fill all fields");
    }
  }
}
