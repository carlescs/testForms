import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxPlusButtonComponent } from './textbox-plus-button.component';

describe('TextboxPlusButtonComponent', () => {
  let component: TextboxPlusButtonComponent;
  let fixture: ComponentFixture<TextboxPlusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxPlusButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPlusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
