import axios from 'axios';

export interface HttpClient {
  get(path: string): Promise<HttpResponse>,
};

export interface HttpResponse {
  data: object,
};

export class HttpResource<ResourceClass> {
  client: HttpClient;
  resourceName: string;

  constructor(apiHost: string, resourceName: string) {
    this.resourceName = resourceName;
    this.client = axios.create({ baseURL: apiHost });
  }

  fetch(id?: any): Promise<Array<ResourceClass>> {
    let path;
    if (typeof id === 'undefined' || id === null) {
      path = this.resourceName;
    } else {
      path = `${this.resourceName}/${id}`;
    }
    return this.client.get(path)
      .then((response: HttpResponse) => response.data as Array<ResourceClass>)
  }
};
