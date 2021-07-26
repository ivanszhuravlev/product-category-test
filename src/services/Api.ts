import {API_HOST} from '../config';

export abstract class Api {
  host = API_HOST;

  endpoint(path: string) {
    return this.host + path;
  }
}
