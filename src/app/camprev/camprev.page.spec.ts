import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamprevPage } from './camprev.page';

describe('CamprevPage', () => {
  let component: CamprevPage;
  let fixture: ComponentFixture<CamprevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamprevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamprevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
