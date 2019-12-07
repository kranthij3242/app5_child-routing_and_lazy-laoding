import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttwoComponent } from './contacttwo.component';

describe('ContacttwoComponent', () => {
  let component: ContacttwoComponent;
  let fixture: ComponentFixture<ContacttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
