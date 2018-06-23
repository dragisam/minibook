import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MinibookSharedModule } from '../../shared';
import { MinibookAdminModule } from '../../admin/admin.module';
import {
    BloodPressureService,
    BloodPressurePopupService,
    BloodPressureComponent,
    BloodPressureDetailComponent,
    BloodPressureDialogComponent,
    BloodPressurePopupComponent,
    BloodPressureDeletePopupComponent,
    BloodPressureDeleteDialogComponent,
    bloodPressureRoute,
    bloodPressurePopupRoute,
    BloodPressureResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...bloodPressureRoute,
    ...bloodPressurePopupRoute,
];

@NgModule({
    imports: [
        MinibookSharedModule,
        MinibookAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BloodPressureComponent,
        BloodPressureDetailComponent,
        BloodPressureDialogComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeletePopupComponent,
    ],
    entryComponents: [
        BloodPressureComponent,
        BloodPressureDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent,
    ],
    providers: [
        BloodPressureService,
        BloodPressurePopupService,
        BloodPressureResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MinibookBloodPressureModule {}
