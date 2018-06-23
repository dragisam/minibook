import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MinibookPointsModule } from './points/points.module';
import { MinibookWeightModule } from './weight/weight.module';
import { MinibookPreferencesModule } from './preferences/preferences.module';
import { MinibookBloodPressureModule } from './blood-pressure/blood-pressure.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MinibookPointsModule,
        MinibookWeightModule,
        MinibookPreferencesModule,
        MinibookBloodPressureModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MinibookEntityModule {}
