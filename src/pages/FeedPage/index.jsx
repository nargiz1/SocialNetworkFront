import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Feed from './Feed/Feed';
import Wedget from './Wedget/Wedget';
import * as postServices from "../../services/PostService";
import PostSlice, { setPost } from '../../redux/Post/PostSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    (async function() {
      const data = await postServices.getAllPostsService();
      const posts=data.$values;
      dispatch(setPost(posts));

      console.log("index js posts",posts);

    })();
  }, [dispatch])
  
  return (
      <Layout>
          <div className="row d-flex justify-content-between pt-4">
            <div className="col-md-9">
              <Feed/>
            </div>
            <div className="col-md-3">
              <Wedget/>
            </div>
          </div>
        </Layout>

  )
}

export default Index;