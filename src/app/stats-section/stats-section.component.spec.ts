import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSectionComponent } from './stats-section.component';

describe('StatsSectionComponent', () => {
  let component: StatsSectionComponent;
  let fixture: ComponentFixture<StatsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
