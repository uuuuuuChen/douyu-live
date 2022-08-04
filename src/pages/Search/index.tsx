import React, { useEffect } from 'react'
import { SearchWrapper } from './style'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import {
  getHomeDataAction,
} from '@/store/actionCreators'

interface SearchProps {
  todaytop: any[],
  getHomeDataActionDispatch: () => void,
  loading: boolean,
}

const Search:React.FC<SearchProps> = (props) => {
  const { todaytop, getHomeDataActionDispatch } = props
  console.log(todaytop)
  useEffect(() => {
    getHomeDataActionDispatch()
  }, [])

  const renderTop5 = todaytop.slice(0,5).map((item,index) => {
    return (
      <div className="SearchHotItem" key={index}>
        <i className="icon">{index+1}</i>
        <span className="SearchHotItem-name">{item}</span>
        </div>
    )  
  })
  const renderTop10 = todaytop.slice(5).map((item,index) => {
    return (
      <div className="SearchHotItem" key={index}>
        <i className="icon">{6+index}</i>
        <span className="SearchHotItem-name">{item}</span>
        </div>
    )  
  })

  return (
    <SearchWrapper>
      <div className='search-header'>
        <input className="search-input" type="text" placeholder="搜索房间/主播/分类" />
        <div className="search">搜索</div>
      </div>
      <div className="SearchPage-content">
        <div className="SearchHot">
          <div className="SearchHot-title">最近热搜</div>
          <div className="SearchHot-content">
            <div className="SearchHot-contentLeft">
              {renderTop5} 
            </div>
            <div className="SearchHot-contentLeft">
              {renderTop10} 
            </div>
          </div>
        </div>
      </div>

    </SearchWrapper>
  )
}

const mapStateToProps = (state: rootState) => ({
  todaytop: state.homedata.todaytop,
  loading: state.homedata.loading
})

const mapDispatchToProps = (dispatch: any) => ({
  getHomeDataActionDispatch() {
      dispatch(getHomeDataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
