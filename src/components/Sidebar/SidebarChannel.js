import React from 'react'
import styles from './SidebarChannel.module.scss'
import {useDispatch} from 'react-redux'
import {setChannelInfo} from '../../features/counter/appSlice'

const SidebarChannel = ({id,channelName}) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.channel}
         onClick={()=>
            dispatch(
                setChannelInfo({
                    channelId:id,
                    channelName:channelName,
        }))}>
            <span>#</span><h4>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
