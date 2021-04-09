import React from 'react'
import styles from './Message.module.scss'
import {Avatar} from '@material-ui/core'

const Message = ({timestamp,message,user}) => {
    return (
        <div className={styles.message}>
            <Avatar src={user.photo}/>
            <div className={styles.messageInfo}>
                <h4>{user.displayName}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
