import '@tarojs/async-await';

import Taro, { Component, Config } from '@tarojs/taro';

import { Provider } from '@tarojs/redux';

import Index from './pages/index';

import configStore from './store';

import "./iconfonts/iconfonts.css";//iconfont icon-qrcode 使用方式

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/home/home',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#a9b7b7",
      "selectedColor": "#eb4f38",
      "borderStyle": "white",
      "backgroundColor": "#ffffff",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "段子",
          "iconPath": "images/wordN.png",
          "selectedIconPath": "images/wordS.png"
        },
        {
          "pagePath": "pages/index/index",
          "text": "图片",
          "iconPath": "images/imageN.png",
          "selectedIconPath": "images/imageS.png"
        },
        {
          "pagePath": "pages/home/home",
          "text": "声音",
          "iconPath": "images/voiceN.png",
          "selectedIconPath": "images/voiceS.png"
        },
        {
          "pagePath": "pages/home/home",
          "text": "视频",
          "iconPath": "images/videoN.png",
          "selectedIconPath": "images/videoS.png"
        }
      ]
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
