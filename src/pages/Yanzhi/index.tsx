import React, { memo,useEffect } from 'react'
import { Empty } from 'antd-mobile'
import VideoItem from '@/components/VideoItem'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import {
  getHomeDataAction,
} from '@/store/actionCreators'
import {
  ContentWrapper
} from './style'
interface YanzhiProps {
  yzlist: any[],
  getHomeDataActionDispatch: () => void,
  loading: boolean,
}

const Yanzhi:React.FC<YanzhiProps> = (props) => {
  const {
    yzlist,
    loading
  } = props
  // console.log(yzlist)
  const {
    getHomeDataActionDispatch,
  } = props
  useEffect(() => {
      // getHomeDataActionDispatch()
  }, [])

  const backtop = () => {
    console.log(666)
    window.scrollTo(0, 0);
  }
  const renderTitle = (
    <div className="ListPage-contentTitle">颜值</div>
)
  const videoElements = yzlist.map(
    (video: any) => {
        return (
            <VideoItem
                video={video}
                key={video.rid + Math.random() * 100000}
                showStatistics={true} />
        )
    }
  )
  const footerElements = (
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
  )

  return (
    <ContentWrapper>
    <div className="video-list clear">
        {loading ? '' : renderTitle}
        {loading ? <Empty style={{ padding: '64px 0' }} imageStyle={{ width: 375 }} description='暂无数据' /> : videoElements}
        {footerElements}
    </div>
  </ContentWrapper>
  )
}

const mapStateToProps = (state: rootState) => ({
  yzlist: state.homedata.yzlist,
  loading: state.homedata.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  getHomeDataActionDispatch() {
      dispatch(getHomeDataAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Yanzhi))
