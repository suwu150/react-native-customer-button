import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const NoDoublePress = {
  lastPressTime: 1,
  onPress(callback) {
    const curTime = new Date().getTime();
    if (curTime - this.lastPressTime > 1000) {
      this.lastPressTime = curTime;
      callback();
    }
  },
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#43CCFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 100,
  },
  defaultTouchStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultTextStyle: {
    fontSize: 15,
    color: '#000000'
  },
  defaultRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class RNButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string,
    style: ViewPropTypes.style,
    underlayColor: PropTypes.string,
  };

  static defaultProps = {
    title: 'ok',
  };

  onPress = (e) => {
    NoDoublePress.onPress(() => {
      this.props.onPress && this.props.onPress(e);
    });
  };

  renderIcon = () => {
    const { icon, iconStyle = {} } = this.props;
    return (
      <Image source={icon} style={iconStyle} />
    );
  };

  render() {
    const { title } = this.props;
    if (this.props.underlayColor) {
      return (
        <View style={[styles.defaultStyle, this.props.style]}>
          <TouchableHighlight
            style={[styles.defaultTouchStyle]}
            onPress={this.onPress}
            underlayColor={this.props.underlayColor}
          >
            <View style={styles.defaultRowContainer}>
              {this.renderIcon()}
              <Text
                style={[styles.defaultTextStyle, this.props.textStyle]}
              >
                {this.props.title}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <View style={[styles.defaultStyle, this.props.style]}>
        <TouchableOpacity
          style={[styles.defaultTouchStyle]}
          onPress={this.onPress}
        >
          <View style={styles.defaultRowContainer}>
            {this.renderIcon()}
            <Text
              style={[styles.defaultTextStyle, this.props.textStyle]}
            >
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
}

export default RNButton;
