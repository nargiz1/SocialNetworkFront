import React from 'react';
import Layout from '../../components/Layout';
import GroupsTab from "./GroupsTabs/GroupsTabs";

const index = () => {
  return (
    <Layout>
    <div className='container pt-4'>
      <GroupsTab/>
    </div>
    </Layout>
  )
}

export default index;