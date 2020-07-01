import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProfileComponentComponent } from './guest-profile-component.component';

describe('GuestProfileComponentComponent', () => {
  let component: GuestProfileComponentComponent;
  let fixture: ComponentFixture<GuestProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
