import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharValueComponent } from './char-value.component';

describe('CharValueComponent', () => {
  let component: CharValueComponent;
  let fixture: ComponentFixture<CharValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
