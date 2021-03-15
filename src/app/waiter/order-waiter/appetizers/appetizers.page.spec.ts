import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppetizersPage } from './appetizers.page';

describe('AppetizersPage', () => {
  let component: AppetizersPage;
  let fixture: ComponentFixture<AppetizersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppetizersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppetizersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
