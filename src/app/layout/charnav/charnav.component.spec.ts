import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharnavComponent } from './charnav.component';

describe('CharnavComponent', () => {
  let component: CharnavComponent;
  let fixture: ComponentFixture<CharnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
