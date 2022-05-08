import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsOptionComponent } from './lessons-option.component';

describe('LessonsOptionComponent', () => {
  let component: LessonsOptionComponent;
  let fixture: ComponentFixture<LessonsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
