import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoneComponent } from './contactone.component';

describe('ContactoneComponent', () => {
  let component: ContactoneComponent;
  let fixture: ComponentFixture<ContactoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
