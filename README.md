# react-native-letter-spacing
*Letter spacing styled text component for iOS and Android*

## Installation

```npm i --save react-native-letter-spacing```


**Note: Does not support justified texts**


## Usage

```js
import MyText from 'react-native-letter-spacing';

<MyText
  letterSpacing={2}
  wordSpacing={15}
  textAlign='center'
  style={{
    fontSize: 20,
    color: '#ccc'
  }}/>
```

## Properties

| Prop | Description | Default |
|---|---|---|
|**`letterSpacing`**|A number to use as the margin between characters|`0`|
|**`wordSpacing`**|A number to use as the margin between words. Default is letterSpacing\*3|*letterSpacing \* 3 \|\| 15*|
|**`textAlign`**|'left', 'center', or 'right'|*left*|
|**`children`**|Text to be spaced.|*left*|
|**`style`**|Style for the text only (fontSize, color etc.).|*null*|
|**`containerStyle`**|Style for wrapper view.|*null*|



## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Fazilet Cilli
