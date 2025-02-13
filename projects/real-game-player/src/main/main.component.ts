import { Component, computed, inject, OnInit } from '@angular/core';
import { ReaderComponent } from '../reader/reader.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { InkService } from '../services/ink.service';
import { CareerStore } from '../../store/career.store';
import { ActionViewComponent } from "./action-view/action-view.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ReaderComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ActionViewComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  careerStore = inject(CareerStore);

  isLoading = computed(() => {
    return this.careerStore.career() == null;
  });

  constructor(
    public inkService: InkService
  ) {}

  ngOnInit() {}

}
