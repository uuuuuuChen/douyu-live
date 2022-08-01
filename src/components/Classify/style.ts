import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const ClassifyWrapper = styled.div`
    .header {
        position: relative;
        width: 100%;
        height: 54px;
        background: #fff;
    }
    .headerClose {
        /* z-index: 999;
        position: absolute;
        left: 10px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 26px;
        height: 26px;
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/close_8b63a1d.png) no-repeat;
        background-size: 16px 16px;
        background-position: 50%; */
        /* display: inline-block; */
        width: 26px;
        height: 26px;
        position: absolute;
        left: 10px;
        top: 30%;
        vertical-align: middle;
        text-align: center;
        & .icon {
            font-size: 22px;
            font-weight: 500;
        }
    }
    
    .headerTitle {
        display: inline-block;
        /* width: calc(100% - 52px); */
        height: 100%;
        width: 100%;
        text-align: center;
        /* padding-right: 26px; */
        line-height: 54px;
        font-size: 16px;
        color: #3f3f3f;
    }
    .tabs {
            /* position: relative; */
            font-size: ${px2rem(14)};
            vertical-align: center;
            height: ${px2rem(44)};
            line-height: ${px2rem(44)};
        }
    .nav {
        width: 100%;
        height: 44px;
    }

    .content {
        width: 100%;
        height: 375px;
        background-color: #f4f4f4;
        overflow-x: hidden;
        overflow-y: auto;
        & .classifyItem {
            width: 100%;
            min-height: 375px;
            /* overflow: hidden; */
            list-style: none;
            & .main {
                position: relative;
                width: 33.333333%;
                height: 125px;
                box-sizing: border-box;
                border-right: 1px dashed #ddd;
                border-bottom: 1px dashed #ddd;
                display: inline-block;
                & .image {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 61px;
                    height: 61px;
                    border-radius: 50%;
                }
                & img {
                    width: 61px;
                    height: 61px;
                    text-align: center;
                }
                & .title {
                    position: absolute;
                    left: 0;
                    bottom: 13px;
                    width: 100%;
                    height: 14px;
                    line-height: 14px;
                    text-align: center;
                    font-size: 12px;
                    color: #333;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }

    }

    .adm-tabs-header {
        border: none;
    }
    .adm-tabs-tab {
        height: ${px2rem(32)};
        padding: 0;
    }
    .adm-tabs-tab-active {
        /* position: relative; */
        color: #ff5d23;
        font-weight: 700;
    }
    .adm-tabs-tab-list {
        /* margin-right: ${px2rem(44)}; */
    }
    .adm-tabs-tab-line {
        position: absolute;
        left: 0;
        bottom: ${px2rem(10)};
        height: var(--active-line-height);
        background: #fa7122;
        border-radius: var(--active-line-border-radius);
    }
    .adm-tabs-tab-wrapper {
        padding: 0;
        margin: 0 11px;
    }
`
