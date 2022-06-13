import React from 'react';
import Layout from '../../components/Layout';
import VideosTabs from './VideosTabs/VideosTabs';


const index = () => {
  return (
    <Layout>
    <div className='container pt-4'>
      <VideosTabs/>
    </div>
    </Layout>
  )
}

export default index;