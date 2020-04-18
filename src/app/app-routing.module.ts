import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { IsLoggedinGuard } from './guards/is-loggedin.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [IsLoggedinGuard] },
  { path: 'signup', component: SignupPageComponent },
  { path: 'statistic', component: StatisticPageComponent, canActivate: [IsLoggedinGuard] },
  { path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [IsLoggedinGuard] },
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [IsLoggedinGuard] },
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [IsLoggedinGuard] },
  { path: 'contact', component: ContactPageComponent, canActivate: [IsLoggedinGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
