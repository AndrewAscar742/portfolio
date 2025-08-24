import { Routes } from '@angular/router';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portfolio' // redireciona a rota raiz para /portfolio
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];