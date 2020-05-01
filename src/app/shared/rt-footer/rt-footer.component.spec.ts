import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtFooterComponent } from './rt-footer.component';

describe('RtFooterComponent', () => {
  let component: RtFooterComponent;
  let fixture: ComponentFixture<RtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
