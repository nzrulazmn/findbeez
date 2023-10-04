import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditportfolioPage } from './editportfolio.page';

describe('EditportfolioPage', () => {
  let component: EditportfolioPage;
  let fixture: ComponentFixture<EditportfolioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditportfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
