import React, { useState } from 'react'
import { HeaderWrapper } from './style'
import { Tabs, Space, Popup, Loading } from 'antd-mobile'
import { Link,NavLink } from 'react-router-dom'
import Logo from '@/assets/images/logo.png'
import Classify from '../Classify'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import videoImg from '@/assets/images/douyu.png'
import { rootState } from '@/store'
import {
  getHomeDataAction,
  getListAction
} from '@/store/actionCreators'

interface HeaderProps {
  partitions: any[],
  cate1Info: any[],
  cate2Info: any[],
  getHomeDataActionDispatch: () => void,
  getListDataActionDispatch: () => void,
  loading: boolean,
}

const Header: React.FC<HeaderProps> = (props) => {
  const [visible, setVisible] = useState(false)
  const { 
    partitions,
    cate1Info,
    cate2Info,
    loading,
    getListDataActionDispatch
  } = props
  // console.log(cate1Info,cate2Info)
  // console.log(cate2Info.slice(0,100))
  const PartitionsList = partitions.map((item) => {
    return (
      <NavLink to={item.shortName} key={item.cate2Id}>
        {/* <Tabs.Tab title={item.name} key={item.cate2Id} className='tabs'> */}
          <span key={item.cate2Id }>{item.name}</span>
        {/* </Tabs.Tab> */}
      </NavLink>
      )
  })

  const NavList = cate1Info.map((item) => {
    return <Tabs.Tab title={item.cate1Name} key={item.cate1Id} className='tabs'></Tabs.Tab>
  }) 

  const NavItemList = cate2Info.slice(0,30).map((item) => {
    return (
        <li className='main' key={item.cate2Id}>
          {/* <LazyLoad placeholder={<img width='100%' height='100%' src={videoImg}/>}> */}
          <div className='image'><img src={item.icon} alt="" /></div>
          {/* </LazyLoad> */}
          <div className='title'>{item.cate2Name}</div>
        </li>
    )
      
  }) 

  const onMaskClick = () => {
    setVisible(false)
  }

  const displayStyle = loading ? 'none' : ''

  return (
    <HeaderWrapper>
      <div className='header'>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        <Link to='/search'>
          <div className="HomeHeader-searchB" >搜索</div>
        </Link>
        <Link to='/'>
          <div className="HomeHeader-openAppB">打开App</div>
        </Link>
      </div>
      <div className="nav" style={{display:displayStyle}}>
        {/* <Tabs defaultActiveKey='home1' style={{
          '--active-line-color': 'var(--adm-color-warning)',
          '--title-font-size': '14px',
          '--active-title-color': 'var(--adm-color-warning)'
        }}> */}
        {/* <Tabs.Tab key='home1' title='推荐' className='tabs'></Tabs.Tab> */}
        <div className="HomeNav-content">
          <NavLink to='/' key='home1'><span key='home1'>推荐</span></NavLink>
            {PartitionsList}
            {/* </Tabs> */}
        </div>
        <div className="HomeNav-classify" onClick={() => {
          setVisible(true)
          getListDataActionDispatch()
        }
        }>
        </div>
        <Space direction='vertical'>
          <Popup
            // style={{'--z-index':'9999'}}
            visible={visible}
            position='top'
            onMaskClick={onMaskClick}
            bodyStyle={{ minHeight: '71%' }}
          >
          <Classify 
              NavList={NavList} 
              NavItemList={NavItemList} 
              onMaskClick={onMaskClick}
              loading={loading}
              />
          </Popup>
        </Space>
      </div>
    </HeaderWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)