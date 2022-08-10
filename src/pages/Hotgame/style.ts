import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const ContentWrapper = styled.div`
    /* overflow: scroll; */
    .video-list {
        /* padding-left: 5px;
        height: calc(100vh -100px);
        overflow-y: scroll;
        padding-top: 110px; */
        .HomeLive-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            /* padding: 0 5px; */
            width: 100%;
            height: ${px2rem(42)};
        }
        
        .HomeLive-titleLive {
            padding-left: ${px2rem(30)};
            height: 100%;
            line-height: ${px2rem(42)};
            color: #333;
            font-size: ${px2rem(15)};
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-live_88adc06.png) no-repeat;
            background-size: ${px2rem(20)} ${px2rem(12)};
            background-position: 0;
        }
        .HomeLive-titleNum {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            line-height: ${px2rem(42)};
        }
        .HomeLive-titleNumText {
            display: block;
            height: 100%;
            font-size: ${px2rem(13)};
            color: #999;
        }
        .HomeLive-titleNumText.mark {
        color: #f70;
        }
        .icon-right {
        margin: 0 ${px2rem(5)};
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
            height: ${px2rem(56)};
        }
        .HomeFooter-goTopIcon {
            display: block;
            margin-right: ${px2rem(5)};
            width: ${px2rem(15)};
            height: ${px2rem(16)};
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-v2_ed53f03.png) -190px 0 no-repeat;
            background-size: ${px2rem(245)} ${px2rem(20)};
        }
        .HomeFooter-goTopText {
            display: block;
            line-height: 1.15;
            font-size: ${px2rem(13)};
            color: #666;
        }
        .HomeFooter-officialDescription {
            width: 100%;
            padding-bottom: ${px2rem(70)};
        }
        .HomeFooter-officialDescriptionText {
            line-height: ${px2rem(17)};
            text-align: center;
            color: #999;
            font-size: ${px2rem(9)};
        }
        .DownloadBtn {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            -webkit-border-radius: 10em;
            -moz-border-radius: 10em;
            border-radius: 10em;
            line-height: ${px2rem(36)};
            background: linear-gradient(90deg,#ff6a00,#ff6a00,#ff4823);
            margin: 0 ${px2rem(15)} ${px2rem(15)};
            color: #fff;
            text-align: center;
            z-index: 999;
            font-size: ${px2rem(14)};
            font-weight: 600;
        }
        .ListPage-contentTitle {
        box-sizing: border-box;
        padding-left: ${px2rem(25)};
        width: 100%;
        height: ${px2rem(42)};
        line-height: ${px2rem(42)};
        font-size: ${px2rem(12)};
        color: #424242;
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon_play_e54a507.png) 5px no-repeat;
        background-size: ${px2rem(15)} ${px2rem(15)};
    }
    }
`