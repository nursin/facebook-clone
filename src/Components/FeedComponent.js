import React from 'react';
import '../Styles/FeedStyles.css';
import MessageSender from './MessageSenderComponent';
import Post from './PostComponent';
import StoryReel from './StoryReelComponent';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://source.unsplash.com/random/660"
        message='Wow This works!'
        timestamp="This is a timestamp"
        username='Bobby Keel'
        image="https://source.unsplash.com/random/230"
      />

      <Post
        profilePic="https://source.unsplash.com/random/660"
        message='Wow This works!'
        timestamp="This is a timestamp"
        username='Bobby Keel'
        image="https://source.unsplash.com/random/421"
      />

      <Post
        profilePic="https://source.unsplash.com/random/660"
        message='Wow This works!'
        timestamp="This is a timestamp"
        username='Bobby Keel'
        image="https://source.unsplash.com/random/1"
      />

    </div>
  )
}

export default Feed
