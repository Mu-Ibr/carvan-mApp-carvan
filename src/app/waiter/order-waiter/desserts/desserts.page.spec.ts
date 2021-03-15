import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DessertsPage } from './desserts.page';

describe('DessertsPage', () => {
  let component: DessertsPage;
  let fixture: ComponentFixture<DessertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DessertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
