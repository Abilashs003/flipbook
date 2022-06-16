import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [AppComponent, CameraComponent, VideoComponent],
  imports: [NgxScannerQrcodeModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
