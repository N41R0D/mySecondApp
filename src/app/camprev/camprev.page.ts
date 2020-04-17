import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camprev',
  templateUrl: './camprev.page.html',
  styleUrls: ['./camprev.page.scss'],
})
export class CamprevPage implements OnInit {

  setZoom = 0;
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
      y: 50,
      width: window.screen.width,
      height: window.screen.width,
      camera: 'back',
      tapPhoto: true,
      previewDrag: false,
      toBack: false,
      alpha: 1
    };
    this.cameraPreview.startCamera(cameraPreviewOpts);
    const result = this.cameraPreview;
    console.log(result);
  }

  reversecamera(){
    this.cameraPreview.switchCamera();
  }

  changeZoom(){
    // console.log(this.setZoom);
    this.cameraPreview.setZoom(this.setZoom);
  }

  negative(){
    this.cameraPreview.setColorEffect('negative');
  }
}
