import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'login',
      title: 'Login',
      loadComponent: () =>
        import('../login/login.component').then(
          (m) => m.LoginComponent,
        ),
    },
    {
      path: '',
      title: 'The Real Game',
      loadComponent: () =>
        import('../main/main.component').then(
          (m) => m.MainComponent,
        ),
    },
    {
      path: '**',
      redirectTo: '',
    },
];
