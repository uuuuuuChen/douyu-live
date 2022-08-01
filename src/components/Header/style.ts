import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

// 44px  苹果tabbar的高度(标准)
export const HeaderWrapper = styled.div`
    height: ${px2rem(100)};
    /* margin: ${px2rem(2)}; */
    background-color: #fff;
    .header {
        display: flex;
        align-items: center;
        width: ${px2rem(375)};
        height: ${px2rem(54)};
        img {
            display: inline-block;
            width: ${px2rem(76)};
            height: ${px2rem(34)};
            margin-left: ${px2rem(10)};
        }
        .HomeHeader-openAppB{
        width: ${px2rem(74)};
        height: ${px2rem(28)};
        text-align: center;
        line-height: ${px2rem(28)};
        font-size: ${px2rem(12)};
        background: #ff5d23;
        border-radius: ${px2rem(14)};
        color: #fff;
        letter-spacing: .92px;
        margin-left: ${px2rem(10)};
        margin-right: ${px2rem(10)};
        }
        .HomeHeader-searchB {
            width: ${px2rem(152)};
            height: ${px2rem(28)};
            border: 0;
            outline: 0;
            /* border: 1px solid #f2f2f2; */
            border-radius: ${px2rem(14)};
            background: #f2f2f2;
            margin-left: ${px2rem(10)};
            background-image: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/search_0f4cda6.png);
            background-size: ${px2rem(16)} ${px2rem(16)};
            background-position: ${px2rem(10)} ${px2rem(6)};
            background-repeat: no-repeat;
            padding-left: ${px2rem(32.5)};
            font-size: ${px2rem(14)};
            color: #bbb;
            /* line-height: 28px; */
            display: flex;
            flex: 1;
        }
        
    }
    .nav {
        position: relative;
        height: ${px2rem(44)};
        background-color: #fff;
        .tabs {
            /* position: relative; */
            font-size: ${px2rem(14)};
            vertical-align: center;
            height: ${px2rem(44)};
            line-height: ${px2rem(44)};
        }
        .HomeNav-classify {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        width: ${px2rem(44)};
        height: ${px2rem(44)};
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/category_0148919.png) no-repeat;
        background-size: 100% 100%;
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
        margin-right: ${px2rem(44)};
    }
    .adm-tabs-tab-line {
        position: absolute;
        left: 0;
        bottom: ${px2rem(10)};
        height: var(--active-line-height);
        background: #fa7122;
        border-radius: var(--active-line-border-radius);
    }
`