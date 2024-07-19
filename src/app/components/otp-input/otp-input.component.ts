import { Component } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [NgOtpInputModule],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss'
})
export class OtpInputComponent {

}
