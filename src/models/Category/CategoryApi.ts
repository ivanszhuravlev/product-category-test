import {Api} from '../../services/Api';
import {fetchMock} from '../fetch';
import {Category} from './types';

export class CategoryApi extends Api {
  get(id: string) {
    return fetchMock(this.endpoint(`/category/${id}`)) as Promise<Category>;
  }
}
