import React from 'react';
import clsx from 'clsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../Post/Post';
import { Tags } from '../SideTags/TagsComponent'
import { fetchPosts } from '../../Redux/slices/PostSlice';
import { fetchTags } from '../../Redux/slices/PostSlice'
import { Skeleton } from '@mui/material';
import TagsSX from '../../themes/TagsSX.js';

export const PostsComponent = () => {
  const dispatch = useDispatch()
  const { posts, tags } = useSelector(state => state.posts)
  
  const isPostLoaded = posts.status === 'loading'
  const isTagsLoaded = tags.status === 'loading'

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])
  
  console.log(posts)
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0}>
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>

      <Grid container spacing={4} sx = {{ m: "0 auto" }}>
        <Grid xs={8} item sx = {{ m: "0 auto" }}>
          {( isPostLoaded ? [...Array(5)] : posts.items).map((obj, index) =>  
          isPostLoaded ? (
            <Post key={index} isLoading = {true} />
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              tags={obj.tags}
              isEditable
            />
          ))} 
        </Grid>
         <Grid xs={4} item>
           <Tags items={tags.items} isLoading={isTagsLoaded} sx = {{ TagsSX }}/>
          
        </Grid> 
      </Grid>
    </>
  );
};
