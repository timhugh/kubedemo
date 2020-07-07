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

  fetch(): Promise<Array<ResourceClass>> {
    return this.client.get(this.resourceName)
    .then((response: HttpResponse) => response.data as Array<ResourceClass>)
  }
};
