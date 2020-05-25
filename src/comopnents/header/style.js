import styled from 'styled-components'
import logoImg from '../../assets/imgs/logo.png'

export const HeaderWrap = styled.header`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  min-width: 768px;
  max-width: 1440px;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  float: left;
  display: block;
  width: 100px;
  height: 100%;
  background: url(${logoImg});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  width: 960px;
  height: 100%;
`

export const NavItem = styled.div`
  height: 100%;
  color: #333;
  line-height: 56px;
  cursor: pointer;
  &.left {
    float: left;
    margin-right: 20px;
  }

  &.active {
    color: #ea6f5a;
  }

  &.right {
    float: right;
    margin-left: 20px;
    color: #969696;
  }
`

export const Button = styled.a`
  float: right;
  margin-left: 20px;
  display: block;
  margin-top: 8px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 19px;
  box-sizing: border-box;
  cursor: pointer;
  &.write {
    color: #fff;
    background-color: #ea6f5a;
    &:hover {
      color: #fff;
      background-color: #ec6149;
    }
  }
  &.reg {
    color: #ea6f5a;
    border: 1px solid rgba(236, 97, 73, 0.7);
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236, 97, 73, 0.05);
    }
  }
`

export const InputWrap = styled.div`
  position: relative;
  float: left;
  height: 100%;
  .iconfont {
    position: absolute;
    right: 5px;
    top: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #969696;
    border-radius: 50%;
    transform: translateY(-50%);
  }
  &.focused {
    input {
      width: 320px;
    }
    .iconfont {
      color: #fff;
      background: #969696;
    }
  }
`

export const Input = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 8px;
  padding: 0 40px 0 20px;
  width: 240px;
  height: 40px;
  border: none;
  font-size: 15px;
  color: #333;
  background-color: #eee;
  border-radius: 20px;
  outline: 0;
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    color: #666;
  }
  &.slider-enter,
  &.slider-exit {
    transition: all 0.2s ease-out;
  }
  &.slier-enter-active {
    width: 320px;
  }
  &.slider-exit-active {
    width: 240px;
  }
`
