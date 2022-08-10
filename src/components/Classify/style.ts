import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const ClassifyWrapper = styled.div`
    .header {
        position: relative;
        width: 100%;
        height: ${px2rem(54)};
        background: #fff;
    }
    .headerClose {
        width: ${px2rem(26)};
        height: ${px2rem(26)};
        position: absolute;
        left: ${px2rem(10)};
        top: 30%;
        vertical-align: middle;
        text-align: center;
        & .icon {
            font-size: ${px2rem(22)};
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
        line-height: ${px2rem(54)};
        font-size: ${px2rem(16)};
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
        height: ${px2rem(44)};
    }

    .classifycontent {
        width: 100%;
        height: ${px2rem(375)};
        background-color: #f4f4f4;
        overflow-x: hidden;
        overflow-y: auto;
        & .classifyItem {
            width: 100%;
            min-height: ${px2rem(375)};
            /* overflow: hidden; */
            list-style: none;
            & .main {
                position: relative;
                width: 33.333333%;
                height: ${px2rem(125)};
                box-sizing: border-box;
                border-right: 1px dashed #ddd;
                border-bottom: 1px dashed #ddd;
                display: inline-block;
                & .image {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: ${px2rem(61)};
                    height: ${px2rem(61)};
                    border-radius: 50%;
                }
                & img {
                    width: ${px2rem(61)};
                    height: ${px2rem(61)};
                    text-align: center;
                }
                & .title {
                    position: absolute;
                    left: 0;
                    bottom: ${px2rem(13)};
                    width: 100%;
                    height: ${px2rem(14)};
                    line-height: ${px2rem(14)};
                    text-align: center;
                    font-size: ${px2rem(12)};
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
    .adm-popup-body {
    z-index: 9999;
    }
`
