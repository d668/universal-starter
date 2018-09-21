import { NgModule, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy {{ message }}</h3>`
})
export class LazyComponent {
  public message: any;
  isBrowser: boolean;
  constructor() {  }

  ngOnInit() {

  }
}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule {

}
