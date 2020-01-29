import { ComponentClass } from 'react';

import Taro, { Component, Config } from '@tarojs/taro';

import { View, } from '@tarojs/components';

import { connect } from '@tarojs/redux';

import List from "../../containers/word/list/list";

import { getWordList } from "../../actions/word";

import './word.scss';

// 指定 redux 导出数据及数据类型检查
type WordStateProps = {
  end: boolean
  ing: boolean,
  err: boolean,
  page: number
}

// 指定 actions 导出方法
type WordDispatchProps = {
  getWordList: (payload: any) => any
}

// 指定 父组件传入的数据声明及数据类型检查
type WordOwnProps = {}

// 指定 组件内部state数据类型检查
type WordState = {}

type IProps = WordStateProps & WordDispatchProps & WordOwnProps

interface Word {
  props: IProps;
}

@connect(({ word_list }) => ({
  end: word_list.end,
  ing: word_list.ing,
  err: word_list.err,
  page: word_list.page,
}), (dispatch) => ({
  getWordList(payload) {
    dispatch(getWordList(payload))
  },
}))

class Word extends Component {
  
  config: Config = {
    navigationBarTitleText: '段子',
    enablePullDownRefresh: false,
  }

  componentDidMount(){
    // page: (this.props.page),
    this.getWordList({
      a: 'newlist',
      c: 'data',
      type: '29',
    })
  }


  onReachBottom() {

    if (this.props.ing || this.props.end || this.props.err) {
      return false;
    }
    this.getWordList({page: (this.props.page + 1)})
  }
  
  getWordList = (data)=>{
    this.props.getWordList( {...data})

  }

  render () {
    return (
      <View>
        <List />
      </View>
    )
  }
}

export default Word as ComponentClass<WordOwnProps, WordState>
