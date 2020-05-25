import React from 'react'
import { connect } from 'react-redux'
import { actionCreaters } from './store'
import { CSSTransition } from 'react-transition-group'
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

const Header = (props) => {
  const { focused, handleFocus, handleBlur } = props
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
          <InputWrap className={focused ? 'focused' : ''}>
            <CSSTransition in={focused} timeout={200} classNames='slider'>
              <Input onFocus={handleFocus} onBlur={handleBlur} />
            </CSSTransition>
            <i className='iconfont icon-search'></i>
          </InputWrap>
        </Nav>
      </HeaderContainer>
    </HeaderWrap>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreaters.getSearchFocusAction())
    },
    handleBlur() {
      dispatch(actionCreaters.getSearchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
