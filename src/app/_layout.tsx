import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { HeaderTitle } from '@react-navigation/elements'

const RootLayout = () => {
   const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  return (
         <>
         <Stack screenOptions={{headerShown:false}}/>
         {isAuthenticated ? (<Redirect href={"/(main)"} />) : (<Redirect href={"/(auth)"} />)}
          
         </>
  )
}

export default RootLayout