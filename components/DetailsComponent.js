import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import getApi from '../GetInfoUser/getApi';
import {StylesDetails} from '../src/StylesComponent/StylesDetails';
import {store} from '../src/store/store';
import {ItemDetailsComponent} from '../src/itemDetailsComponent/itemDetailsComponents';

const DetailsComponents = () => {
  getApi();
  const data = store.getState();
  return (
    <View style={StylesDetails.container}>
      <ImageBackground
        style={StylesDetails.styleImageBackground}
        source={require('../image/background.jpg')}>
        <Text style={StylesDetails.titleProfile}>Profile</Text>
        <Image
          style={StylesDetails.avatarStyle}
          source={{uri: `https://teamsport.tk${data.userAvatarPath}`}}></Image>
        <View style={StylesDetails.cardStyle}>
          <View style={StylesDetails.topContainer}>
            <View style={StylesDetails.iconContainer}>
              <Image
                style={StylesDetails.iconSetting}
                source={require('../image/setting.png')}
              />
              <Image
                style={StylesDetails.iconEdit}
                source={require('../image/edit.png')}
              />
            </View>
            <Text style={StylesDetails.userNameText}>{data.userFullName}</Text>
            <Text style={StylesDetails.userEmailText}>{data.userMail}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ItemDetailsComponent(`Họ và tên : ${data.userFullName}`)}
            {ItemDetailsComponent(`Tên : ${data.userFirstName}`)}
            {ItemDetailsComponent(`Họ : ${data.userLastName}`)}
            {ItemDetailsComponent(`Ngày sinh : ${data.userBirthDay}`)}
            {ItemDetailsComponent(`Địa chỉ : ${data.userAddress}`)}
            {ItemDetailsComponent(`Mô tả : ${data.userShortIntroduction}`)}
            {ItemDetailsComponent(`Chiều cao : ${data.userHeight}`)}
            {ItemDetailsComponent(`Cân nặng : ${data.userWeight}`)}
            {ItemDetailsComponent(`Tuổi : ${data.userAge}`)}
            {ItemDetailsComponent(`Thuận tay : ${data.userPreferredHand}`)}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default DetailsComponents;
