import { ComponentClass } from 'react';

import Taro, { Component } from '@tarojs/taro';

import { View, Button, Image} from '@tarojs/components';

import { AtIcon } from 'taro-ui';

import './user-info.scss';


type UserInfoPageStateProps = {

}

type UserInfoPageDispatchProps = {

}

type UserInfoPageOwnProps = {
  onChange?: (payload?: any) => any,
  user_img?: any,
  user_name?: any,
  show_style: boolean
}

type UserInfoPageState = {}

type IProps = UserInfoPageStateProps & UserInfoPageDispatchProps & UserInfoPageOwnProps

interface UserInfo {
  props: IProps;
  state: UserInfoPageState
}

class UserInfo extends Component {

  constructor(props) {
    super(props)
  }

  static options = {
    addGlobalClass: true
  }

  updateUserInfo = (data)=>{
    this.props.onChange && this.props.onChange(data)
  }
  render () {

    const { user_img, user_name, show_style } = this.props
    return (
      <View>
        {
          user_img && user_name  ? <Button className='clean-btn' openType='getUserInfo' onGetUserInfo={this.updateUserInfo}>
          <View className='f item_box'>
            { show_style && <View className='f1 head_img_box'>
              <Image className='head_img' src={user_img} mode='aspectFit'/>
            </View>
            }
            { show_style && <View className='f1 item_name f-s-c'>
              {user_name}
            </View>
            }
            {
              !show_style && <View className='f1 item_name f-s-c head_title'>头像</View>
            }
            <View className='f-e-c'>
              {
                !show_style && <Image className='head_img' src={user_img} mode='aspectFit'/>
              }

              <AtIcon value='iconfont icon-right' size='26' color='#c7c7c7'></AtIcon>

            </View>
          </View>
        </Button>:<Button className='clean-btn' openType='getUserInfo' onGetUserInfo=                   {this.updateUserInfo}>
          <View className="user_info--btn button_primary">同步昵称头像</View>
        </Button>
      }
      </View>
    )
  }
}

export default UserInfo as ComponentClass<UserInfoPageOwnProps, UserInfoPageState>
