import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStatsComponent } from './compare-stats.component';

describe('CompareStatsComponent', () => {
  let component: CompareStatsComponent;
  let fixture: ComponentFixture<CompareStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
