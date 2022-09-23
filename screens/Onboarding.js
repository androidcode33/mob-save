import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import  {Input}  from  '../components/';

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
                
                <Block flex row 
                style={{
                      marginTop: 15,
                      marginBottom: 20,
                      lineHeight: 20,
                    }}></Block>

                  <Input succcess={true} placeholder={'Enter your PIN'} />
          
                <Block middle style={{
                      marginTop: 15
                    }}>
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
                      Continue
                    </Text>
                  </Button>
                  <Text
                    size={16}
                    style={{
                      marginTop: 15,
                      marginBottom: 20,
                      fontSize: 16,
                      opacity: .8,
                      fontFamily: 'montserrat-regular',
                    }}
                  >
                    Forgot PIN
                  </Text>
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
