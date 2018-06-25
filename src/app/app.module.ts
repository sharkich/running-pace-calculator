import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';

import {environment} from '../environments/environment';

import {AppComponent} from './app-root/app.component';
import {PaceComponent} from './pace/pace.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SeoService} from './_shared/services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    PaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
