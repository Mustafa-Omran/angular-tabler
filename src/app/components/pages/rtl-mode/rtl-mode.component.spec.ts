import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlModeComponent } from './rtl-mode.component';

describe('RtlModeComponent', () => {
  let component: RtlModeComponent;
  let fixture: ComponentFixture<RtlModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtlModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
