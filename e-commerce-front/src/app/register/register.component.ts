import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // form group
  // form array
  // form control name

  registerForm=this.fb.group({

    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){ }


  // register
  register(){
    if(this.registerForm.valid){

      const username=this.registerForm.value.username
      const email=this.registerForm.value.email
      const password=this.registerForm.value.password

      // alert(`${username} ${email}  ${password}`)

      console.log(`${username} ${email}  ${password}`);

      const regBody={username,email,password}

      this.api.registerApi(regBody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.route.navigateByUrl('user/login')

          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
    }else{
      alert('InValid Form')
    }
  }

}
