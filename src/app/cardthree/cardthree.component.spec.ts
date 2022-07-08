import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardthreeComponent } from './cardthree.component';

describe('CardthreeComponent', () => {
  let component: CardthreeComponent;
  let fixture: ComponentFixture<CardthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
