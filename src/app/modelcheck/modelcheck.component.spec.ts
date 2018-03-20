import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelcheckComponent } from './modelcheck.component';

describe('ModelcheckComponent', () => {
  let component: ModelcheckComponent;
  let fixture: ComponentFixture<ModelcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
