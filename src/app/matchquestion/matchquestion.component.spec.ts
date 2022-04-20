import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchquestionComponent } from './matchquestion.component';

describe('MatchquestionComponent', () => {
  let component: MatchquestionComponent;
  let fixture: ComponentFixture<MatchquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
