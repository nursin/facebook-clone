import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import '../Styles/MessageSenderStyles.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // clever db stuff

    setInput('');
    setImageUrl('');
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://source.unsplash.com/random/660"/>
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind?`}
            type="text"
          />
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="messageSender__input"
            placeholder="image URL (Optional)"
            type="text"
          />

          <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
