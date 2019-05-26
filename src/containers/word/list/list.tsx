import { ComponentClass } from 'react';

import Taro, { Component } from '@tarojs/taro';

import { View, } from '@tarojs/components';

import { AtButton, AtActivityIndicator } from "taro-ui";

import { BottomTip, EmptyPage} from "../../index";

import { getWordList } from "../../../actions/word";

import { connect } from '@tarojs/redux';

import './list.scss';

type ListStateProps = {
  list: any,
  end: boolean
  ing: boolean,
  err: boolean,
  message: string,
  page: number,
}

type ListDispatchProps = {
  getWordList: (payload: any) => any
}

type ListOwnProps = {

}

type ListState = {
}

type IProps = ListStateProps & ListDispatchProps & ListOwnProps

interface List {
  props: IProps;
}

@connect(({ word_list }) => ({
  list: word_list.list,
  end: word_list.end,
  err: word_list.err,
  ing: word_list.ing,
  message: word_list.message,
  page: word_list.page,
}), (dispatch) => ({
  getWordList(payload) {
    dispatch(getWordList(payload))
  },
}))

class List extends Component {

  constructor(props) {
    super(props);
  }

  static options = {
    addGlobalClass: true
  }


  render() {

    let { ing, page, list, end, err } = this.props;


    return (
      <View>

        {
          ing && page === 1 && list.length === 0 &&
          <AtActivityIndicator
            color="#333333"
            mode="center"
          ></AtActivityIndicator>
        }

        {
          !ing && end && list.length === 0 &&
          <View>
            <EmptyPage
              tip="暂无餐厅"
              icon="search"
            />
          </View>
        }

        {
          !end && page > 1 && !err &&
          <BottomTip title="加载中..." large={true} />
        }


        {
          end && list.length > 0 &&
          <BottomTip title="没有更多了" large={true} />
        }

        {
          err && list.length > 0 &&
          <BottomTip title="加载失败，点击重试" large={true} onClick={this.handleClickRetry} />
        }

        {
          err && list.length === 0 &&
          <View className="cc">
            <AtButton
              onClick={this.handleClickRetry}
              type="secondary"
              size="small"
            >加载失败，点击重试
            </AtButton>
          </View>
        }

      </View>
    );
  }

  handleClickRetry = () => {
    this.props.getWordList({
      page: this.props.page
    })
  }
}

export default List as ComponentClass<ListOwnProps, ListState>;