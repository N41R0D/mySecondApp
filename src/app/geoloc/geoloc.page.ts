import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.page.html',
  styleUrls: ['./geoloc.page.scss'],
})
export class GeolocPage implements OnInit {

  locationWatchStarted:boolean;
  locationSubscription:any;

  locationTraces = [];

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }


  getGeoloc() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

      this.locationWatchStarted = true;
      this.locationTraces.push({
        latitude:data.coords.latitude,
        longitude:data.coords.latitude,
        timestamp:data.timestamp
      });
    });
  }

}
