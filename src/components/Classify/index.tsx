import React from 'react'
import { ClassifyWrapper } from './style'
import { Tabs, DotLoading} from 'antd-mobile'
interface ClassifyProps {
  NavList: any[],
  NavItemList: any[]
  onMaskClick: () => void,
  loading: boolean
}

const Classify:React.FC<ClassifyProps> = (props) => {
  const { 
    NavList,
    NavItemList,
    onMaskClick,
    loading
  } = props
  
  return (
    <ClassifyWrapper>
      <div className="header">
        <div className="headerClose" >
          <i className="iconfont icon-guanbi1 icon" onClick={() => onMaskClick()}></i>
        </div>
        <div className="headerTitle">选择分类</div>
      </div>
      {/* { loading && <DotLoading color='primary' /> } */}
      <div className='classify'>
        <div className="nav">
        <Tabs defaultActiveKey='home1' style={{
          '--active-line-color': 'var(--adm-color-warning)',
          '--title-font-size': '14px',
          '--active-title-color': 'var(--adm-color-warning)'
        }}>
          <Tabs.Tab key='home1' title='全部' className='tabs'></Tabs.Tab>
            {NavList}
        </Tabs>
        </div>
      </div>
      <div className="content" id='content'>
        <ul className='classifyItem'>
        {NavItemList}
        </ul> 
      </div>
    </ClassifyWrapper>
  )
}

export default Classify
