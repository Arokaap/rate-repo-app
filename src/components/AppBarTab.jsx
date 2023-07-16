import React from 'react'
import { Link, useLocation } from 'react-router-native'
import StyledText from './StyledText'
import { StyleSheet } from 'react-native'
import theme from '../theme'

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to} underlayColor='transparent' activeOpacity={1}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.secondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary

  }
})

export default AppBarTab
