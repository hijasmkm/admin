import React from 'react';
import {fetchUtils,Admin,Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PostList from './PostList';

const httpClient = (url, options = {}) => {
  
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('https://meemshop.herokuapp.com/api/v1', httpClient);



function App() {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="products" list={PostList}/>    
    </Admin>
  );
}

export default App;
