import { Component, OnInit } from '@angular/core';
import { ReaderComponent } from '../reader/reader.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { InkService } from '../services/ink.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ReaderComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  constructor(
    public inkService: InkService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserData().subscribe(res => {
      console.log('init', res);
    });
    if (!localStorage.getItem('token') && !environment.production) {
      this.router.navigate(['login']);
    }
  }

}
