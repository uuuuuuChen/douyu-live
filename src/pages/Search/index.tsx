import React, { useEffect, useState, useRef,useMemo } from 'react'
import { SearchWrapper, Container } from './style'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { debounce } from '@/utils/utils'
import VideoItem from '@/components/VideoItem'

import { CSSTransition } from 'react-transition-group'
import { rootState } from '@/store'
import {
  getHomeDataAction,
  getSearchResultAction
} from '@/store/actionCreators'

interface SearchProps {
  todaytop: any[],
  searchresult: any[],
  getHomeDataActionDispatch: () => void,
  getSearchResultDispatch: (query:any,page:number) => void,
  loading: boolean,
}

const Search: React.FC<SearchProps> = (props) => {
  const { 
    todaytop, 
    searchresult
  } = props
  const { 
    getHomeDataActionDispatch, 
    getSearchResultDispatch 
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
  console.log(searchresult)

  const onSetQuery = (query:any) => {
    setQuery(query)
}
// useMemo 可以缓存上一次函数计算的结果
  let onSetQueryDebounce = useMemo(() => {
      return debounce(onSetQuery, 500)
  }, [onSetQuery])

  useEffect(() => {
    // query更新
    onSetQueryDebounce(query)
  }, [value])

  useEffect(() => {
    queryRef.current?.focus()
    getHomeDataActionDispatch()
  }, [])

  const onAdd = (value:any) => {
    onSetQuery(value)
    setShow(true)
 }

 useEffect(() => {
  // if(query.trim()){
    getSearchResultDispatch(query,page)  
// } 
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
            if (e.target.value == '' || !e.target.value) {
              setShow(!show)
              // queryRef.current.focus()
              queryRef.current?.focus()
              // onAdd()
            }
            console.log(e.target.value,6666)
          }}
          onKeyDown={e => {
            setValue(e.target.value)
            onAdd(e.target.value)
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
        { query && <CSSTransition
                    in={show}   // 控制动画开启关闭
                    timeout={1000}  // 为动画执行时间
                    appear={true}  // 是否第一次加载该组件时启用相应的动画渲染
                    classNames="fly"
                    unmountOnExit  // 当动画效果为隐藏时，该标签会从dom树上移除，类似js操作
                    onExit={() => {  // 出场动画时触发
                        navigate(-1)
                }}
                >  
                    <Container>
                       {videoElements}
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
  searchresult: state.searchdata.searchresult
})

const mapDispatchToProps = (dispatch: any) => ({
  getHomeDataActionDispatch() {
    dispatch(getHomeDataAction())
  },
  getSearchResultDispatch(query:any,page:number) {
    dispatch(getSearchResultAction(query,page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
