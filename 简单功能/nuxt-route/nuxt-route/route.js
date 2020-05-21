 
/**
 * @nuxt nuxt动态路由 routes文件简化版
 * @description 为nuxt动态路由追加规则与描述
 * @author zc2513 
 * @export [] 
 */
export default 
[
    {
        "path": "/one",
        "children": [
            {
                "path": "",
                "name": "one"
            },
            {
                "path": "info",
                "name": "one-info"
            },
            {
                "path": ":pa",
                "name": "one-pa"
            }
        ]
    },
    {
        "path": "/pro",
        "children": [
            {
                "path": "",
                "name": "pro"
            },
            {
                "path": "info",
                "name": "pro-info"
            },
            {
                "path": ":id",
                "children": [
                    {
                        "path": "",
                        "name": "pro-id"
                    }
                ]
            }
        ]
    },
    {
        "path": "/route",
        "children": [
            {
                "path": "",
                "name": "route"
            },
            {
                "path": "info",
                "name": "route-info"
            },
            {
                "path": "news",
                "name": "route-news",
                "children": [
                    {
                        "path": ":info?",
                        "name": "route-news-info"
                    }
                ]
            },
            {
                "path": ":id",
                "name": "route-id"
            },
            {
                "path": ":num",
                "name": "route-num"
            },
            {
                "path": ":type",
                "name": "route-type"
            },
            {
                "path": ":type/info",
                "name": "route-type-info"
            }
        ]
    },
    {
        "path": "/three",
        "children": [
            {
                "path": "",
                "name": "three"
            },
            {
                "path": ":type",
                "children": [
                    {
                        "path": "",
                        "name": "three-type"
                    },
                    {
                        "path": "info",
                        "name": "three-type-info"
                    },
                    {
                        "path": ":id",
                        "name": "three-type-id"
                    }
                ]
            }
        ]
    },
    {
        "path": "/two",
        "name": "two",
        "children": [
            {
                "path": ":type?",
                "children": [
                    {
                        "path": "",
                        "name": "two-type"
                    },
                    {
                        "path": "info",
                        "name": "two-type-info"
                    },
                    {
                        "path": ":id",
                        "name": "two-type-id"
                    }
                ]
            },
            {
                "path": "news",
                "name": "two-news" 
            }
        ]
    },
    {
        "path": "/",
        "name": "index"
    },
    {
        "path": "*",
        "name": "notFind"
    }
]