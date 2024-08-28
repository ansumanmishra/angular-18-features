import { Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {FeaturesComponent} from './features/features.component';
import {ControlFlowComponent} from './control-flow/control-flow.component';
import {UsersComponent} from './model-input/users.component';
import {DeferComponent} from './defer/defer.component';
import {LocalTemplateVariablesComponent} from './local-template-variables/local-template-variables.component';
import {RxjsInteropComponent} from './rxjs-interop/rxjs-interop.component';
import {FallbackNgContentComponent} from './fallback-ng-content/fallback-ng-content.component';
import {ZonelessExampleParentComponent} from './zoneless-example/zoneless-example-parent.component';
import {LocalChangeDetectionComponent} from './local-change-detection/local-change-detection.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
  path: 'input-signal',
  component: ProductsComponent
},
  {
    path: 'zoneless',
    component: ZonelessExampleParentComponent
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent
  },
  {
    path: 'model-input',
    component: UsersComponent
  },
  {
    path: 'defer',
    component: DeferComponent
  },
  {
    path: 'local-template-variables',
    component: LocalTemplateVariablesComponent
  },
  {
    path: 'rxjs-interop',
    component: RxjsInteropComponent
  },
  {
    path: 'fallback-ng-content',
    component: FallbackNgContentComponent
  },
  {
    path: 'local-change-detection',
    component: LocalChangeDetectionComponent
  }
];
