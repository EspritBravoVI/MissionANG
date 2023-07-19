import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './tables.component';

import { ReactiveFormsModule } from '@angular/forms';

describe('MyComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TablesComponent],
            imports: [ReactiveFormsModule],  // Also add it to 'imports' array
        })
        .compileComponents();
    }));
});

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
