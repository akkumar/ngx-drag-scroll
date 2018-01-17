import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppBrowserModule } from './browser.module';
import {AppComponent} from './app.component';
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    ServerModule,
    AppBrowserModule
  ]
})
export class AppServerModule {}
