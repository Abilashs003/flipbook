import { CameraComponent } from './camera/camera.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'camera' },
  { path: 'camera', component: CameraComponent },
  { path: 'video', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
