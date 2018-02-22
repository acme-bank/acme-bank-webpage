import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';
import { PlatformComponent } from './development/platform/platform.component'
import { ArchitectureComponent } from './architecture/architecture.component';
import { LoanProcessComponent } from './architecture/loan-process/loan-process.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'development',
    component: DevelopmentComponent
  },
  {
    path: 'development/platform',
    component: PlatformComponent
  },
  {
    path: 'architecture',
    component: ArchitectureComponent
  },
  {
    path: 'architecture/loan-process',
    component: LoanProcessComponent
  }
];

const routesConfig = {
  useHash: true
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routesConfig)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
