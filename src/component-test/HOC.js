import React from 'react';

const HOC = (WrappedComponent, data) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent data={data} />;
    }
  };
};

export default HOC;
