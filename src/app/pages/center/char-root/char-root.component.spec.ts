import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharRootComponent } from './char-root.component';

describe('CharRootComponent', () => {
  let component: CharRootComponent;
  let fixture: ComponentFixture<CharRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
