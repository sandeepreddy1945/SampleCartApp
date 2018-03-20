import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTreeComponent } from './shopping-tree.component';

describe('ShoppingTreeComponent', () => {
  let component: ShoppingTreeComponent;
  let fixture: ComponentFixture<ShoppingTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
