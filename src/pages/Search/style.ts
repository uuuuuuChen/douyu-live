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
    .icon {
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