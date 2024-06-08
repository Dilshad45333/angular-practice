import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBindComponent } from './template-bind.component';

describe('TemplateBindComponent', () => {
  let component: TemplateBindComponent;
  let fixture: ComponentFixture<TemplateBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
