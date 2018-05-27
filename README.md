The final rendering
----
![The final rendering](https://github.com/suwu150/static-resource/blob/master/images/react-native-custome-button.gif?raw=true)

Description: 
--------------------------------------    
A custom button component that should render nicely on any platform. Supports a minimal level of customization.     

Installation:  
-------------------------------------- 
```
 npm install --save react-native-customer-button
```
Example usage: 
--------------------------------------- 
1.basic     

```
import Button from 'react-native-customer-button';
   ...
   _onPress = () => {
     console.log('onPress');
   }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._onPress} />
      </View>
    );
  }
```

Props:   
---------------------------------------

|Props|Explain|type|require|default|          
|:-------|:--------|:--------|:-------|:----------|
|onPress|handler to be called when the user taps the button|function|yes|no|       
|title|text to display inside the button|string|yes|ok|     
|disabled|If true, disable all interactions for this component.|bool|no|false|      
|style|button style,The style used to modify the button|object|no|{ backgroundColor: '#43CCFF',height: 30,width: 100,}|     
|textStyle|The style of the text in the button|object|no|{fontSize: 15, color: '#000000'}|      

for example for props:
```javascript
render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>{this.state.count}</Text>
        <Button
          style={{ marginBottom: 5 }}
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
        <Button
          title={'cancel'}
          style={{ marginBottom: 5 }}
          onPress={() => this.setState({ count: 'cancel' })}
        />
        <Button
          title={'submit'}
          style={{
            marginBottom: 5,
            backgroundColor: 'gray'
          }}
          onPress={() => this.setState({ count: 'submit' })}
        />
        <Button
          title={'white font'}
          style={{
            marginBottom: 5,
            backgroundColor: 'gray'
          }}
          textStyle={{
            color: '#fff',
            fontSize: 16
          }}
          underlayColor={'#ff0'}
          onPress={() => this.setState({ count: 'submit' })}
        />
      </View>
    );
  }
```

LICENSE: 
-------   
MIT

