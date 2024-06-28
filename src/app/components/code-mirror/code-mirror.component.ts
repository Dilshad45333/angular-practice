import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-code-mirror',
  standalone: true,
  imports: [CodemirrorModule,CommonModule,FormsModule],
  templateUrl: './code-mirror.component.html',
  styleUrl: './code-mirror.component.scss'
})
export class CodeMirrorComponent {
content: string = 'initial code';

}
