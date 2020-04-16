import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterTestingModule} from "@angular/router/testing";
import { GeolocPage } from './geoloc.page';
import {Geolocation} from "@ionic-native/geolocation/ngx";

describe('GeolocPage', () => {
  let component: GeolocPage;
  let fixture: ComponentFixture<GeolocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [Geolocation]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
