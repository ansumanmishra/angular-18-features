import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTemplateVariablesComponent } from './local-template-variables.component';

describe('LocalTemplateVariablesComponent', () => {
  let component: LocalTemplateVariablesComponent;
  let fixture: ComponentFixture<LocalTemplateVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalTemplateVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalTemplateVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
