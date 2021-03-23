import React from 'react'

const l1 = 'l1'
const arr = [
  [l1, '5年前端开发经验，英语水平六级'],
  [l1, '熟悉react技术栈，了解react,redux,react-router原理'],
  [l1, '熟练使用react hook,善于提取组件，封装hook'],
  [l1, '掌握前端安全、性能、缓存、网络相关知识'],
  [l1, '了解前端工程化，能够基于webpack从零开始搭建开发环境'],
  [l1, '了解浏览器原理，有小程序，vue，nodejs，java开发经验'],
]

const job = [
  ['2018-09 - 至今', '众安保险'],
  ['2018-08 - 2018-08', '百姓网'],
  ['2017-09 - 2018-08', '途虎养车网'],
  ['2016-10 - 2017-08', '好医生云医院上海分公司'],
]

const pro = [
  {
    t: '健康险运营系统',
    g: '众安保险',
    list: [
      '1. 健康险运营系统是一个包含团险、个险、雇主险等模块的后台管理系统，支撑着健康险的业务运行',
      '2. 之前由多名人员开发，2020年下半年开始，我参与其中的维护与迭代，做了以下优化',
      'a. 用redux结合自定义的useResource解决多个组件使用同个资源情况下，代码重复和请求多次的问题',
      'b. 采用函数来返回路径，方便搜索，解决运营系统页面较多，字符串拼接式的路径，后续改动容易遗漏的问题',
      'c. 封装了LoadingBtn组件，Modal.confirm函数来防止表单重复提交',
      'd. 配置sass-loader的addtionalData解决需要手动导入scss变量文件的问题',
      'e. 封装函数，解决输入查询等原因导致的竞态问题',
    ],
  },
  {
    t: '投保、补充告知等C端项目',
    g: '众安保险',
    list: [
      '1. 用户填写信息，上传图片来投保或做信息告知的项目',
      '2. 项目接入了sentry来收集报错信息，通过Element.matches api埋点减少对业务代码的入侵',
      '3. 开发中封装了支持多张图片上传、浏览、缩略图/原图切换功能的组件，解决了业务变动缓存冲突，transition动画不执行，nomarlize.css重复导入，vivo手机window.location兼容性等问题',
    ],
  },
  {
    t: '移动魔方',
    g: '众安保险',
    list: [
      '1. 移动魔方是一个低代码平台，在网页上搭建H5页面，配置逻辑',
      '2. 负责实现拖拽组件，配置组件属性来生成页面，和nodejs接口编写；对接公司内部的sso统一登录',
      '3. 支持一个站点多个页面，页面内的组件支持排序、嵌套，能够实现复杂的组件嵌套',
    ],
    难点: [],
  },
  {
    t: '众安马上医小程序',
    g: '众安保险',
    list: [
      '1. 众安马上医是一款支持用户记录血糖血压，健康测评，阅读文章，积分收集兑换的多功能小程序',
      '2. 我接手后，负责实现所有前端功能，并将小程序由wepy1技术迁移到Taro，通过使用脚本来合并wepy,Taro的编译结果，实现了wepy向Taro的逐步迁移',
    ],
  },
  {
    t: 'H5投保、运营系统',
  },
]

export default function Resume() {
  return (
    <div>
      <h1>苗林强的前端简历</h1>
      <div className="t1">个人信息</div>
      <div className="l1">本科/南京信息工程大学/计算机系 2012.9 - 2016.6</div>
      <div className="l1">手机：13916645108 邮箱：linqiang.miao@qq.com</div>
      <div className="l1">github：https://github.com/miaolq</div>

      <div className="t1">个人优势</div>
    </div>
  )
}

// includesBigUnicode 倒计时s
// ruler marquee 测评 迁移

// 支持scss postcss,autoprefixer
// browserslist
// babel  core-js
// eslint prettier,
// 通过 eslint-config-prettier 解决了eslint prettier冲突问题
// 支持热更新
// require.context 支持文件夹内jsx自动导入
