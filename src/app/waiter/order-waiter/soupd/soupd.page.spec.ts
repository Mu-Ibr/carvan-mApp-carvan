import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoupdPage } from './soupd.page';

describe('SoupdPage', () => {
  let component: SoupdPage;
  let fixture: ComponentFixture<SoupdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoupdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
