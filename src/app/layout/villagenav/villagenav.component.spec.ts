import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagenavComponent } from './villagenav.component';

describe('VillagenavComponent', () => {
  let component: VillagenavComponent;
  let fixture: ComponentFixture<VillagenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
