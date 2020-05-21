/** 
 * @前提 需要对vue-router 嵌套路由及动态规则熟悉
 * @description 根据nuxt动态路由,追加对应的配置 
 * @author zc2513 
 * @export {}
 * @rule 根据nuxt/router中name的值，添加追加项 
 */

/** 
 * @param sole  
 * @description 排序参数
 * @rule 每一级路由中间用0隔开 
 * @suchAs 父子路由嵌套
 *      1. 1->101>10101>1010101    第一位排序为一
 *      2. 11>1101>110101>11010101 第一位排序为十一
 *      3. 2>2011>201101>20110101  第一位排序为二第二位排序为十一   
 * 具体例子看document.js
 */

/** 
 * @param meta  
 * @description 当前项描述项 
 */

export default
{
    "one":{ 
        "hidden":true,
        "sole":1,
        "meta"  :{"title":"one"}
    },
    "one-info":{ 
        "hidden":true,
        "sole":101,
        "meta"  :{"title":"one详情"}
    },
    "one-pa":{ 
        "hidden":true,
        "sole":102,
        "meta"  :{"title":"动态pa路由"}
    },


    "pro":{ 
        "meta"  :{"title":"招投标广场"},
        "sole": 2
    },
    "pro-info":{ 
        "meta"  :{"title":"pro详情"},
        "sole": 201
    },
    "pro-id":{ 
        "meta"  :{"title":"动态ID页面"},
        "sole": 202
    }, 


    "route":{ 
        "meta" :{"title":"route首页"},
        "sole":3
    },
    "route-info":{ 
        "meta" :{"title":"详情页"},
        "sole":301
    },
    "route-news":{ 
        "meta"  :{"title":"新闻页"},
        "sole":302
    },
    "route-news-info":{ 
        "meta"  :{"title":"新闻详情页"},
        "sole":30201
    },
    "route-id":{ 
        "meta"  :{"title":"动态id页"},
        "sole":303
    },
    "route-num":{ 
        "meta"  :{"title":"动态num页"},
        "hidden":true,
        "sole":304
    },
    "route-type":{ 
        "meta"  :{"title":"动态type页"},
        "hidden":true,
        "sole":305
    },
    "route-type-info":{ 
        "meta"  :{"title":"动态type详情页"},
        "hidden":true,
        "sole":306
    },


    "three":{ 
        "meta" :{"title":"three首页"},
        "sole":4,
        "hidden":true
    },
    "three-type":{ 
        "meta" :{"title":"type默认首页"},
        "sole":401,
        "hidden":true
    },
    "three-type-info":{ 
        "meta" :{"title":"type详情页"},
        "sole":40101,
        "hidden":true
    },
    "three-type-id":{ 
        "meta" :{"title":"type动态图id页"},
        "sole":40102,
        "hidden":true
    },




    "two":{ 
        "meta" :{"title":"two首页布局"},
        "sole":5,
        "hidden":true
    },
    "two-type":{ 
        "meta" :{"title":"动态type路由首页"},
        "sole":501,
        "hidden":true
    },
    "two-type-info":{ 
        "meta" :{"title":"动态type详情页"},
        "sole":50101,
        "hidden":true
    },
    "two-type-id":{ 
        "meta" :{"title":"动态type动态ID页"},
        "sole":50102,
        "hidden":true
    },
    "two-news":{ 
        "meta" :{"title":"two新闻"},
        "sole":502,
        "hidden":true
    },
    


    
     
    "index":{
        "sole":6, 
        "meta"  :{"title":"首页"}
    }, 
    "notFind":{ 
        "meta" :{"title":"404"},
        "sole":7, 
        "hidden":true
    } 
}