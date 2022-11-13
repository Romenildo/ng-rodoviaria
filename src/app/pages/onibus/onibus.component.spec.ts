import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnibusComponent } from './onibus.component';

describe('OnibusComponent', () => {
  let component: OnibusComponent;
  let fixture: ComponentFixture<OnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnibusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
