import * as dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL || '',

    ORANGE_HRM_USERNAME: process.env.ORANGE_HRM_USERNAME || '',

    ORANGE_HRM_PASSWORD: process.env.ORANGE_HRM_PASSWORD || ''

};