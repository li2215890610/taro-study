import { ComponentClass } from 'react';
import Taro, { PureComponent } from "@tarojs/taro";
import { View } from "@tarojs/components"
import "./bottom-tip.scss";

type BottomTipOwnProps = {
  title: string,
  large?: boolean,
  onClick?: () => any
}

type BottomTipState = {}

type IProps = BottomTipOwnProps

interface BottomTip {
  props: IProps;
}

class BottomTip extends PureComponent {

  constructor(props) {
    super(props);
  }

  static options = {
    addGlobalClass: true
  }

  componentWillMount() {
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentWillReceiveProps() {

  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {

    const {
      large,
      title
    } = this.props;

    return (
      <View onClick={this.handleClick} className={`bottom-tip ${large ? 'bottom-tip--large' : ''}`}>{title}</View>
    );
  }
}

export default BottomTip as ComponentClass<BottomTipOwnProps, BottomTipState>;