import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleScreenComponent } from './components/title-screen/title-screen.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsScreenComponent } from './components/skills-screen/skills-screen.component';
import { BirdComponent } from './components/bird/bird.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    AboutMeComponent,
    SkillsScreenComponent,
    BirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
