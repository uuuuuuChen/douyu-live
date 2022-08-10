import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const SearchWrapper = styled.div`
    z-index: 9999;
    height: 100vh;
    background-color: #fff;
    /* overflow-y: scroll; */
    .search-header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 7px 60px 0 10px;
        height: 44px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
    .search-input {
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px;
        margin: 0;
        height: 30px;
        line-height: 1.15;
        font-size: 14px;
        color: #333;
        outline: none;
        border: none;
        background-color: #f8f8f8;
        }
    .search {
        position: absolute;
        top: 50%;
        right: 0;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        color: #333;
        transform: translateY(-50%);
        }
    .icon1 {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        /* margin-left: 20px; */
        background-color: #fff;
    }
    }
    .SearchHot {
        width: 100%;
    }
    .SearchHot-title {
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
        height: 55px;
        line-height: 55px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #eee;
        font-weight: 700;
    }
    .SearchHot .SearchHot-content {
        width: 100%;
        /* overflow: hidden; */
    }
    .SearchHot .SearchHot-content .SearchHot-contentLeft, .SearchHot .SearchHot-content .SearchHot-contentRight {
    float: left;
    width: 50%;
    height: 220px;
    overflow: hidden;
    }

    .SearchHotItem {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
        height: 44px;
    }
    .icon2 {
        border: 1px solid transparent;
        background-color: #f8f8f8;
        display: block;
        font-size: 12px;
        color: black;
        margin-right: 5px;
        text-align: center;
        width: 14px;
        height: 14px;
    }
    .SearchHotItem-name {
        display: block;
        flex: 1;
        line-height: 1.15;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export const Container = styled.div`
    .SearchResult{
        position: absolute;
        top: ${px2rem(44)};
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        /* transform-origin: right bottom; */
        z-index: 100;
    }
    .SearchResult-content {
        position: absolute;
        top: ${px2rem(40)};
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background: #fff;
    }
    .SearchResult{
        box-sizing: border-box;
    }
    .SearchResult-header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: ${px2rem(40)};
        background: #fff;
        border-bottom: 1px solid #eee;
    }
    .SearchResult-header .SearchResult-headerNavItem {
        /* float: left; */
        height: 100%;
        /* text-align: center; */
        line-height: ${px2rem(40)};
        font-size: ${px2rem(14)};
        color: #333;
        margin-right: ${px2rem(20)};
    }
    .SearchResultAllLive {
        width: 100%;
        background: #fff;
        padding-left: 2.5px;
    }
    .SearchResultAllLive .SearchResultAllLive-title {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: ${px2rem(5)};
        width: 100%;
        height: ${px2rem(44)};
    }
    .SearchResultAllLive-titleIcon {
        display: block;
        margin-right: ${px2rem(10)};
        width: ${px2rem(5)};
        height: ${px2rem(18)};
        background: #ff6d00;
        border-radius: 2.5px;
    }
    .SearchResultAllLive-titleName {
        display: block;
        height: ${px2rem(44)};
        line-height: ${px2rem(44)};
        font-size: ${px2rem(16)};
        color: #333;
        font-weight: 400;
    }
    .SearchResultAllLive-titleMore {
        position: absolute;
        top: 0;
        right: 5px;
        padding-right: ${px2rem(18)};
        height: 100%;
        line-height: ${px2rem(44)};
        font-size: ${px2rem(13)};
        color: #999;
        font-weight: 400;
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-more_6c08756.png) no-repeat;
        background-size: 13px 13px;
        background-position: 100%;
    }
    .SearchResultAllAnchor {
        margin-top: ${px2rem(10)};
        width: 100%;
        background: #fff;
    }
    .SearchResultAllAnchor-show {
    width: 100%;
    overflow: hidden;
    }
    .SearchResultAllAnchor-showItem {
        position: relative;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        height: ${px2rem(110)};
        /* clear: both; */
    }
    .SearchResultAllAnchor-showItemAnchor {
        position: relative;
        width: ${px2rem(70)};
        height: ${px2rem(70)};
        border-radius: 4px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .SearchResultAllAnchor-showItemLive {
        position: absolute;
        left: 0;
        top: 0;
        width: ${px2rem(56)};
        height: ${px2rem(16)};
        background-image: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/playing_9f3b01a.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .SearchResultAllAnchor-showItemNickname {
        margin-top: 8px;
        width: 100%;
        line-height: 1.15;
        text-align: center;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* CSSTransition 过渡类型给children */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active,&.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    
`