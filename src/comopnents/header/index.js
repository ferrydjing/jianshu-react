import React, { PureComponent } from 'react'
import {
  HeaderWrap,
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  Button,
  InputWrap,
  Input
} from './style'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrap>
        <HeaderContainer>
          <Logo />
          <Button className='write'>
            <i className='iconfont icon-feather'></i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className='iconfont icon-aa'></i>
            </NavItem>
            <InputWrap>
              <Input />
              <i className='iconfont icon-search'></i>
            </InputWrap>
          </Nav>
        </HeaderContainer>
      </HeaderWrap>
    )
  }
}

export default Header
