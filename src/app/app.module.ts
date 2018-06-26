import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';

const appRoutes:Routes=[
{path: '', component:AppComponent}
{path: 'about', component:AboutPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { } 
 