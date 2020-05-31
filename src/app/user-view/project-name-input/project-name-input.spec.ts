import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNameInputComponent } from './project-name-input.component';

describe('CreateProjectInputComponent', () => {
  let component: ProjectNameInputComponent;
  let fixture: ComponentFixture<ProjectNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
