import { ComponentClass } from 'react';

import Taro, { Component } from '@tarojs/taro';

import { View} from '@tarojs/components';

import { AtTabs } from 'taro-ui';

type PublicTabPageStateProps = {

}

type PublicTabPageDispatchProps = {

}

type PublicTabPageOwnProps = {
  current: number,
  tab_list: Array<any>,
  onChange:(payload:any) => any
}

type PublicTabPageState = {}

type IProps = PublicTabPageStateProps & PublicTabPageDispatchProps & PublicTabPageOwnProps

interface PublicTab {
  props: IProps;
  state: PublicTabPageState
}

class PublicTab extends Component {

  constructor(props) {
    super(props)
  }

  static options = {
    addGlobalClass: true
  }

  handleClick = (value)=>{

    this.props.onChange && this.props.onChange(value)
  }
  
  render () {
    return (
      <View>
        <AtTabs 
          className='tab_class' 
          current={this.props.current} 
          tabList={this.props.tab_list}
          onClick={this.handleClick.bind(this)} 
          animated={false}
        >
          
        </AtTabs>
      </View>
    )
  }
}

export default PublicTab as ComponentClass<PublicTabPageOwnProps, PublicTabPageState>
