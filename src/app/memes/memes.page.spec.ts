import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemesPage } from './memes.page';

describe('MemesPage', () => {
  let component: MemesPage;
  let fixture: ComponentFixture<MemesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
