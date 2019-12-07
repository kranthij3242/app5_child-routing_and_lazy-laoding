import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyservicechildComponent } from './lazyservicechild.component';

describe('LazyservicechildComponent', () => {
  let component: LazyservicechildComponent;
  let fixture: ComponentFixture<LazyservicechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyservicechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyservicechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
