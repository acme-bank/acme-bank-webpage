import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatDialogModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { ImageDialogActionComponent } from './image-dialog-action/image-dialog-action.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';
import { PlatformComponent } from './development/platform/platform.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { LoanProcessComponent } from './architecture/loan-process/loan-process.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    ImageDialogComponent,
    ImageDialogActionComponent,
    HomeComponent,
    AboutComponent,
    DevelopmentComponent,
    PlatformComponent,
    ArchitectureComponent,
    LoanProcessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    AppRoutingModule,
  ],
  exports: [
  ],
  entryComponents: [
    ImageDialogComponent,
  ],
  providers: [
    Title,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
