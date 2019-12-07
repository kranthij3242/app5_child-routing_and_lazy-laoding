import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyserviceparentComponent } from './lazyserviceparent.component';

describe('LazyserviceparentComponent', () => {
  let component: LazyserviceparentComponent;
  let fixture: ComponentFixture<LazyserviceparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyserviceparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyserviceparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
