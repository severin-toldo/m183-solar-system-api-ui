import {environment} from '../../environments/environment';

const base = environment.solarSystemApiUrl;

export const getBodiesUrl = () => `${base}/bodies`;
export const getBodyByIdUrl = (id: string) => `${base}/bodies/${id}`;
