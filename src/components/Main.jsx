import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes, Navigate } from 'react-router-native'
import StyledText from './StyledText'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route
          path='/signin' exact element={<StyledText>Working on it</StyledText>}
        />
        <Route render={() => <Navigate to='/' />} />

      </Routes>
    </View>
  )
}

export default Main
