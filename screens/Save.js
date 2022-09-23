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

class Save extends React.Component {
    renderSave = () => {
        const { navigation } = this.props;
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}
            >
                <Block flex>

                    <Block flex row>
                        <Text
                            size={16}
                            style={{
                                marginTop: 25,
                                marginBottom: 8,
                                lineHeight: 20,
                                fontSize: 14,
                                opacity: .8,
                                fontFamily: 'montserrat-regular',
                            }}
                        >
                            ADD SAVINGS SUMMARY
                        </Text>
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


                        <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE, paddingTop: 15 }}>
                            <Text
                                style={{ fontFamily: 'montserrat-regular', }}
                                size={14}
                                color={nowTheme.COLORS.PRIMARY}
                            >
                                TOTAL TO ADD
                            </Text>
                            <Text
                                style={{ fontFamily: 'montserrat-regular' }}
                                size={14}
                                color={nowTheme.COLORS.TEXT}
                            >
                                UGX 100,000
                            </Text>
                        </Block>
                    </Block>


                    <Block flex row>
                        <Text
                            size={16}
                            style={{
                                marginTop: 35,
                                marginBottom: 8,
                                lineHeight: 20,
                                fontSize: 14,
                                opacity: .8,
                                fontFamily: 'montserrat-regular',
                            }}
                        >
                            ADD SAVINGS WITH
                        </Text>
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


                        <Block row middle space="between" style={{ marginBottom: theme.SIZES.BASE, paddingTop: 15 }}>
                            <Text
                                style={{ fontFamily: 'montserrat-regular', }}
                                size={14}
                                color={nowTheme.COLORS.TEXT}
                            >
                                MTN MOMO ****91833
                            </Text>
                            <Text
                                style={{ fontFamily: 'montserrat-regular' }}
                                size={14}
                                color={nowTheme.COLORS.TEXT}
                            >
                                UGX 100,000
                            </Text>
                        </Block>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                marginBottom: 10
                            }}
                        />

                        <Block middle >
                            <Text
                                style={{
                                    marginTop: 8,
                                    marginBottom: theme.SIZES.BASE / 1,
                                    fontSize: 14,
                                    color: 'orange',
                                    fontFamily: 'montserrat-bold',
                                }}
                            >
                                CHANGE MTN MOMO NUMBER
                            </Text>
                        </Block>

                    </Block>

                    <Block middle style={{
                        marginTop: 35
                    }}>
                        <Button
                            shadowless
                            style={styles.button}
                            onPress={() => setTimeout(()=> {
                                navigation.navigate('History');
                               }, 2000)}
                        >
                            <Text
                                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                color={theme.COLORS.WHITE}
                            >
                                ADD NOW: UGX 100,000
                            </Text>
                        </Button>

                    </Block>

                    <Block flex row>
                        <Text
                            size={16}
                            style={{
                                marginTop: 26,
                                marginBottom: 8,
                                lineHeight: 20,
                                fontSize: 14,
                                opacity: .8,
                                fontFamily: 'montserrat-regular',
                            }}
                        >
                            By clicking "Add Now", I accept Mob-Save's Terms and conditions, Privacy and Cookie Notice
                        </Text>
                    </Block>

                    <Block flex row>
                        <Text
                            size={16}
                            style={{
                                marginTop: 26,
                                marginBottom: 8,
                                lineHeight: 20,
                                fontSize: 14,
                                opacity: .8,
                                fontFamily: 'montserrat-regular',
                            }}
                        >
                            Please Note: Mob-Save will never ask you for your PIN over the Phone
                        </Text>
                    </Block>

                </Block>
            </ScrollView>
        );
    };

    render() {
        return (
            <Block flex center style={styles.home}>
                {this.renderSave()}
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

export default Save;
