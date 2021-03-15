import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuffedPage } from './stuffed.page';

describe('StuffedPage', () => {
  let component: StuffedPage;
  let fixture: ComponentFixture<StuffedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuffedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
