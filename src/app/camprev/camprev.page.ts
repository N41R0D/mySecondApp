import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camprev',
  templateUrl: './camprev.page.html',
  styleUrls: ['./camprev.page.scss'],
})
export class CamprevPage implements OnInit {

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    this.startCamera();
  }

  ngOnDestroy(){
    this.cameraPreview.stopCamera();
  }

  startCamera(){
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      camera: 'back',
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1
    };

    const result = this.cameraPreview.startCamera(cameraPreviewOpts);
    console.log(result);
  }
}
