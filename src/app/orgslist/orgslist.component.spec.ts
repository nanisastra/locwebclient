import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgslistComponent } from './orgslist.component';

describe('OrgslistComponent', () => {
  let component: OrgslistComponent;
  let fixture: ComponentFixture<OrgslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
