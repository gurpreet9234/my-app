import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileComponentComponent } from './client-profile-component.component';

describe('ClientProfileComponentComponent', () => {
  let component: ClientProfileComponentComponent;
  let fixture: ComponentFixture<ClientProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
