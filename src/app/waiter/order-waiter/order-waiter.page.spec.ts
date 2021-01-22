import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderWaiterPage } from './order-waiter.page';

describe('OrderWaiterPage', () => {
  let component: OrderWaiterPage;
  let fixture: ComponentFixture<OrderWaiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWaiterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderWaiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
