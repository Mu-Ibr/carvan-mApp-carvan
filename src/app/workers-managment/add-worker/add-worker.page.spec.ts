import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWorkerPage } from './add-worker.page';

describe('AddWorkerPage', () => {
  let component: AddWorkerPage;
  let fixture: ComponentFixture<AddWorkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
