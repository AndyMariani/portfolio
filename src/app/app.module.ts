import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { AboutComponent } from './presentation/about/about.component';
import { SkillsComponent } from './presentation/skills/skills.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { ExperienceComponent } from './presentation/experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
