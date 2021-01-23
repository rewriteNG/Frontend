import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharchooseComponent } from './charchoose.component';

describe('CharchooseComponent', () => {
  let component: CharchooseComponent;
  let fixture: ComponentFixture<CharchooseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharchooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharchooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
