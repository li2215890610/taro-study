import { ComponentClass } from 'react';

import Taro, { Component } from '@tarojs/taro';

import { View } from '@tarojs/components';

import { AtButton } from 'taro-ui';

import  './public-bottom-btn.scss';

type PublicBottomBtnPageStateProps = {
  
}

type PublicBottomBtnPageDispatchProps = {
  
}

type PublicBottomBtnPageOwnProps = {
  onClick: ( ) => void,
  btn_word: string,
  bg_class?: string
}

type PublicBottomBtnPageState = {}

type IProps = PublicBottomBtnPageStateProps & PublicBottomBtnPageDispatchProps & PublicBottomBtnPageOwnProps

interface PublicBottomBtn {
  props: IProps;
  state: PublicBottomBtnPageState
}

class PublicBottomBtn extends Component {

  static options = {
    addGlobalClass: true
  }

  onClick = ()=>{
    this.props.onClick && this.props.onClick()
  }

  render () {
    return (
      <View className='button_primary--bottom'>
        <AtButton type='primary' size='normal' className={`button_primary bottom_primary--btn ${this.props.bg_class}`} onClick={this.onClick}>
          {this.props.btn_word}
        </AtButton>
      </View>
    )
  }
}

export default PublicBottomBtn as ComponentClass<PublicBottomBtnPageOwnProps, PublicBottomBtnPageState>
