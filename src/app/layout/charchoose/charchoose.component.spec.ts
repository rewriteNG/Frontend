import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharchooseComponent } from './charchoose.component';

describe('CharchooseComponent', () => {
  let component: CharchooseComponent;
  let fixture: ComponentFixture<CharchooseComponent>;

  beforeEach(async(() => {
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
