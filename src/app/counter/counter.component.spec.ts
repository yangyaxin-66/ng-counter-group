import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return counters when Ondecrese given click -', () => {
    component.number = 1
    component.OnIncrease()
    expect(component.number).toEqual(2)
  });

  it('should return number when Ondecrese given +', () => {
    component.number = 2
    component.OnDecrease()
    expect(component.number).toEqual(1)
  });

  it('should return 0 when Reset given reset button', () => {
    component.number = 2
    component.OnReset()
    expect(component.number).toEqual(0)
  });

  it('should return 0 when OnRemove given remove button', () => {
    component.number = 2
    component.OnRemove()
    expect(component.number).toEqual(0)
  });
});
