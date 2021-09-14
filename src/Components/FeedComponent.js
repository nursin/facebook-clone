import React, { useEffect, useState } from 'react';
import '../Styles/FeedStyles.css';
import MessageSender from './MessageSenderComponent';
import Post from './PostComponent';
import StoryReel from './StoryReelComponent';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => (
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    ));
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed
