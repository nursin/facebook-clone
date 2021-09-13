import React from 'react'
import '../Styles/StoryReelStyles.css'
import Story from './StoryComponent'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://source.unsplash.com/random/800"
        profileSrc="https://source.unsplash.com/random/700"
        title="Random Randy"
      />
      <Story
        image="https://source.unsplash.com/random/100"
        profileSrc="https://source.unsplash.com/random/600"
        title="Jamie Bird"
      />
      <Story
        image="https://source.unsplash.com/random/200"
        profileSrc="https://source.unsplash.com/random/500"
        title="Nick Carr"
      />
      <Story
        image="https://source.unsplash.com/random/250"
        profileSrc="https://source.unsplash.com/random/400"
        title="Captain Planet"
      />
      <Story
        image="https://source.unsplash.com/random/540"
        profileSrc="https://source.unsplash.com/random/340"
        title="Power Ranger"
      />
    </div>
  )
}

export default StoryReel
