

Description:     
A custom button component that should render nicely on any platform. Supports a minimal level of customization.     
Installation:      
```
 npm install --save react-native-customer-button
```
Example usage:  
```
import Button from 'react-native-customer-button';
   ...
  render() {
    return (
      <View style={styles.container}>
        <Button />
      </View>
    );
  }
```
Props:   

|props|Explain|type|require|default| 
|:-:|:-:|:-:| 
|onPress|handler to be called when the user taps the button|function|yes|no|
|title|text to display inside the button|string|yes|ok|
|accessibilityLabel|||
|color|||
|disabled|||
|testID|||
|hasTVPreferredFocus|||

LICENSE:    
MIT

