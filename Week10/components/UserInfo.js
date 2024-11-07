import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, { PureComponent, useEffect, useState, useContext } from 'react';
import {UserContext} from "../App"

export default function UserInfo() {
  const {user} = useContext(UserContext)
  return <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
    <Image source={user.img} style={{width: 30, height: 30}}></Image>
    <View>
      <Text style={{fontWeight: "bold"}}>Hi, {user.name}</Text>
      <Text style={{fontWeight:"semibold", fontSize: 12}}>Have a great day a head</Text>
    </View>
  </View>
}