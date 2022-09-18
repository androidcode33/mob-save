import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>

              <Block>
                <Block middle>
                  <Text
                    style={{
                      fontFamily: 'montserrat-regular', bottom: 50, position: 'absolute', letterSpacing: 2, paddingHorizontal: 20, textAlign: 'center'
                    }}
                    color="white"
                    size={44}
                  >
                    Welcome
                  </Text>
                </Block>
              </Block>

              <Block middle row>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular', marginTop: -30, }}
                >
                  Login To Mob-Save
                </Text>
              </Block>
              <Block middle row style={{ marginTop: 10, marginBottom: 30 }}>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  Enter your 5-digit pin for 0789491833
                </Text>
              </Block>

              <Block card style={{
                paddingHorizontal: 9, marginHorizontal: -28, backgroundColor: 'white',
                borderRadius: 8,
                paddingVertical: 4,
                shadowColor: 'white',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                elevation: 20,
                shadowRadius: 3,
              }}>
                
                <Block flex row>
                  <Text
                    size={16}
                    style={{
                      marginTop: 5,
                      marginBottom: 20,
                      lineHeight: 20,
                      fontSize: 14,
                      opacity: .8,
                      fontFamily: 'montserrat-regular',
                    }}
                  >
                    Previous savings
                  </Text>
                </Block>

                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10
                  }}
                />
                <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={14}
                    color={nowTheme.COLORS.TEXT}
                  >
                    Wed, 5th Sept 2022
                  </Text>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={14}
                    color={nowTheme.COLORS.TEXT}
                  >
                    UGX 179,000
                  </Text>
                  <Icon name="md-checkmark-circle" family="Galio" size={20} color="green" />
                </Block>
                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10
                  }}
                />
                <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={14}
                    color={nowTheme.COLORS.TEXT}
                  >
                    Fri, 5th Aug 2022
                  </Text>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={14}
                    color={nowTheme.COLORS.TEXT}
                  >
                    UGX 157,000
                  </Text>
                  <Icon name="md-checkmark-circle" family="Galio" size={20} color="green" />
                </Block>

          
                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10
                  }}
                />
                <Block middle >
                  <Button
                    shadowless
                    style={styles.button}
                    color={nowTheme.COLORS.PRIMARY}
                    onPress={() => navigation.navigate('App')}
                  >
                    <Text
                      style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                      color={theme.COLORS.WHITE}
                    >
                      GET STARTED
                    </Text>
                  </Button>
                </Block>

              </Block>

            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? 0 : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    top: Platform.OS === 'android' ? theme.SIZES.BASE * 15 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});
