import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  private fb           = inject(FormBuilder);
  private AuthService  = inject(AuthService);
  private router       = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['gerardo@google.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
  });

  login() {
    // console.log(this.myForm.value);
    const {email, password} = this.myForm.value;
    this.AuthService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error');
        }
      })
  }
}
