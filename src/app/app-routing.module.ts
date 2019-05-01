import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGES
import { HomeComponent } from './pages/home/home.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'contact', component: ContactComponent },
  { path: 'contact/edit/:id', component: ContactEditComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },

  { path: 'statistic', component: StatisticComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/:name', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
