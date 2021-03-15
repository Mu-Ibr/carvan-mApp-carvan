import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainMealPage } from './main-meal.page';

describe('MainMealPage', () => {
  let component: MainMealPage;
  let fixture: ComponentFixture<MainMealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMealPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
