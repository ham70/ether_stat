import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Place from '../components/place'

const search = () => {
  return (
    <View>
      <Text>search</Text>
      <Place city_id="hello"/>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})