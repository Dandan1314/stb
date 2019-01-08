# V1.2.0 文档
> 文档以及示例源码不定期更新
#### 收藏点star，订阅点watch

> 历史版本
>- 前往版本 [v1.1.0](https://github.com/442331311/stb/issues/32)
>- 前往版本 [v1.0.0](https://github.com/442331311/stb/issues/20)

## 不再复杂的EPG页面开发
#### EPG运行于电视端，与我们所接触的前端(手机端、电脑端)有一定差异。体现为复杂的焦点管理，调试成本很高，播放器以及各个盒子之间兼容性问题。都在我们编码前无形增加难度。甚至于一天写好所有功能，要花两到三天去调试程序BUG，这几乎是无法接受的状态，恰恰也是不可避免的问题。
#### 基于这样的初衷想过一些方案，比如利用主流框架优势(React、Vue)来简化开发难度，通过TypeScript 引入模块化方案。通过前端OOP合理组织代码。有些方案可行，盒子运行内核由各大厂商(华为、中兴、海信、烽火)等。盒子版本有2k、4k，由于这些客观原因，导致主流框架无法运行。
#### React 具有视图层复用，单项数据流等优势，对于EPG开发来说是一种福音。读了 [React 设计思想](https://github.com/react-guide/react-basic) 以及各个大神解析的 React 实现思路。完成了具备（状态机、虚拟DOM、组件化、子父组件）等概念的TV版React 框架且在各大IPTV专区完美运行，当然还有非常大改进空间。不过现有框架的优势也很明显，因此建议大家在了解后采用他，并提出自己宝贵改进建议。

### [特性预览](https://github.com/442331311/stb/issues/30)
> **React API** 
``` typescript
export class PageModule extends React.Component<IPageProps, IPageState>{
    constructor(props: IPageProps) {
        super(props);
        this.state = {
        }
    }
    protected render() {
        return (
            <div class="content">
                <span>Hello EPG!</span>
            </div>
        )
    }
    protected componentDidMount(){
    }
    protected componentDidUpdate(){
    }
    protected componentFocusUpdate(){
    }
}
```

> #### **Jsx 语法**

``` typescript
protected render() {
    return (
        <div class="content">
        <span>Hello EPG!</span>
        </div>
    )
}
```
> **[智能焦点](https://github.com/442331311/stb/issues/30)**

> **[数据滚动](https://github.com/442331311/stb/issues/30)**

> **[翻页组件](https://github.com/442331311/stb/issues/30)**

> **数据结构 (已经兼容的ES6特性)**
>- [字典](https://github.com/442331311/framework/blob/master/conllection/dictionary.ts)
>- [链表](https://github.com/442331311/framework/blob/master/conllection/doublyLinkedList.ts)
>- [队列](https://github.com/442331311/framework/blob/master/conllection/queue.ts)
>- [集合](https://github.com/442331311/framework/blob/master/conllection/set.ts)

~~BootEpg UI库~~
> ~~分页列表~~
> ~~菜单~~

### 起步
>>#### [我的第一个EPG程序（一）：初始化项目环境](https://github.com/442331311/stb/issues/3)
>>#### [我的第一个EPG程序（二）：Hello EPG!](https://github.com/442331311/stb/issues/4)
>>#### [我的第一个EPG程序（三）：焦点管理](https://github.com/442331311/stb/issues/5)
>>#### [我的第一个EPG程序（四）：认识页面生命周期](https://github.com/442331311/stb/issues/18)
>>#### [我的第一个EPG程序（五）：页面跳转与参数传递](https://github.com/442331311/stb/issues/19)

### 进阶
>>#### [程序设计（一）：组件](https://github.com/442331311/stb/issues/25)
>>#### [程序设计（二）：父组件](https://github.com/442331311/stb/issues/27)
>>#### [程序设计（三）：子组件](https://github.com/442331311/stb/issues/29)
>>#### [程序设计（四）：Tips 消息](https://github.com/442331311/stb/issues/21)
>>#### [程序设计（五）：Log 日志](https://github.com/442331311/stb/issues/23)
>>#### [程序设计（六）：Form 表单](https://github.com/442331311/stb/issues/24)
>>#### [命令行工具（一）：创建页面](https://github.com/442331311/stb/issues/22)
>>#### [命令行工具（二）：创建组件](https://github.com/442331311/stb/issues/36)

### 高阶
>>#### ~~[装饰器（一）：普通组件]()~~
>>#### ~~[装饰器（二）：走马灯组件]()~~
>>#### ~~[装饰器（三）：横向翻页组件]()~~
>>#### ~~[装饰器（四）：纵向翻页组件]()~~
>>#### ~~[装饰器（五）：横向逐步滚动组件]()~~
>>#### ~~[装饰器（六）：纵向逐步滚动组件]()~~

### 播放器
>>#### [播放器（一）：引言](https://github.com/442331311/stb/issues/31)
>>#### [播放器（二）：接口调用](https://github.com/442331311/stb/issues/34)
>>#### [播放器（三）：事件监听](https://github.com/442331311/stb/issues/35)
>>#### ~~[播放器（一）：优化技巧]()~~

### EPG开发记录
#### EPG页面运行于IPTV平台，其特殊性导致相关开发技术与人员是小众群体，总结了以下开发记录可有效避免一些常规问题
>>[EPG开发日志（一）：盒子与浏览器差异](https://github.com/442331311/stb/issues/1)

### 开发体验优化
>> #### [开发体验优化（一）：Visual Studio Code 插件推荐](https://github.com/442331311/stb/issues/26)
>> ~~[开发体验优化（一）：清除缓存之本地服务]()~~

#### 当前版本更新
>- 优化 yarn gulp page:clean --pageName 和 yarn gulp page:complete --pageName 命令。自动配置 webpack 无需手动配置


# 相关项目
- anhui-戏曲（2017）
- neiment-环球（2017）
- yunnan-4k（2017）
- anhui-猜灯谜（2018）
- anhui-送祝福（2018）
- neiment-天翼（2018.3）
- anhui-聚合（2018.5）
- yunnan-618活动（2018.6）
- anhui-世界杯活动（2018.6）
- shanxi-少儿（2018.7）
- anhui-体育（2018.9）
- guizhou-电竞（2018.11）
- anhui-直播活动（2018.11）
- guangxi-教育（2018.11）
- guizhou-国学（2018.11）
- shanxi-国学（2018.11）
- sichuanyidong-快乐佳贝（2018.12）
