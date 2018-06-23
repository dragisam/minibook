import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MinibookSharedModule } from '../../shared';
import { MinibookAdminModule } from '../../admin/admin.module';
import {
    PreferencesService,
    PreferencesPopupService,
    PreferencesComponent,
    PreferencesDetailComponent,
    PreferencesDialogComponent,
    PreferencesPopupComponent,
    PreferencesDeletePopupComponent,
    PreferencesDeleteDialogComponent,
    preferencesRoute,
    preferencesPopupRoute,
    PreferencesResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...preferencesRoute,
    ...preferencesPopupRoute,
];

@NgModule({
    imports: [
        MinibookSharedModule,
        MinibookAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PreferencesComponent,
        PreferencesDetailComponent,
        PreferencesDialogComponent,
        PreferencesDeleteDialogComponent,
        PreferencesPopupComponent,
        PreferencesDeletePopupComponent,
    ],
    entryComponents: [
        PreferencesComponent,
        PreferencesDialogComponent,
        PreferencesPopupComponent,
        PreferencesDeleteDialogComponent,
        PreferencesDeletePopupComponent,
    ],
    providers: [
        PreferencesService,
        PreferencesPopupService,
        PreferencesResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MinibookPreferencesModule {}
