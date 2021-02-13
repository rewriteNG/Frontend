import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDeleteComponent } from './char-delete.component';

describe('CharDeleteComponent', () => {
  let component: CharDeleteComponent;
  let fixture: ComponentFixture<CharDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
