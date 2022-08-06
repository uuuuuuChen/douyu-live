import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const ContentWrapper = styled.div`
    /* overflow: scroll; */
    .video-list {
        /* padding-left: 5px;
        height: calc(100vh -100px);
        overflow-y: scroll;
        padding-top: 110px; */
        padding: none;
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
        .HomeFooter {
            width: 100%;
            overflow: hidden;
        }
        .HomeFooter .HomeFooter-goTop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 56px;
        }
        .HomeFooter-goTopIcon {
            display: block;
            margin-right: 5px;
            width: 15px;
            height: 16px;
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-v2_ed53f03.png) -190px 0 no-repeat;
            background-size: 245px 20px;
        }
        .HomeFooter-goTopText {
            display: block;
            line-height: 1.15;
            font-size: 13px;
            color: #666;
        }
        .HomeFooter-officialDescription {
            width: 100%;
            padding-bottom: 70px;
        }
        .HomeFooter-officialDescriptionText {
            line-height: 17px;
            text-align: center;
            color: #999;
            font-size: 9px;
        }
        .DownloadBtn {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            -webkit-border-radius: 10em;
            -moz-border-radius: 10em;
            border-radius: 10em;
            line-height: 36px;
            background: linear-gradient(90deg,#ff6a00,#ff6a00,#ff4823);
            margin: 0 15px 15px;
            color: #fff;
            text-align: center;
            z-index: 999;
            font-size: 14px;
            font-weight: 600;
        }
    .ListPage-contentTitle {
        box-sizing: border-box;
        padding-left: 25px;
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 12px;
        color: #424242;
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon_play_e54a507.png) 5px no-repeat;
        background-size: 15px 15px;
    }
    }
`