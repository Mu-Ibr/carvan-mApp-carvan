import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftManagmentPage } from './shift-managment.page';

describe('ShiftManagmentPage', () => {
  let component: ShiftManagmentPage;
  let fixture: ComponentFixture<ShiftManagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftManagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
