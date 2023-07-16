import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab active to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: 'row'
  },
  scroll: {
    paddingBottom: 15
  }
})

export default AppBar
