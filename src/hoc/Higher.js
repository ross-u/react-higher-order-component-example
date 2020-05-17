import React from 'react';
import axios from 'axios';

// HOC starts with a wrapper function that returns a HOC
function Higher(WrappedComponent) {

  const color = 'SkyBlue';

  const getData = () => {
    return axios.get('https://api.chucknorris.io/jokes/random');
  };

  return function (props) { // HOC takes another component and injects data or functionality into it
    return (<WrappedComponent {...props} getData={getData} color={color} />)
  }
}


export default Higher;
