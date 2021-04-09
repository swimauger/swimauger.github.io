import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsScreenComponent } from './skills-screen.component';

describe('SkillsScreenComponent', () => {
  let component: SkillsScreenComponent;
  let fixture: ComponentFixture<SkillsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
