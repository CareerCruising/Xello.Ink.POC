import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSummaryComponent } from "../../../main/components/chapter-summary/chapter-summary.component";
import { EmployeeIdComponent } from '../employee-id/employee-id.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule, ChapterSummaryComponent, EmployeeIdComponent],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  @Input() component = '';
  
}
