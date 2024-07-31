- react 
    了解react,一周可上手，学过，也写了这个项目
- worker.js
    js对于界面操作外的复杂计算(AI，压缩)，html5 提供了 web worker 子线程来通过消息机制完成任务
    - 执行太久，分钟为单位
        主线程不可能等这么久，无法交互，不属于event loop,浏览提供的独立线程机制
- LLM 下载太慢了，前端提供体验反馈，下载中...
-Percentage 组件
    - AI 用户体验 prompt 工作的 给大模型思考的时间
    - text模型文件 percentage进度条 参数，react es6 解构
    - ?? es6 的三元运算符快捷方式， 阮一峰的es6手册
    - 只显示两位小数，包装类的概念
    - 注重细节和场景
# 项目介绍
    我的项目全面采用vue3 es6 风格，setup语法对比vue2，选项式API,更简洁，更好维护，不在受类式约束
    //vue2 选项式API ,状态在data(){ return{}} 方法放在method
    //声明周期 ...computed 逻辑因为类的结构，分散
    //Setup,函数式，很自由
    //可以按逻辑（响应式状态 + 方法 + 声明周期写到一起
    举个例子，进度条相关的逻辑（响应式，生命周期等）和web worker的逻辑就分开来了，每个逻辑在一起，不受类的形式的约束，更好维护

- web worker 
- 单例模式
    import { pipeline } from ''
    - pipeline('teanslate', model)
    - AI 工作封装起来 pipeline
        transformer.js nlp库 几十种常见的nlm任务，pipeline派出你要的哪个nlp任务,task model
    - pipeline 很漫长，耗内存，上单例模式
        只实例化一次的类
        静态方法，不需要new
        MyTranslationPipeline.getInstance()
    - initiate 多个模型文件要下载
    - ready

- 这个基于transformers.js的React AI 项目，实现了类似百度（谷歌）翻译的功能
    前端独立完成React组件 + AI翻译功能，这就是AI的强大，来自HuggingFace
    - react 函数式组件 + hooks 函数，封装了 Progress 和 LanguageSelector 组件
    - web workers 多线程来打理AI任务
        - addEventListener('message', (event) => {})
        - postMessage(message) 消息机制
    - 封装了 MyTranslationPipeline 单例类
    - pipeline
        -initate/progress/ready/update/complete
            进度条展示LLM下载和加载过程
        - 翻译功能
            pipe('translate', model, input, options)

# 为什么要学习AI
- AI带来了前端用户体验的提升，我在关注openai等大模型，coze低代码AI应用以及api调用，关注到transformers.js前端库，这个项目是学习项目，将react + AI nlp任务结合，