export interface Resource<ResourceClass> {
  fetch: (id?: any) => Promise<Array<ResourceClass>>,
};

export interface User {
  name: string,
  role: string,
};

export interface ApplicationConfiguration {
  apiHost: string,
};
