import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommentList from '../components/CommentList'

const Main = () => {
  return (
    <View style={{marginTop: 50,margin:10}}>
      <CommentList/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})