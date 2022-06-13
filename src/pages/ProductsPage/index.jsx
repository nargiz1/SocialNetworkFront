import React from 'react'
import Layout from '../../components/Layout'
import ProductsTabs from './ProductsTabs/ProductsTabs'

const index = () => {
  return (
    <Layout>
      <div className='container pt-4'><ProductsTabs/></div>
    </Layout>
  )
}

export default index