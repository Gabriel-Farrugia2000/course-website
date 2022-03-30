import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phase1QuestionsJavascriptComponent } from './phase1-questions-javascript.component';

describe('Phase1QuestionsJavascriptComponent', () => {
  let component: Phase1QuestionsJavascriptComponent;
  let fixture: ComponentFixture<Phase1QuestionsJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phase1QuestionsJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase1QuestionsJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
