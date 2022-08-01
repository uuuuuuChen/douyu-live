import React from 'react'
import { Video } from '@/models/Video'
import { VideoWrapper } from './style'
import { Link } from 'react-router-dom'
import tv from '@/assets/images/douyu.png'
import LazyLoad from 'react-lazyload'
import { formatTenThousand } from '@/utils/string'
import { baseURL } from '@/api/config'

interface VideoItemProps {
    video: Video,
    showStatistics: boolean
}

// 快捷键rafc
const VideoItem: React.FC<VideoItemProps> = (props) => {
    const {
        video,
        showStatistics
    } = props

    return (
        <VideoWrapper>
            <Link to={"/video/av" + video.rid} className="video-link">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={tv} alt="" className='tv' />
                        {
                            video.roomSrc && (
                                // <LazyLoad height={'100%'} offset={100}>
                                //     <img src={baseURL + '/transfer/image?pic=' + video.pic + '@320w_200h'} className="pic" alt={video.title}
                                //         onLoad={(e) => e.currentTarget.style.opacity = "1"}
                                //     />
                                    <img src={video.roomSrc} className="pic" alt={video.cate2Name}
                                        onLoad={(e) => e.currentTarget.style.opacity = "1"}
                                    />
                                // {/* </LazyLoad> */}
                            )
                        }
                        <div className="cover">
                            {
                                showStatistics && (
                                    <div className="info">
                                        <span className="play-icon icon-play-count">
                                        <span className="play-count">
                                            {video.nickname ?
                                                video.nickname : ''
                                            }
                                        </span>
                                        </span>
                                        {/* <span className="barrage-icon icon-barrage-count"></span>
                                        <span className="barrage-count">
                                            {video.hn ?
                                                video.hn : ''
                                            }
                                        </span> */}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="title">
                    {video.roomName}
                </div>
            </Link>
        </VideoWrapper>
    )
}

export default VideoItem