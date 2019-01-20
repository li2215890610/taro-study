import { ComponentClass } from 'react'
import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui';
import './empty-page.scss'

type PageOwnProps = {
  tip: string,
  icon: string,
  button?: string,
  fixed?: boolean,
  height?: number,
  prefixe_class?: string,
  onClickButton?: ()=> any
}

type PageState = {}

type IProps = PageOwnProps

interface Page {
  props: IProps;
}

class Page extends PureComponent {

  static options = {
    addGlobalClass: true
  }
  
  componentWillReceiveProps() {
  }

  componentWillUnmount() { }

  componentDidShow() {
  }

  componentDidHide() { }

  render() {

    const {
      tip,
      icon,
      button,

      fixed,
      height,

      prefixe_class
    } = this.props;

    return (
      <View className="cc" style={fixed === false ? {position:'relative', height: Taro.pxTransform(height || 600), top:0, left:0, transform:'translate(0,0)'} : {}}>
        <View className="cc__icon">
          <AtIcon
            prefixClass={prefixe_class ? prefixe_class : "at-icon"}
            value={icon}
            size='30'
            color='#CCC'
          ></AtIcon>
        </View>
        <View className="tip__text">{tip}</View>

        {!!button && <View className="cc__btn"><AtButton
          onClick={this.props.onClickButton}
          type="secondary"
          size="small"
        >{button}
        </AtButton></View>}
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Page as ComponentClass<PageOwnProps, PageState>
