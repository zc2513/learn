module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    rules: {
        // 官方地址：https://eslint.vuejs.org/rules/comment-directive.html
        // 0 禁用此规则 1 不符合规则即给出警告 2 不符合规则即报错
        'vue/max-attributes-per-line': [2, {
            singleline: 10, // 单行时每行最大属性数
            multiline: {
                max: 1, // 多行时每行最大属性数
                allowFirstLine: false // 多行时是否允许标签在同一行
            }
        }],
        'vue/no-use-v-if-with-v-for': ['error', { // v-for的指令上是否允许存在v-if 默认是false
            allowUsingIterationVar: true
        }],
        'vue/singleline-html-element-content-newline': 'off', // 该规则强制在单行元素的内容之前和之后使用换行符
        'vue/multiline-html-element-content-newline': 'off', // 该规则强制在多行元素的内容之前和之后使用换行符
        'vue/name-property-casing': ['error', 'PascalCase'], // PascalCase将name属性强制执行到Pascal大小写
        'vue/no-v-html': 'off', // 不允许使用v-html来防止跨站攻击
        'accessor-pairs': 2, // 在对象中使用getter/setter
        'arrow-spacing': [2, { // 箭头函数的前后括号
            before: true,
            after: true
        }],
        'block-spacing': [2, 'always'], // 块级作用域缩进
        'brace-style': [2, '1tbs', { // 大括号的风格
            allowSingleLine: true// 允许开始和结束的大括号在同一行
        }],
        camelcase: [0, { // 执行驼峰命名约定
            properties: 'always'// 强制属性名称使用驼峰命样式
        }],
        'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
        'comma-spacing': [2, { // 逗号前后的空格
            before: false, // 逗号后不允许有空格
            after: true// 在逗号前需要一个或多个空格
        }],
        'comma-style': [2, 'last'], // 逗号风格,换行时在行首还是行尾 ->行尾
        'constructor-super': 2, // 非派生类不能调用super，派生类必须调用super
        curly: [2, 'multi-line'], // 块级作用域可以不带大括号
        'dot-location': [2, 'property'], // 对象访问符的位置  要求点与属性在同一条线上。
        'eol-last': 2, // 文件以单一的换行符结束
        eqeqeq: ['error', 'always', { null: 'ignore' }], // 必须使用全等   never则是== or ===
        'generator-star-spacing': [2, { // generate函数的前后空格
            before: true,
            after: true
        }],
        'handle-callback-err': [2, '^(err|error)$'], // nodejs函数处理错误
        indent: [2, 4, { // 缩进风格，switch缩进风格
            SwitchCase: 1
        }],
        'jsx-quotes': [2, 'prefer-single'], // jsx使用单引号
        'key-spacing': [2, { // 对象字面量中冒号添加后空格
            beforeColon: false, // 不允许在对象文字的键和冒号之间有空格。
            afterColon: true// 在冒号和对象文字值之间至少需要一个空格。
        }],
        'keyword-spacing': [2, { // 关键字前后空格
            before: true,
            after: true
        }],
        'new-cap': [2, { // 新建对象实例首字母必须大写
            newIsCap: true,
            capIsNew: false
        }],
        'new-parens': 2, // new时必须加小括号
        'no-array-constructor': 2, // 禁止使用数组构造器
        'no-caller': 2, // 禁止使用arguments.caller或arguments.callee
        'no-class-assign': 2, // 禁止给类赋值
        'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
        'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
        'no-dupe-args': 2, // 函数参数不能重复
        'no-dupe-class-members': 2, // 对象成员不能重复
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
        'no-duplicate-case': 2, // switch中的case标签不能重复
        'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
        'no-empty-pattern': 2, // 不允解构时使用空的模式接口 如let [] = a
        'no-eval': 2, // 禁止使用eval
        'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
        'no-extend-native': 2, // 禁止扩展native对象
        'no-extra-bind': 2, // 禁止不必要的函数绑定
        'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
        'no-extra-parens': [2, 'functions'], // 禁止非必要的括号
        'no-fallthrough': 2, // 禁止switch穿透
        'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
        'no-func-assign': 2, // 禁止重复的函数声明
        'no-implied-eval': 2, // 禁止使用隐式eval
        'no-inner-declarations': [2, 'functions'], // 禁止在块语句中使用声明（变量或函数）
        'no-invalid-regexp': 2, // 禁止无效的正则表达式
        'no-irregular-whitespace': 2, // 不能有不规则的空格
        'no-iterator': 2, // 禁止使用__iterator__ 属性
        'no-label-var': 2, // label名不能与var声明的变量名相同
        'no-labels': [2, {
            allowLoop: false,
            allowSwitch: false
        }],
        'no-lone-blocks': 2, // 禁止标签声明
        'no-mixed-spaces-and-tabs': 2, // 禁止混用tab和空格
        'no-multi-spaces': 2, // 不能用多余的空格
        'no-multi-str': 2, // 字符串不能用\换行
        'no-multiple-empty-lines': [2, { // 空行最多不能超过2行
            max: 1
        }],
        'no-native-reassign': 2, // 不能重写native对象
        'no-negated-in-lhs': 2, // in 操作符的左边不能有!
        'no-new-object': 2, // 禁止使用new Object()
        'no-new-require': 2, // 禁止使用new require
        'no-new-symbol': 2, // 使用Symbol()而不能使用new
        'no-new-wrappers': 2,
        'no-obj-calls': 2, // 不能调用内置的全局对象，比如Math() JSON()
        'no-octal': 2, // 禁止使用八进制数字
        'no-octal-escape': 2, // 禁止使用八进制转义序列
        'no-path-concat': 2, // node中不能使用__dirname或__filename做路径拼接
        'no-proto': 2, // 禁止使用__proto__属性
        'no-redeclare': 2, // 禁止重复声明变量
        'no-regex-spaces': 2, // 禁止在正则表达式字面量中使用多个空格
        'no-return-assign': [2, 'except-parens'], // return 语句中不能有赋值表达式
        'no-self-assign': 2, // 不能自声明
        'no-self-compare': 2, // 不能自比较
        'no-sequences': 2, // 禁止使用逗号运算符
        'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-sparse-arrays': 2, // 禁止稀疏数组
        'no-this-before-super': 2, // 在调用super()之前不能使用this或super
        'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
        'no-trailing-spaces': 2, // 一行结束后面不要有空格
        'no-undef': 2, // 不能有未定义的变量
        'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
        'no-unexpected-multiline': 2, // 避免多行表达式
        'no-unmodified-loop-condition': 2, // 不使用未定义的循环条件
        'no-unneeded-ternary': [2, { // 禁止不必要的嵌套
            defaultAssignment: false
        }],
        'no-unreachable': 2, // 不能有无法执行的代码
        'no-unsafe-finally': 2, // finally中不能执行有歧义的代码
        'no-unused-vars': [2, { // 不声明未使用的变量
            vars: 'all',
            args: 'none'
        }],
        'no-useless-call': 2, // 禁止不必要的call和apply
        'no-useless-computed-key': 2, // 不声明无用的键
        'no-useless-constructor': 2,
        'no-useless-escape': 0,
        'no-whitespace-before-property': 2, // 对象键之前无空格
        'no-with': 2, // 禁用with
        'one-var': [2, { // 禁用连续声明
            initialized: 'never'
        }],
        'operator-linebreak': [2, 'after', { // 换行时运算符行首
            overrides: {
                '?': 'before',
                ':': 'before'
            }
        }],
        'padded-blocks': [2, 'never'], // 块语句内行首行尾不能空行
        quotes: [2, 'single', { // 使用单引号
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        semi: [2, 'never'], // 不使用语句强制分号结尾
        'semi-spacing': [2, { // 分号前后空格
            before: false, // 无
            after: true// 可以有
        }],
        'space-before-blocks': [2, 'always'], // 不以新行开始的块{前面需要有空格
        'space-before-function-paren': [2, 'never'], // 函数定义时括号前面需要有空格
        'space-in-parens': [2, 'never'], // 小括号里面不需要有空格，也可以有
        'space-infix-ops': 2, // 中缀操作符周围需要有空格
        'space-unary-ops': [2, { // 一元运算符的前/后要不要加空格
            words: true, // 适用于一元字运算符 new, delete, typeof, void, yield
            nonwords: false// 适用于一元字运算符 -, +, --, ++, !, !!
        }],
        'spaced-comment': [2, 'always', {
            markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'], // 模板中{}包裹的变量可以有空格也可以没有
        'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
        'valid-typeof': 2, // 必须使用合法的typeof的值
        'wrap-iife': [2, 'any'], // 立即执行函数表达式的小括号风格任意一种都可以
        'yield-star-spacing': [2, 'both'], // generate 函数 yeild风格
        yoda: [2, 'never'], // 禁止尤达条件
        'prefer-const': 2, // 优先使用const
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用debugger,开发环境允许使用
        'object-curly-spacing': [2, 'always', { // 是否允许非空数组里面有多余的空格
            objectsInObjects: false
        }],
        'array-bracket-spacing': [2, 'never']// 在数组括号内强制执行一致的间距
    }
}
