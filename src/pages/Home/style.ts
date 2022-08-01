import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const HomeWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 10;
    padding-bottom: ${px2rem(2)};
    .partition {
        position: relative;
        .tab-bar {
            margin-right: ${px2rem(56)};
        }
        .switch {
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${px2rem(22)};
            line-height: ${px2rem(40)};
            font-size: ${px2rem(18)};
        }
    }
`

export const ContentWrapper = styled.div`
    overflow: scroll;
    .video-list {
        padding-left: 5px;
        height: 100vh;
        overflow: scroll;
        margin-top: 10px;
        .HomeLive-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            /* padding: 0 5px; */
            width: 100%;
            height: 42px;
        }
        
        .HomeLive-titleLive {
            padding-left: 30px;
            height: 100%;
            line-height: 42px;
            color: #333;
            font-size: 15px;
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-live_88adc06.png) no-repeat;
            -webkit-background-size: 20px 12px;
            -moz-background-size: 20px 12px;
            background-size: 20px 12px;
            background-position: 0;
        }
        .HomeLive-titleNum {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            line-height: 42px;
        }
        .HomeLive-titleNumText {
            display: block;
            height: 100%;
            font-size: 13px;
            color: #999;
        }
        .HomeLive-titleNumText.mark {
        color: #f70;
        }
        .icon-right {
        margin: 0 5px;
        font-size: ${px2rem(13)};
        float: right;
        color: rgb(210,210,210);
        }
    }
`