import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3PlayerComponent } from './mp3-player.component';

describe('Mp3PlayerComponent', () => {
  let component: Mp3PlayerComponent;
  let fixture: ComponentFixture<Mp3PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp3PlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
