(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{372:function(t,e,s){"use strict";s.r(e);var i=s(1),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[s("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex-toolkit"),s("OutboundLink")],1),t._v(" 是三方插件, 不由 Apache Weex 开发或维护。")])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("调试需要使用集成了Weex调试工具的APP进行扫码调试，相关文档可参考：")]),s("p",[t._v("[1] "),s("router-link",{attrs:{to:"./integrate-devtool-to-android.html"}},[t._v("Android Weex Detool集成文档")]),t._v("。\n"),s("br"),t._v("\n[2] "),s("router-link",{attrs:{to:"./integrate-devtool-to-ios.html"}},[t._v("iOS Weex Detool集成文档")]),t._v("。")],1),s("p",[t._v("你也可以使用Weex官方提供的Playground App进行代码调试，下载地址见："),s("a",{attrs:{href:"http://weex.apache.org/zh/tools/playground.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weex Playground"),s("OutboundLink")],1),t._v("。")]),s("p",[t._v("回到调试二维码页面，用应用的扫码功能进行扫码，即可进入调试控制台，如图所示：")]),t._m(12),s("p",[t._v("初次进入调试界面会有提示界面引导你了解调试中会使用的相关功能，对于首次使用调试工具的开发者建议完整看完所有提示。")]),t._m(13),t._m(14),t._m(15),t._m(16),s("p",[t._v("通过控制台及日志等级选项对日志进行筛选过滤，保留你关注的日志内容，如图所示：")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),s("p",[t._v("如果你在使用过程中遇到了什么问题，可以到"),s("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit/issues/new?labels=@weex-cli/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("提交isssue进行反馈, 同时你也可以在"),s("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit/labels/%40weex-cli%2Fdebug",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("搜索是否有已解决的方案。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("本文档主要演示如何使用 "),e("code",[this._v("weex-toolkit")]),this._v(" 中内置的调试工具进行代码调试。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先需要通过 "),e("code",[this._v("npm")]),this._v(" 或 "),e("code",[this._v("yarn")]),this._v(" 安装 "),e("code",[this._v("weex-toolkit")]),this._v(" 工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ npm i weex-toolkit@beta -g\n$ weex -v // 检查是否安装成功\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安装完成后，运行 "),e("code",[this._v("weex debug")]),this._v(" 命令启动调试控制台，运行后程序将会自动打开如下界面:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1lDgKIZfpK1RjSZFOXXa6nFXa-1150-802.png",alt:"控制台界面"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你有需要编译的页面，你也可以通过 "),e("code",[this._v("weex debug [ folder | file ]")]),this._v(" 命令进行编译，如运行 "),e("code",[this._v("weex debug src")]),this._v(" ，编译后的页面将会在 "),e("code",[this._v("页面")]),this._v(" 这个标签下显示，如图所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1n4cMI4jaK1RjSZFAXXbdLFXa-747-532.png",alt:"编译页面"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"开始调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("在调试开始前，请确保安装了调试应用的手机与PC处于同一局域网下，同时关闭VPN等代理设置，否则将无法正常进行调试，同时，我们在使用功能时，尽量保证其他功能为关闭状态，如在使用"),e("code",[this._v("JS调试")]),this._v("功能时将无关的"),e("code",[this._v("网络审查")]),this._v("功能关闭，将会有更好的开发体验。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1baQ0I4naK1RjSZFBXXcW7VXa-1915-1000.png",alt:"调试控制台"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"js调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js调试","aria-hidden":"true"}},[this._v("#")]),this._v(" JS调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("开启"),e("code",[this._v("JS调试")]),this._v("功能即可进入Weex代码调试模式，如图所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1xs33I5LaK1RjSZFxXXamPFXa-1915-1001.png",alt:"JS调试"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"日志等级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志等级","aria-hidden":"true"}},[this._v("#")]),this._v(" 日志等级")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1aDEzI9zqK1RjSZFLXXcn2XXa-1912-995.png",alt:"日志等级"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"网络审查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络审查","aria-hidden":"true"}},[this._v("#")]),this._v(" 网络审查")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("开启"),e("code",[this._v("网络审查")]),this._v("功能可以查看应用的网络请求信息，对页面的请求进行有效的分析，如图所示：\n"),e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1Gu3FIVzqK1RjSZSgXXcpAVXa-1905-992.png",alt:"网络审查"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"节点审查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点审查","aria-hidden":"true"}},[this._v("#")]),this._v(" 节点审查")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("节点审查模式下会发送大量的页面信息，默认情况下为开启状态，在页面较为复杂的情况下，我们一般建议通过重置台的"),e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1S4RVJkvoK1RjSZFwXXciCFXa-30-24.png",alt:"预览"}}),this._v("按钮关闭该功能，否则可能会影响到JS调试相关功能的速度。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过选择"),e("code",[this._v("切换视图")]),this._v("选项可切换当前视图的显示情况，可对页面的视图层级进行对应分析，如图所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1endjb_Zmx1VjSZFGXXax2XXa-1916-995.png",alt:"节点审查"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"拓展功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 拓展功能")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以下拓展功能需在"),e("code",[this._v("JS调试")]),this._v("功能开启并且处于Weex页面内才可使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速导航")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1jYBYJcbpK1RjSZFyXXX_qFXa-1000-562.gif",alt:"快速导航"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"文件替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件替换","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件替换")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("点击控制台顶部的 "),e("code",[this._v("环境设置")]),this._v(" 菜单，可针对weex页面运行的依赖文件进行修改替换，修改完成后依次点击"),e("code",[this._v("生成文件")]),this._v(" -> "),e("code",[this._v("更改设置")]),this._v(" 即可对运行环境进行替换。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1F0tWJXzqK1RjSZFCXXbbxVXa-1000-562.gif",alt:"环境设置"}})])}],!1,null,null,null);e.default=r.exports}}]);