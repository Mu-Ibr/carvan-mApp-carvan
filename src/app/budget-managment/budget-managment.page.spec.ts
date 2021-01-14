import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetManagmentPage } from './budget-managment.page';

describe('BudgetManagmentPage', () => {
  let component: BudgetManagmentPage;
  let fixture: ComponentFixture<BudgetManagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetManagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
