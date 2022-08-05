import React, { useEffect } from 'react'
import { Empty } from 'antd-mobile'
import VideoItem from '@/components/VideoItem'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import Logo from '@/assets/images/logo.png'
import {
    getHomeDataAction,
    getListAction
} from '@/store/actionCreators'
import {
    ContentWrapper
} from './style'
interface HomeProps {
    partitions: any[],
    mixvideos: any[],
    cate1Info: any[],
    cate2Info: any[],
    todaytop: any[],
    getHomeDataActionDispatch: () => void,
    getListDataActionDispatch: () => void,
    loading: boolean,
}

const Home: React.FC<HomeProps> = (props) => {
    const {
        partitions,
        mixvideos,
        cate1Info,
        cate2Info,
        loading
    } = props
    // const res = Object.keys(mixvideos[0].list)
    // const res1 = mixvideos[0][list]
    console.log(mixvideos)
    const {
        getHomeDataActionDispatch,
        getListDataActionDispatch
    } = props
    useEffect(() => {
        getHomeDataActionDispatch()
    }, [])
    const renderTitle = (
        <div className="HomeLive-title" >
            <div className="HomeLive-titleLive">全部直播</div>
            <div className="HomeLive-titleNum">
                <span className="HomeLive-titleNumText">当前</span>
                <span className="HomeLive-titleNumText mark">21726</span>
                <span className="HomeLive-titleNumText">个直播</span>
                <i className='fa fa-chevron-circle-right icon-right'></i>
            </div>
        </div>
    )
    
    // const arr = new Array(11)
    // mixvideos.map(() => {
    //     for (let i = 0; i< arr.length; i++) {
    //         arr.push(mixvideos.slice(i*4,(i+1)*4))  
    //     } 
    // })
    // console.log(arr,arr.length)

    // arr.map((item:any) => {
    //     console.log(item)
    // })

    const videoElements = mixvideos.map(
        (video: any) => {
            return (
                <VideoItem
                    video={video}
                    key={video.rid + Math.random() * 100000}
                    showStatistics={true} />
            )
        }
    )
    
    const backtop =() => {
        console.log(666)
        window.scrollTo(0,0);
    }
        
    return (
            <ContentWrapper>
                <div className="video-list clear">
                    { loading ? '' : renderTitle}
                    { loading ? <Empty style={{ padding: '64px 0' }} imageStyle={{ width:375 }} description='暂无数据'/> : videoElements}
                    <div className="HomeFooter">
                        <div className="HomeFooter-goTop" onClick={backtop}>
                            <i className="HomeFooter-goTopIcon"></i>
                            <span className="HomeFooter-goTopText">返回顶部</span>
                        </div>
                        <div className="HomeFooter-officialDescription">
                            <p className="HomeFooter-officialDescriptionText">客服热线：027-87750710</p>
                            <p className="HomeFooter-officialDescriptionText">武汉斗鱼网络科技有限公司</p>
                            <p className="HomeFooter-officialDescriptionText">湖北省武汉市东湖开发区光谷软件园F4栋8楼</p>
                            <p className="HomeFooter-officialDescriptionText">版权所有 © www.douyu.com 鄂ICP备15011961号-1</p>
                        </div>
                        <a className="DownloadBtn">打开斗鱼App，看更多精彩内容</a>
                    </div>
                </div>
            </ContentWrapper>
    )
}

const mapStateToProps = (state: rootState) => ({
    partitions: state.homedata.partitions,
    mixvideos: state.homedata.mixvideos,
    cate1Info: state.homedata.cate1Info,
    cate2Info: state.homedata.cate2Info,
    todaytop: state.homedata.todaytop,
    loading: state.homedata.loading
})

const mapDispatchToProps = (dispatch: any) => ({
    getHomeDataActionDispatch() {
        dispatch(getHomeDataAction())
    },
    getListDataActionDispatch() {
        dispatch(getListAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

