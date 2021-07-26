import {API_HOST} from '../config';
import {categoriesMock} from './Category/mocks';
import {productsMock} from './Product/mocks';

export const fetchMock = async (url: string) => {
  const item = routesMap.find(({regexp}) => regexp.test(url));

  if (!item) {
    throw new Error('Route not found');
  }

  const match = url.match(item.regexp);

  if (!match) {
    throw new Error('Invalid query param');
  }

  return item.getData(match[1]);
};

const routesMap = [
  {
    regexp: new RegExp(API_HOST + '/category/(.+)$'),
    getData: (match: string) => categoriesMock[match],
  },
  {
    regexp: new RegExp(API_HOST + '/product/sub-categoryid=(.+)$'),
    getData: (match: string) => productsMock[match],
  },
];
