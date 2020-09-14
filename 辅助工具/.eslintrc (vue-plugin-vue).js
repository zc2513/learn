//更详细的配置文档请参考：https://github.com/vuejs/eslint-plugin-vue#gear-configs
module.exports = {
    "extends": "plugin:vue/base",
    parserOptions: { 
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    "rules":{
        //在computed properties中禁用异步actions
        'vue/no-async-in-computed-properties': 'error',
        //不允许重复的keys
        'vue/no-dupe-keys': 'error',
        //不允许重复的attributes
        'vue/no-duplicate-attributes': 'warn',
        //在 <template> 标签下不允许解析错误
        'vue/no-parsing-error': ['error',{
            'x-invalid-end-tag': false,
        }],
        //不允许覆盖保留关键字
        'vue/no-reserved-keys': 'error',
        //强制data必须是一个带返回值的函数
        // 'vue/no-shared-component-data': 'error',
        //不允许在computed properties中出现副作用。
        'vue/no-side-effects-in-computed-properties': 'error',
        //<template>不允许key属性
        'vue/no-template-key': 'warn',
        //在 <textarea> 中不允许mustaches
        'vue/no-textarea-mustache': 'error',
        //不允许在v-for或者范围内的属性出现未使用的变量定义
        'vue/no-unused-vars': 'warn',
        //<component>标签需要v-bind:is属性
        'vue/require-component-is': 'error',
        // render 函数必须有一个返回值
        'vue/require-render-return': 'error',
        //保证 v-bind:key 和 v-for 指令成对出现
        'vue/require-v-for-key': 'error',
        // 检查默认的prop值是否有效
        'vue/require-valid-default-prop': 'error',
        // 保证computed属性中有return语句 
        'vue/return-in-computed-property': 'error',
        // 强制校验 template 根节点
        'vue/valid-template-root': 'error',
        // 强制校验 v-bind 指令
        'vue/valid-v-bind': 'error',
        // 强制校验 v-cloak 指令
        'vue/valid-v-cloak': 'error',
        // 强制校验 v-else-if 指令
        'vue/valid-v-else-if': 'error',
        // 强制校验 v-else 指令 
        'vue/valid-v-else': 'error',
        // 强制校验 v-for 指令
        'vue/valid-v-for': 'error',
        // 强制校验 v-html 指令
        'vue/valid-v-html': 'error',
        // 强制校验 v-if 指令
        'vue/valid-v-if': 'error',
        // 强制校验 v-model 指令
        'vue/valid-v-model': 'error',
        // 强制校验 v-on 指令
        'vue/valid-v-on': 'error',
        // 强制校验 v-once 指令
        'vue/valid-v-once': 'error',
        // 强制校验 v-pre 指令
        'vue/valid-v-pre': 'error',
        // 强制校验 v-show 指令
        'vue/valid-v-show': 'error',
        // 强制校验 v-text 指令
        'vue/valid-v-text': 'error', 
		// 强制使用单引号
		"quotes": ["error", "single"],
		// 禁止多个空格 
		"no-multi-spaces": "error",
		// 不能有未定义的变量
		"no-undef": 1,        
	    //命名检测
	    "id-match": 0,
		//强制驼峰法命名
		"camelcase": 2,      
		//缩进风格
		"indent": [2, 4],
		"semi": [2, "never"],
		 'vue/max-attributes-per-line': [2, {
			 singleline: 10, // 单行时每行最大属性数
			 multiline: {
				 max: 1, // 多行时每行最大属性数
				 allowFirstLine: false // 多行时是否允许标签在同一行
			 }
		 }],
		'vue/singleline-html-element-content-newline': 'off', // 该规则强制在单行元素的内容之前和之后使用换行符
		'vue/no-use-v-if-with-v-for': ['error', { // v-for的指令上是否允许存在v-if 默认是false
			 allowUsingIterationVar: true
		 }],
		'vue/singleline-html-element-content-newline': 'off', // 该规则强制在单行元素的内容之前和之后使用换行符
		'vue/multiline-html-element-content-newline': 'off', // 该规则强制在多行元素的内容之前和之后使用换行符
		'vue/name-property-casing': ['error', 'PascalCase'], // PascalCase将name属性强制执行到Pascal大小写
		'vue/no-v-html': 'off', // 不允许使用v-html来防止跨站攻击
		"vue/html-indent": ["error", 2, {//强制在<template>中使用一致的缩进样式。默认样式是2个空格。
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/html-self-closing": ["error", { //自闭的风格
			"html": {//never->不允许自闭  any->不要强迫自己封闭。 always->对于没有内容的元素需要自关闭
			  "void": "never",
			  "normal": "any",
			  "component": "any"
			},
			"svg": "any",
			"math": "any"
		}],
		"vue/mustache-interpolation-spacing": ["error", "always"],// 表达式和花括号直间的统一间距。 always->需要一个空格。 never->不要有空格。
		"vue/no-spaces-around-equal-signs-in-attribute": ["error"], //不允许在属性的等号周围有空格。
		"vue/attributes-order": ["error", {//强制属性的顺序
		    "order": [
		      "DEFINITION", //v-is
		      "LIST_RENDERING", //v-for
		      "CONDITIONALS", //v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
		      "RENDER_MODIFIERS",//'v-once', 'v-pre'
		      "GLOBAL", //'id'
		      "UNIQUE", //'ref', 'key', 'v-slot', 'slot'
		      "TWO_WAY_BINDING",//v-model
		      "OTHER_DIRECTIVES",//v-custom-directive
		      "OTHER_ATTR", //'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
		      "EVENTS", //@ v-on
		      "CONTENT" //'v-text', 'v-html'
		    ],
		    "alphabetical": false //按照字母排序
		}]
    }
};