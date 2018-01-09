import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { ImageDialogActionComponent } from './image-dialog-action/image-dialog-action.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    AboutComponent,
    ArchitectureComponent,
    ImageDialogComponent,
    ImageDialogActionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule
  ],
  exports: [
  ],
  entryComponents: [
    ImageDialogComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
