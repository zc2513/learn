// 方式三
/* 
@opts 
    width           水印盒子宽度
    height          水印盒子高
    fontStyle       水印字体设置
    content         填充内容
    rotateAngle     水印字体倾斜角度设置
    textColor       水印字体颜色设置
    textX           canvas文字起始X坐标
    textY           canvas文字起始Y坐标
*/
(function(){
    function createWaterMark(opts = {}){//创建水印    
        this.options = {
            width:   opts.width || 100,  //水印盒子宽度    
            height:  opts.height || 80,  //水印盒子高
            fontStyle: opts.fontStyle || "20px 黑体",        //水印字体设置
            content:opts.content || '测试水印',  //填充内容
            rotateAngle: opts.rotateAngle || -20 * Math.PI / 180, //水印字体倾斜角度设置
            textColor:  opts.fontColor || "rgba(0, 0, 0, 0.3)", //水印字体颜色设置
            textX: opts.firstLineTextX || -20, //canvas文字起始X坐标
            textY: opts.firstLineTextY || 70, //Y 
        };   
        this.waterMarkDom = this.creatInit
    }
    createWaterMark.prototype = {   
        creatInit:function(){//创建水印canvas元素 
            let waterMark = document.createElement('canvas')
                waterMark.width = this.options.width
                waterMark.height= this.options.height  
                this.draw(waterMark) 
            return waterMark    
        },
        draw:function(e){//绘制单一水印 
            let ctx 
                ctx = e.getContext("2d");   //返回一个用于在画布上绘图的环境
                ctx.clearRect(0,0,this.options.width,this.options.height);  //绘制之前画布清除 
                ctx.font = this.options.fontStyle;  
                ctx.rotate(this.options.rotateAngle); 
                ctx.fillStyle = this.options.textColor;
                ctx.fillText(this.options.content, this.options.textX, this.options.textY);
                ctx.rotate(this.options.rotateAngle);  //坐标系还原
        },  
    }
     
    
    function imgCanvas(src){ 
        if(!src){
            alert('请传入图片地址')
            return
        }else{
            this.src = src  
        }
    } 
    imgCanvas.prototype={  
        getCanvas(id){//获取dom
            if(id){
                return document.getElementById(id)
            }else{
                return canvas = document.createElement('canvas')
            }
        },
        /*  opts:水印配置文件
            isopen：0/1/2 
                0：关闭水印，只生成canvas照片
                1：打开水印，只生成单个水印照片
                2：打开水印，生成多个水印照片
         */
        img(opts={}){
            let isopen= opts.isopen || 1
            let self = this
            let canvas = this.getCanvas(opts.id)
            let img = new Image()//准备img对象
                img.src = this.src
                img.setAttribute("crossOrigin",'Anonymous')//解决污染无法toDataURL问题
            return new Promise(resolve=>{
                img.onload = function(e){
                    let { width,height } = e.path[0] 
                        canvas.width = width
                        canvas.height= height
                    let ctx = canvas.getContext('2d')
                        ctx.drawImage(img,0,0);
                    let textWaterMark = new createWaterMark(opts)
                        if(isopen==1){
                            self.sole.call(textWaterMark,{width,height,ctx})
                        }else if(isopen==2){
                            self.more({textWaterMark,width,height,ctx})
                        }
                    resolve({
                        dom:canvas,
                        base64:self.toBase64Img(canvas)
                    })
                }   
            }) 
        },
        more({textWaterMark,width,height,ctx}){ //多水印
            let pat = ctx.createPattern(textWaterMark.waterMarkDom(), "repeat");    //在指定的方向上重复指定的元素  
                ctx.fillStyle = pat; 
                ctx.fillRect(0, 0,width,height);
        },
        sole({width,height,ctx}){//单水印
            ctx.font=this.options.fontStyle  
            ctx.fillStyle = this.options.textColor;
            ctx.rotate(this.options.rotateAngle);//1.旋转坐标系
            ctx.fillText(this.options.content, height/2,width/2);//在旋转的坐标系上设置文字与坐标 
            ctx.rotate(this.options.rotateAngle);//还原坐标系 
        },
        toBase64Img(e){
          return e.toDataURL("image/png")
        }
    }     
    
    new imgCanvas('https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3846107382,3836707459&fm=26&gp=0.jpg').img({
        id:'myCanvas',
        isopen:2
    }).then(res=>{ 
        console.log(res)
        // document.body.appendChild(res.dom)
        // document.querySelector('.box').innerHTML = res.dom
    })  
})()

 
