import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const SearchWrapper = styled.div`
    z-index: 9999;
    height: 100vh;
    background-color: #fff;
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
        margin-left: 20px;
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
        overflow: hidden;
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
    position: fixed;
    top: ${px2rem(44)};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #fff;
    transform-origin: right bottom;
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
    .list {
        /* display: flex;
        flex-direction: row; */
        /* justify-content: space-around; */
        position: relative;
        img {
            /* width: 100%; */
            display: inline-block;
            height: 50px;
            /* border-bottom: 1px solid rgb(206, 204, 204); */
            font-size: 18px;
            line-height: 50px;
            text-indent: 10px;
        }
        span {
            margin-left: 0.5rem;
            line-height: 2.5rem;
            font-size: 0.6rem;
        }
        & .icon1 {
            line-height: 2.5rem;
            position: absolute;
            /* float: right; */
            top: 0;
            right: 1rem;
            color: rgb(255,207,47);
            height: 0.6rem;
            /* background-color: black; */
            /* border-radius: 50%; */
        }
}
`