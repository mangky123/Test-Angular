import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { MarriageComponent } from './components/marriage/marriage.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'link', component: LinkComponent },
  { path:'marriage', component: MarriageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
