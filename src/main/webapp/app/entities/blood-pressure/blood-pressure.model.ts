import { BaseEntity, User } from './../../shared';

export class BloodPressure implements BaseEntity {
    constructor(
        public id?: number,
        public date?: any,
        public sistolic?: string,
        public diastolic?: string,
        public user?: User,
    ) {
    }
}
