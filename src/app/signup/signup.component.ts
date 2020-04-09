import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators}
from '@angular/forms'
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

myForm: FormGroup;
message:string="";
userError:any;


constructor(public fb: FormBuilder,
public authService:AuthService){
  this.myForm= this.fb.group({
    firstName: ['',[Validators.required]],
   LastName: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required,
      Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required,
      Validators.minLength(8)]]
  },{
validator: this.checkIfMatchingPassword
("password","confirmPassword")

  })

}
checkIfMatchingPassword(passwordKey:string,
  confirmPasswordKey:string){
return (group:FormGroup)=>{
  let password=group.controls[passwordKey];
  let confirmPassword=group.controls[confirmPasswordKey];

  if(password.value == confirmPassword.value)
  {
    return ;
  }
  else{
    confirmPassword.setErrors({
      notEqualToPassword: true
    })
  }
}
}
  onSubmit(signupform){
    let email:string = signupform.value.email;
    let password:string = signupform.value.password;
    let firstName:string = signupform.value.firstName;
    let lastName:string = signupform.value.lastName;


this.authService.signup(email,password,firstName,lastName).then(()=>{
  
  this.message="you have been signed up successfully....please LOGIN."
})

.catch((error)=>{
  console.log(error); 
  this.userError=error;
})

  



  }
  

  ngOnInit(): void {
  }

}
