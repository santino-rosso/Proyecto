import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  constructor(private authService: AuthService) {}

  onSubmit(formData: any) {
    this.authService.register(formData).subscribe(
      (response) => {
      },
      (error) => {
      }
    );
  }

}



