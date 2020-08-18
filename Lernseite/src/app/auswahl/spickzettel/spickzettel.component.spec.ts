import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpickzettelComponent } from './spickzettel.component';

describe('SpickzettelComponent', () => {
  let component: SpickzettelComponent;
  let fixture: ComponentFixture<SpickzettelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpickzettelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpickzettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
