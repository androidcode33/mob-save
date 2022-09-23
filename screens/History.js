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

class History extends React.Component {
    renderHistory = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}
            >
                <Block flex>

                    <Block card style={{
                        paddingHorizontal: 16, marginHorizontal: -3, backgroundColor: 'white',
                        borderRadius: 8,
                        paddingVertical: 4,
                        shadowColor: 'white',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        elevation: 20,
                        shadowRadius: 3,
                        marginTop:18
                    }}>

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

                        <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE }}>
                            <Text
                                style={{ fontFamily: 'montserrat-regular' }}
                                size={14}
                                color={nowTheme.COLORS.TEXT}
                            >
                                Fri, 2th May 2022
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
                                Mon, 16th Apr 2022
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
                                Tue, 23th Mar 2022
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
                                Wed, 26th Feb 2022
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
                                Thur, 20th Jan 2022
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
                                Sat, 27th Dec 2021
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
                                Mon, 11th Nov 2021
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


                    </Block>

                </Block>
            </ScrollView>
        );
    };

    render() {
        return (
            <Block flex center style={styles.home}>
                {this.renderHistory()}
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

    },
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0
    },
});

export default History;
