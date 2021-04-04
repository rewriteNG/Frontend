import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharCreateComponent } from './char-create.component';

describe('CharCreateComponent', () => {
  let component: CharCreateComponent;
  let fixture: ComponentFixture<CharCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
