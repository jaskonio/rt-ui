import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtNavbarComponent } from './rt-navbar.component';

describe('RtNavbarComponent', () => {
  let component: RtNavbarComponent;
  let fixture: ComponentFixture<RtNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
