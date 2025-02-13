import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSummaryComponent } from "../../../main/components/chapter-summary/chapter-summary.component";

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule, ChapterSummaryComponent],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  @Input() component = '';

}
