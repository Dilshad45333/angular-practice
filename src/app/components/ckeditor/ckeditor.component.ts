import { Component,Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ckeditor',
  standalone: true,
  imports: [CKEditorModule,CommonModule],
  templateUrl: './ckeditor.component.html',
  styleUrl: './ckeditor.component.scss'
})
export class CkeditorComponent {
 public Editor :any
  
}
