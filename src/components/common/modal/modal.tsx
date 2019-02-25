import { ComponentClass } from 'react';

import Taro, { PureComponent } from '@tarojs/taro';

import { View } from '@tarojs/components'

import { AtIcon } from 'taro-ui';

import './Modal.scss';

type ModalOwnProps = {
  title?: string,
  children?: any,
  onClose: () => any,
  width?: any,
  title_class?: string
}

type ModalState = {}

type IProps = ModalOwnProps

interface Modal {
  props: IProps;
}

class Modal extends PureComponent {

  constructor(props) {
    super(props);
  }

  // static externalClasses = ['title_class']

  static options = {
    addGlobalClass: true
  }

  handleClickClose = () => {
    this.props.onClose && this.props.onClose();
  }

  render() {

    const {
      title,
      width
    } = this.props;

    return (
      <View className='modal'>
        <View className='modal-inner' style={width ? {width: width} : {}}>
          <View className='modal-title'>
            <View className={this.props.title_class}>
              {title}
            </View>
            <View className='modal-close' onClick={this.handleClickClose}>
              <AtIcon value='close' size='15' color='#999999'></AtIcon>
            </View>
          </View>
          <View className='modal-content'>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}

export default Modal as ComponentClass<ModalOwnProps, ModalState>;