import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamprevPageRoutingModule } from './camprev-routing.module';

import { CamprevPage } from './camprev.page';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamprevPageRoutingModule
  ],
  declarations: [CamprevPage],
  providers: [Camera, CameraPreview]
})
export class CamprevPageModule {}
