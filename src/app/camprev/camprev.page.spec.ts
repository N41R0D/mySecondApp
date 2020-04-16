import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterTestingModule} from "@angular/router/testing";
import { CamprevPage } from './camprev.page';
import {Camera} from "@ionic-native/camera/ngx";
import {CameraPreview} from "@ionic-native/camera-preview/ngx";

describe('CamprevPage', () => {
  let component: CamprevPage;
  let fixture: ComponentFixture<CamprevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamprevPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [Camera, CameraPreview]
    }).compileComponents();

    fixture = TestBed.createComponent(CamprevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
