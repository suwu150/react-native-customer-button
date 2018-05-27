import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
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
    title: '确定',
  };

  onPress = (e) => {
    NoDoublePress.onPress(() => {
      this.props.onPress && this.props.onPress(e);
    });
  };

  renderIcon = () => {
    if (typeof this.props.icon === 'function') {
      return this.props.icon();
    }

    return this.props.icon;
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
            {/*{this.renderIcon()}*/}
            <Text
              style={[styles.defaultTextStyle, this.props.textStyle]}
            >
              {this.props.title}
            </Text>
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
          {/*{this.renderIcon()}*/}
          <Text
            style={[styles.defaultTextStyle, this.props.textStyle]}
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default RNButton;
