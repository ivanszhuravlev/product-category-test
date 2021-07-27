import {Api} from '../../services/Api';
import {fetchMock} from '../fetch';
import {Product} from './types';

export class ProductApi extends Api {
  list(id: string) {
    return fetchMock(this.endpoint(`/product/sub-categoryid=${id}`)) as Promise<
      Product[]
    >;
  }

  listAll() {
    return fetchMock(this.endpoint('/product')) as Promise<Product[]>;
  }
}
