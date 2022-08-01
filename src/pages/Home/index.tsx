import React, { useEffect } from 'react'
import { AnyAction, Dispatch } from 'redux'
import Header from '@/components/Header'
import VideoItem from '@/components/VideoItem'
import { getPartitionsRequest } from '@/api/request'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { 
    getHomeDataAction,
    getListAction
 } from '@/store/actionCreators'
import { 
    HomeWrapper,
    ContentWrapper 
} from './style'
// import { PartitionType } from '@/models/index'
// import TabBar from '@/components/TabBar'
import { formatTenThousand } from '@/utils/string'

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
    // console.log(mixvideos)
    const {
        getHomeDataActionDispatch,
        getListDataActionDispatch
    } = props
    useEffect(() => {
        getHomeDataActionDispatch()
    }, [])
    const handleClick = () => {

    }
    const videoElements = mixvideos.map(
        (video:any) => {
            return <VideoItem 
                        video={video} 
                        key={video.rid + Math.random()*100000} 
                        showStatistics={true}/>
        }
    )

    return (
        <HomeWrapper className='top-wrapper'>
            <Header 
                data={partitions} 
                cate1Info={cate1Info} 
                cate2Info={cate2Info}
                loading={loading}
                getListDataActionDispatch={getListDataActionDispatch}
                />
            <ContentWrapper>
                <div className="video-list clear">
                    {videoElements}
                </div>
            </ContentWrapper>
        </HomeWrapper>
    )
}

const mapStateToProps = (state:rootState) => ({
    partitions: state.homedata.partitions,
    mixvideos: state.homedata.mixvideos,
    cate1Info: state.homedata.cate1Info,
    cate2Info: state.homedata.cate2Info,
    todaytop: state.homedata.todaytop,
    loading: state.homedata.loading
})

const mapDispatchToProps = (dispatch:any) => ({
    getHomeDataActionDispatch() {
        dispatch(getHomeDataAction())
    },
    getListDataActionDispatch() {
        dispatch(getListAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

