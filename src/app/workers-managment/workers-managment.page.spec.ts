import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkersManagmentPage } from './workers-managment.page';

describe('WorkersManagmentPage', () => {
  let component: WorkersManagmentPage;
  let fixture: ComponentFixture<WorkersManagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersManagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkersManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
