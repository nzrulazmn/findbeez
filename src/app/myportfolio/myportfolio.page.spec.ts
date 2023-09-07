import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyportfolioPage } from './myportfolio.page';

describe('MyportfolioPage', () => {
  let component: MyportfolioPage;
  let fixture: ComponentFixture<MyportfolioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyportfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
