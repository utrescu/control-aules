import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovaComponent } from './comprova.component';

describe('ComprovaComponent', () => {
  let component: ComprovaComponent;
  let fixture: ComponentFixture<ComprovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
