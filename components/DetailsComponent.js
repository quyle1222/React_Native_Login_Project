import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import getApi from '../GetInfoUser/getApi';
import {StylesDetails} from '../src/StylesComponent/StylesDetails';
import {store} from '../src/store/store';

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
          source={{uri: `https://teamsport.tk${data.userAvatar}`}}></Image>
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
            <Text style={StylesDetails.userNameText}>{data.userName}</Text>
            <Text style={StylesDetails.userEmailText}>{data.userEmail}</Text>
          </View>

          {/* My Projects */}
          <View style={StylesDetails.fieldContainer}>
            <Image
              style={StylesDetails.iconField}
              source={require('../image/project.png')}></Image>
            <Text style={StylesDetails.textField}>My projects</Text>
            <Image
              style={StylesDetails.arrow_Left_Icon}
              source={require('../image/keyboard_arrow_right.png')}></Image>
          </View>
          {/* Account */}
          <View style={StylesDetails.fieldContainer}>
            <Image
              style={StylesDetails.iconField}
              source={require('../image/account.png')}></Image>
            <Text style={StylesDetails.textField}>Account</Text>
            <Image
              style={StylesDetails.arrow_Left_Icon}
              source={require('../image/keyboard_arrow_right.png')}></Image>
          </View>
          {/* Share with friends */}
          <View style={StylesDetails.fieldContainer}>
            <Image
              style={StylesDetails.iconField}
              source={require('../image/share.png')}></Image>
            <Text style={StylesDetails.textField}>Share with friends</Text>
            <Image
              style={StylesDetails.arrow_Left_Icon}
              source={require('../image/keyboard_arrow_right.png')}></Image>
          </View>
          {/* Review */}
          <View style={StylesDetails.fieldContainer}>
            <Image
              style={StylesDetails.iconField}
              source={require('../image/review.png')}></Image>
            <Text style={StylesDetails.textField}>Review</Text>
            <Image
              style={StylesDetails.arrow_Left_Icon}
              source={require('../image/keyboard_arrow_right.png')}></Image>
          </View>
          {/* Info */}
          <View style={StylesDetails.fieldContainer}>
            <Image
              style={StylesDetails.iconField}
              source={require('../image/info.png')}></Image>
            <Text style={StylesDetails.textField}>Info</Text>
            <Image
              style={StylesDetails.arrow_Left_Icon}
              source={require('../image/keyboard_arrow_right.png')}></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default DetailsComponents;
