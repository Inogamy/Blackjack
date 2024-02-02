import { Routes } from '@angular/router';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';

export const routes: Routes = [
  {
    path: 'blackjack',
    component: BlackjackComponent,
  },
  {
    path:'',
    redirectTo:'blackjack',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'blackjack'
  }

];
