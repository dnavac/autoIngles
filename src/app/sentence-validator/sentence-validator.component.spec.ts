import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceValidatorComponent } from './sentence-validator.component';

describe('SentenceValidatorComponent', () => {
  let component: SentenceValidatorComponent;
  let fixture: ComponentFixture<SentenceValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceValidatorComponent]
    });
    fixture = TestBed.createComponent(SentenceValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
