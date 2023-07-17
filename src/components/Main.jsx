import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from './AppBar'
import LogInPage from '../pages/LogInPage'

// Option in case that use thrid party library
/*
const AppBar = Platform.select({
  ios: () => require('./IOSAppBar').default,
  default: () => require('./AppBar').default
})()
*/

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route
          path='/signin' exact element={<LogInPage />}
        />
        <Route render={() => <Navigate to='/' />} />

      </Routes>
    </View>
  )
}

export default Main
