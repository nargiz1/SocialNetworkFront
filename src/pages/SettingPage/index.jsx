import React from 'react';
import Layout from '../../components/Layout/index';
import SettingTabs from './SettingTabs/SettingTabs';

const index = () => {
  return (
    <Layout>
      <div className='container pt-4'><SettingTabs/></div>
    </Layout>
  )
}

export default index;