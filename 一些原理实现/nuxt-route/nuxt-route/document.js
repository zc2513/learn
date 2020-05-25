
/**
 * @meta配置规则  只配置nuxt/router 中存在name的追加属性
 * @描述    两种情况
 * @情况一  当前home.vue home文件夹存在index页面
 * @情况二  当前home.vue home文件夹不存在index页面
 * @注意    情况一：nuxt/router中不会生成成name属性
 *          情况二：nuxt/router则生成与之对应的name属性
 * @排序    情况一：对于未生成name属性，会将children的第0项sloe与meta拿出作为外层的配置
 *          情况二：对于未生成name属性的则会保留
*/ 


/**
 * @例子一 针对one.vue  one文件夹中存在index页面
 * {
        "path": "/one",
        "children": [
            {
                "path": "",
                "name": "one"       -->sloe = 1  
            },
            {
                "path": "info",
                "name": "one-info"  -->sloe = 101
            },
            {
                "path": ":pa",
                "name": "one-pa"    -->sloe = 102 
            }
        ]
    }
    生成为以下结果：
    {
        "path": "/one",
        "sloe" : 1,
        "children": [
            {
                "path": "",
                "name": "one",       
                "sloe" : 1,
            },
            {
                "path": "info",
                "name": "one-info",
                "sloe" : 101
            },
            {
                "path": ":pa",
                "name": "one-pa",
                "sloe" : 102
            }
        ]
    }
*/



/**
 * @例子二 针对two.vue  two文件夹中不存在index页面
 * {
        "path": "/two",
        "name": "two",  -->sloe = 5                              
        "children": [
            {
                "path": ":type?",
                "children": [
                    {
                        "path": "",
                        "name": "two-type" --> sloe=501  
                    },
                    {
                        "path": "info",
                        "name": "two-type-info" -->sloe=50101  
                    },
                    {
                        "path": ":id",
                        "name": "two-type-id"   -->sloe=50102  
                    }
                ]
            },
            {
                "path": "news",
                "name": "two-news"  --> sloe=502  
            }
        ]
    }
    生成为以下结果：
    {
        "path": "/two",
        "name": "two",
        "sloe" :5,                          
        "children": [
            {
                "path": ":type?",
                "sloe" :501,
                "children": [
                    {
                        "path": "",
                        "name": "two-type",
                        "sloe" :501
                    },
                    {
                        "path": "info",
                        "name": "two-type-info",
                        "sloe" :50101
                    },
                    {
                        "path": ":id",
                        "name": "two-type-id",
                        "sloe" :50102
                    }
                ]
            },
            {
                "path": "news",
                "name": "two-news",
                "sloe" :502
            }
        ]
    }

*/