// 方式一
/* 
    createWaterMark
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
(()=>{
    console.log(this)
    function createWaterMark(opts = {}){//创建水印    
        this.options = {
            width:   opts.width || 100,  
            height:  opts.height || 80,  
            fontStyle: opts.fontStyle || "20px 黑体",        
            content:opts.content || '测试水印',  
            rotateAngle: opts.rotateAngle || -20 * Math.PI / 180, 
            textColor:  opts.fontColor || "rgba(0, 0, 0, 0.2)", 
            textX: opts.firstLineTextX || -20, 
            textY: opts.firstLineTextY || 70, 
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
        draw:function(e,setOptions){//绘制单一水印
        /* setOptions:设置为单一水印并,并设置位置 */ 
            let ctx
            if(!setOptions){
                ctx = e.getContext("2d");   //返回一个用于在画布上绘图的环境
                ctx.clearRect(0,0,this.options.width,this.options.height);  //绘制之前画布清除
            }else{
                ctx = setOptions.ctx
            } 
                ctx.font = this.options.fontStyle;  
                ctx.rotate(this.options.rotateAngle); 
                ctx.fillStyle = this.options.textColor;
                ctx.fillText(this.options.content, this.options.textX, this.options.textY);
                ctx.rotate(this.options.rotateAngle);  //坐标系还原
        }
    }
    
    /* 
        canvasImg
        参数：
            params:{    //---必传参数
                ID:'', //
                src:'' //照片路径
            }
            opts -->水印盒子配置，不传则使用默认
            isOpen-->是否有水印
            isAlone-->是否平铺水印 
     */
    function canvasImg(params,opts,isOpen = true,isAlone = true){     
        let canvas=document.getElementById(params.ID); 
            if(!params.src){
                throw new Error('请传入照片')
                return
            } 
        let img = new Image(); //准备img对象 
            img.src = params.src;  
            img.setAttribute("crossOrigin",'Anonymous')
            img.onload=function(e){// 加载完成准备canvas环境并开始绘制 
                let { width,height } = e.path[0]  
                    canvas.width = width
                    canvas.height = height 
                let ctx=canvas.getContext("2d");  
                    ctx.drawImage(img,0,0);  
                if(isOpen){
                    let textWaterMark = new createWaterMark(opts) 
                    if(isAlone){//平铺水印
                        let pat = ctx.createPattern(textWaterMark.waterMarkDom(), "repeat");    //在指定的方向上重复指定的元素  
                            ctx.fillStyle = pat; 
                            ctx.fillRect(0, 0,width,height); 
                    }else{//单水印  
                        textWaterMark.draw(null,{ctx,width,height})  
                    } 
                }
            } 
            return canvas.toDataURL("image/png")
    } 
    let imgBase64 = canvasImg({
        ID:"myCanvas",
        src:'http://img3.imgtn.bdimg.com/it/u=1972835011,816397856&fm=26&gp=0.jpg'})  
    
    console.log('imgBase64',imgBase64)
})()

/* 
    实现：
        1.创建单一水印，并隐藏
        2.将单一水印在指定的元素上平铺 
*/