import React, { useState } from 'react'
import { HeaderWrapper } from './style'
import { Tabs, Space, Popup, Loading } from 'antd-mobile'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import Logo from '@/assets/images/logo.png'
import video from '@/assets/images/douyu.png'
import Classify from '../Classify'

interface HeaderProps {
  data: any[],
  cate1Info: any[],
  cate2Info: any[],
  loading:boolean,
  getListDataActionDispatch: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const [visible, setVisible] = useState(false)
  const { 
    data,
    cate1Info,
    cate2Info,
    loading,
    getListDataActionDispatch
  } = props
  // console.log(cate2Info.slice(0,100))
  const PartitionsList = data.map((item) => {
    return <Tabs.Tab title={item.name} key={item.cate2Id} className='tabs'></Tabs.Tab>
  })

  const NavList = cate1Info.map((item) => {
    return <Tabs.Tab title={item.cate1Name} key={item.cate1Id} className='tabs'></Tabs.Tab>
  }) 

  const NavItemList = cate2Info.map((item) => {
    return (
        <li className='main' key={item.cate2Id}>
          {/* placeholder={<img width='100%' height='100%' src={video}/>} */}
          {/* <LazyLoad height={'100%'} offset={100}> */}
            <div className='image'><img src={item.icon} alt="" /></div>
          {/* </LazyLoad> */}
          <div className='title'>{item.cate2Name}</div>
        </li>
    )
      
  }) 

  const onMaskClick = () => {
    setVisible(false)
  }

  return (
    <HeaderWrapper>
      <div className='header'>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        <Link to='/'>
          <input className="HomeHeader-searchB" placeholder='搜索' />
        </Link>
        <Link to='/'>
          <div className="HomeHeader-openAppB">打开App</div>
        </Link>
      </div>
      <div className="nav">
        <Tabs defaultActiveKey='home1' style={{
          '--active-line-color': 'var(--adm-color-warning)',
          '--title-font-size': '14px',
          '--active-title-color': 'var(--adm-color-warning)'
        }}>
          <Tabs.Tab key='home1' title='推荐' className='tabs'></Tabs.Tab>
            {PartitionsList}
        </Tabs>
        <div className="HomeNav-classify" onClick={() => {
          setVisible(true)
          getListDataActionDispatch()
        }
        }></div>
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

export default Header