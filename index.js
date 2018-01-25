import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

function getTexts(arr) {
    let words = arr.split(' ')
    if (words.length > 1) {
        words = words.map(i =>
            i.split('')
        )
        return words
    }else{
        return [words]
    }
}

export default class extends Component {
    render() {
        const {style, letterSpacing, textAlign, containerStyle, children} = this.props
        let {wordSpacing} = this.props
        if (!wordSpacing) {
            wordSpacing = letterSpacing * 3
        }
        if (!wordSpacing) {
            wordSpacing = 15
        }

        let words = getTexts(children)

        return (
            <View style={containerStyle}>
                <View
                    style={[styles.wrapper, {marginLeft: -1 * wordSpacing}, textAlign === 'center' && {justifyContent: 'center'}, textAlign === 'right' && {justifyContent: 'flex-end'}]}>
                    {
                        words.map((i, ind) =>
                            <View
                                style={[
                                    styles.word, {marginLeft: wordSpacing},
                                    textAlign === 'center' && {justifyContent: 'center'}
                                ]}
                                key={ind}>
                                {
                                    i.map((j, index) => <Text
                                        style={[style, index > 0 && {marginLeft: letterSpacing}]}
                                        key={index}>{j}</Text>)
                                }
                            </View>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    word: {
        flexDirection: 'row'
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        margin: 0,
        padding: 0
    }

})


