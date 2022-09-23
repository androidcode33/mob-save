import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";
import { nowTheme } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';
import { Card, Button } from "../components";
import articles from "../constants/articles";
import { color } from "react-native-reanimated";
const { width } = Dimensions.get("screen");
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Home extends React.Component {
  state = {
    data: []
  };

  _storeData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      if (value.length < 1) {
            await AsyncStorage.setItem(
                'data',
                JSON.stringify([{amount:90000,date:'5th may 2022'}])
              );
              const value = await AsyncStorage.getItem('data');

              this.setState({ data: [{amount:90000,date:'5th may 2022'}] });
        }else{
          this.setState({ data: JSON.parse(value) });
        }
    } catch (error) {
      // Error saving data
    }
  };

  async componentDidMount() {
    this._storeData();
    // Font.loadAsync({
    //   'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
    //   'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
    // });

    // this.setState({ fontLoaded: true });

    // try {
    //   const value = await AsyncStorage.getItem('data');
    //   this.console.log(value);
    //   if(value !== null) {
    //     this.setState({ data: JSON.parse(value) });
    //   }
    // } catch(e) {
    //   // error reading value
    // }
  }

  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block>
            <Block middle >
              <Text
                style={{
                  marginTop: 10,
                  marginBottom: theme.SIZES.BASE / 2,
                  fontSize: 20,
                  fontFamily: 'montserrat-regular',
                }}
              >
                Total Savings
              </Text>

              <Text
                size={20}
                style={{
                  marginTop: 0,
                  marginBottom: 30,
                  fontFamily: 'montserrat-regular',
                  fontSize: 24,
                  opacity: .8
                }}
              >
                UGX 110,000
              </Text>
            </Block>
          </Block>

          <Block card style={{
            paddingHorizontal: 9, marginHorizontal: -3, backgroundColor: 'white',
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
                Next saving date
              </Text>
            </Block>
            {console.log(this.state.data)}
            {this.state.data.map((item, index) => {
            return (
              <Block>
              <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
                <Text
                  style={{ fontFamily: 'montserrat-regular' }}
                  size={14}
                  color={nowTheme.COLORS.TEXT}
                >
                  Wed, 5th Oct 2022
                </Text>
                <Text
                  style={{ fontFamily: 'montserrat-regular' }}
                  size={14}
                  color={nowTheme.COLORS.TEXT}
                >
                  UGX 10,000
                </Text>
                <Icon name="md-checkmark-circle" family="Galio" size={20} color="grey" />
              </Block>
            </Block>
            );
          })}
           

            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10
              }}
            />
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
                UGX 10,000
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
                UGX 10,000
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
                Mon, 5th Jul 2022
              </Text>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.TEXT}
              >
                UGX 10,000
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
                Sat, 5th Jun 2022
              </Text>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.TEXT}
              >
                UGX 10,000
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
              <TouchableOpacity
                onPress={() => navigation.navigate('History')}
              >
                <Text
                  style={{
                    marginTop: 0,
                    marginBottom: theme.SIZES.BASE / 2,
                    fontSize: 20,
                    color: 'orange',
                    fontFamily: 'montserrat-regular',
                  }}
                >
                  View more
                </Text>
              </TouchableOpacity>

            </Block>

          </Block>

        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default Home;
