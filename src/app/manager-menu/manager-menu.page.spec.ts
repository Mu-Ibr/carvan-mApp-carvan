import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerMenuPage } from './manager-menu.page';

describe('ManagerMenuPage', () => {
  let component: ManagerMenuPage;
  let fixture: ComponentFixture<ManagerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
