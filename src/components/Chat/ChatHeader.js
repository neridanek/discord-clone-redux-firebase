import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import styles from './ChatHeader.module.scss'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const ChatHeader = ({channelName}) => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
                <h3><span>#</span>{channelName ? channelName : <>Select a Channel</>}</h3>
            </div>

            <div className={styles.chatHeaderRight}>
                <NotificationsIcon className={styles.icons}/>
                <EditLocationRoundedIcon className={styles.icons}/>
                <PeopleAltRoundedIcon className={styles.icons}/>
            

            <div className={styles.chatHeaderSearch}>
                <input placeholder="Search"/>
                <SearchRoundedIcon className={styles.icons}/>
                <SendRoundedIcon className={styles.icons}/>
                <HelpRoundedIcon className={styles.icons}/>
            </div>
            </div>
        </div>

    )
}

export default ChatHeader
