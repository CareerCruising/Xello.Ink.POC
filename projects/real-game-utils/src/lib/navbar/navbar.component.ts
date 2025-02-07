import {
  Component,
  Input,
  Output,
  EventEmitter,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarItem } from './navbar.models';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() set items(items: NavbarItem[]) {
    if (!items) {
      return;
    }

    this._items = items;
  }
  _items: NavbarItem[];

  routeCurrent = computed(() => {});

  @Input() set currentRoute(route: string) {
    if (!route) {
      return;
    }

    this._currentRoute = route;
  }
  _currentRoute: string;

  @Output() onClickItem = new EventEmitter<string>();

  addOnClickEvent(value: string) {
    this.onClickItem.emit(value);
  }

  constructor(private router: Router) {
    this._items = [];
    this._currentRoute = '/';
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this._currentRoute = event.url;
      });
  }
}
