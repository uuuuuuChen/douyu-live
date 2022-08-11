import React, { memo } from 'react'
import { Video } from '@/models/Video'
import { VideoWrapper } from './style'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import videoImg from '@/assets/images/douyu.png'

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
            <Link to={"/room/" + video.rid} className="video-link">
                <div className="image-container">
                    <div className="image-wrapper">
                        <div className='hotdu'>
                            <i className="iconfont icon-redu iconhot"></i>
                            <span className="barrage-count">
                                {video.hn ? video.hn : ''}
                            </span>
                        </div>
                        <LazyLoad placeholder={<img width='100%' height='100%' src={videoImg}/>}>
                        <img src={videoImg} alt="" className='tv' />
                        {
                            video.roomSrc && (
                                
                                <img src={video.roomSrc} className="pic" alt={video.cate2Name}
                                    onLoad={(e) => e.currentTarget.style.opacity = "1"}
                                />
                            )
                        }
                       </LazyLoad>
                        <div className="cover">
                            {
                                showStatistics && (
                                    <div className="info">
                                        <span className="play-icon icon-play-count">
                                            <i className='iconfont icon-geren icon'></i>
                                            <span className="play-count">
                                                {video.nickname ? video.nickname : ''
                                                }
                                            </span>
                                        </span>
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

export default memo(VideoItem)