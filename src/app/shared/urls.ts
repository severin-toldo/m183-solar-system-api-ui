import {environment} from '../../environments/environment';

const base = environment.solarSystemApiUrl;

export const getBodiesUrl = () => `${base}/bodies`;
