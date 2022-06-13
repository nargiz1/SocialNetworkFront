import React from 'react';
import Layout from '../../components/Layout';
import PhotosTabs from './PhotosTabs/PhotosTabs';

const index = () => {
  return (
    <Layout>
      <div className='container pt-4'><PhotosTabs/></div>
    </Layout>
  )
}

export default index;