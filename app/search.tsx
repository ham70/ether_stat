import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Place from '../components/place'
import { Link } from 'expo-router'

const search = () => {
  return (
    <View>
      <Link href="./">index page</Link>
      <Text>search</Text>
      <Place city_id="hello"/>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})