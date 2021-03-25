import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerProfilePage } from './worker-profile.page';

describe('WorkerProfilePage', () => {
  let component: WorkerProfilePage;
  let fixture: ComponentFixture<WorkerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
