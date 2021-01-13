import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialManagmentPage } from './financial-managment.page';

describe('FinancialManagmentPage', () => {
  let component: FinancialManagmentPage;
  let fixture: ComponentFixture<FinancialManagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialManagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
