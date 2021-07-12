import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPageComponent } from './dettaglio-page.component';

describe('DettaglioPageComponent', () => {
  let component: DettaglioPageComponent;
  let fixture: ComponentFixture<DettaglioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
