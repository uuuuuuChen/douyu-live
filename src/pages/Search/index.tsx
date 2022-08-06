import React, { useEffect, useState, useRef, useMemo } from 'react'
import { SearchWrapper, Container } from './style'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { debounce } from '@/utils/utils'
import VideoItem from '@/components/VideoItem'

import { CSSTransition } from 'react-transition-group'
import { rootState } from '@/store'
import {
  getHomeDataAction,
  getSearchResultAction,
  getSearchListAction,
  getAnchorAction
} from '@/store/actionCreators'

interface SearchProps {
  todaytop: any[],
  searchresult: any[],
  searchlist: any[],
  anchor: any[],
  getHomeDataActionDispatch: () => void,
  getSearchResultDispatch: (query: string) => void,
  getAnchorListDispatch: (query: string) => void,
  getSearchListDispatch: (page: number) => void,
  loading: boolean,
}

const Search: React.FC<SearchProps> = (props) => {
  const {
    todaytop,
    searchresult,
    searchlist,
    anchor
  } = props
  const {
    getHomeDataActionDispatch,
    getSearchResultDispatch,
    getSearchListDispatch,
    getAnchorListDispatch
  } = props
  const [value, setValue] = useState('')
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false)
  const queryRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const gotoHome = () => {
    navigate('/')
  }
  // console.log(searchlist)

  const onSetQuery = (query: any) => {
    setQuery(query)
  }
  // useMemo 可以缓存上一次函数计算的结果
  let onSetQueryDebounce = useMemo(() => {
    return debounce(onSetQuery, 500)
  }, [onSetQuery])

  useEffect(() => {
    // query更新
    onSetQueryDebounce(query)
  }, [query])

  useEffect(() => {
    queryRef.current?.focus()
    getHomeDataActionDispatch()
    getSearchListDispatch(page)
  }, [])

  const onAdd = (value: any) => {
    // console.log(value)
    onSetQuery(value)
    setShow(true)
  }

  useEffect(() => {
    if (query.trim()) {
      getSearchResultDispatch(query)
      getAnchorListDispatch(query)
    }
  }, [query])
  // console.log(query)

  const renderTop5 = todaytop.slice(0, 5).map((item, index) => {
    return (
      <div className="SearchHotItem" key={index}>
        <i className="icon2">{index + 1}</i>
        <span className="SearchHotItem-name">{item}</span>
      </div>
    )
  })
  const renderTop10 = todaytop.slice(5).map((item, index) => {
    return (
      <div className="SearchHotItem" key={index}>
        <i className="icon2">{6 + index}</i>
        <span className="SearchHotItem-name">{item}</span>
      </div>
    )
  })

  const renderAnchor = anchor.map((item) => {
    // let isLive = {item.isLive}
    // let styled =  isLive == 1 ? '' : none
    return (
      <div className="SearchResultAllAnchor-showItem" key={Math.random()*10000}>
        <div className="SearchResultAllAnchor-showItemAnchor" key={Math.random()*10000}>
          <img src={item.avatar} alt="" />
          <div className="SearchResultAllAnchor-showItemLive"></div>
        </div>
        <div className="SearchResultAllAnchor-showItemNickname" key={Math.random()*10000}>
          {item.nickName}
        </div>
      </div>
    )
})

  const videoElements = searchresult.map(
    (video: any) => {
      return (
        <VideoItem
          video={video}
          key={Math.random() * 100000}
          showStatistics={true} />
      )
    }
  )

  return (
    <SearchWrapper>
      <div className='search-header'>
        <input
          className="search-input"
          type="text"
          placeholder="搜索房间/主播/分类"
          ref={queryRef}
          // onSearch={onAdd}
          value={value}
          onChange={e => {
            setValue(e.target.value)
            // onAdd(e.target.value)
            if (e.target.value == '' || !e.target.value) {
              setShow(!show)
              // queryRef.current.focus()
              queryRef.current?.focus()
              // onAdd()
            }
            // console.log(e.target.value,6666)
          }}
          onKeyDown={e => {
            if (e.keyCode == 13) {
              setValue(e.target.value)
              onAdd(e.target.value)
            }
          }}
        />
        <div className="search">
          <i className="iconfont icon-guanbi1 icon1" onClick={gotoHome}></i>
        </div>
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

        {query && <CSSTransition
          in={show}   // 控制动画开启关闭
          timeout={1000}  // 为动画执行时间
          appear={true}  // 是否第一次加载该组件时启用相应的动画渲染
          classNames="fly"
          unmountOnExit  // 当动画效果为隐藏时，该标签会从dom树上移除，类似js操作
        //     onExit={() => {  // 出场动画时触发
        //         navigate(-1)
        // }}
        >
          <Container>
            <div className="SearchResult">
              <div className="SearchResult-header">
                <div className="SearchResult-headerNavItem select">搜索结果如下</div>
                {/* <div className="SearchResult-headerNavItem">主播</div>
                      <div className="SearchResult-headerNavItem">直播</div>
                      <div className="SearchResult-headerNavItem">视频</div> */}
              </div>
              <div className="SearchResult-content">
              <div className="SearchResultAllAnchor">
                <div className="SearchResultAllLive">
                  <h2 className="SearchResultAllLive-title">
                    <span className="SearchResultAllLive-titleIcon"></span>
                    <span className="SearchResultAllLive-titleName">主播</span>
                    <div className="SearchResultAllLive-titleMore">更多</div>
                  </h2>
                  <div />
                  <div className="SearchResultAllLive-content">
                    <div className="SearchResultAllAnchor-show" >
                      {renderAnchor}
                    </div>
                  </div>
                </div>
                </div>
                <div className="SearchResultAllLive">
                  <h2 className="SearchResultAllLive-title">
                    <span className="SearchResultAllLive-titleIcon"></span>
                    <span className="SearchResultAllLive-titleName">直播</span>
                    <div className="SearchResultAllLive-titleMore">更多</div>
                  </h2>
                  <div />
                  <div className="SearchResultAllLive-content">
                    {videoElements}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </CSSTransition>
        }

      </div>
    </SearchWrapper>
  )
}

const mapStateToProps = (state: rootState) => ({
  todaytop: state.homedata.todaytop,
  loading: state.homedata.loading,
  searchresult: state.searchdata.searchresult,
  searchlist: state.searchdata.searchlist,
  anchor: state.searchdata.anchor,
})

const mapDispatchToProps = (dispatch: any) => ({
  getHomeDataActionDispatch() {
    dispatch(getHomeDataAction())
  },
  getSearchResultDispatch(query: string) {
    dispatch(getSearchResultAction(query))
  },
  getSearchListDispatch(page: number) {
    dispatch(getSearchListAction(page))
  },
  getAnchorListDispatch(query: string) {
    dispatch(getAnchorAction(query))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
