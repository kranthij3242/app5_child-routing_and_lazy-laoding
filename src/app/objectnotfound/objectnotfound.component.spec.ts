import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectnotfoundComponent } from './objectnotfound.component';

describe('ObjectnotfoundComponent', () => {
  let component: ObjectnotfoundComponent;
  let fixture: ComponentFixture<ObjectnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
