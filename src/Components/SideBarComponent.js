import React from 'react'
import SidebarRow from './SidebarRowComponent'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import '../Styles/SideBarStyles.css'
import { ExpandMoreOutlined } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://source.unsplash.com/random/660"
        title="Bobby Keel"
      />
      <SidebarRow
        title="Pages"
        Icon={EmojiFlagsIcon}
      />
      <SidebarRow
        title="Friends"
        Icon={PeopleIcon}
      />
      <SidebarRow
        title="Messenger"
        Icon={ChatIcon}
      />
      <SidebarRow
        title="Marketplace"
        Icon={StorefrontIcon}
      />
      <SidebarRow
        title="Videos"
        Icon={VideoLibraryIcon}
      />
      <SidebarRow
        title="Marketplace"
        Icon={ExpandMoreOutlined}
      />
    </div>
  )
}

export default SideBar
