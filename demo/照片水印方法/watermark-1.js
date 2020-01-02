// 方式二
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

/* 
    canvasImg
    参数：
        opts -->水印盒子配置，不传则使用默认
        isOpen-->是否有水印
        isAlone-->是否平铺水印 
 */
function canvasImg(src,opts,isOpen = false,isAlone = true){     
    let canvas=document.getElementById("myCanvas");
    let img = new Image(); //准备img对象   
        if(!src){
            throw new Error('请传入照片')
            return
        } 
        img.src = src;  
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
                    hz.call(textWaterMark,ctx,{width,height})
                } 
            } 
        } 
        return canvas.toDataURL("image/png")
} 

function hz(ctx,locate){   
    ctx.font=this.options.fontStyle 
    // let grd=ctx.createRadialGradient(75,50,5,90,60,100);
    //     grd.addColorStop(0,"red");
    //     grd.addColorStop(1,"white"); 
    ctx.fillStyle = this.options.textColor;
    ctx.rotate(this.options.rotateAngle);//1.旋转坐标系
    ctx.fillText(this.options.content, locate.height/2,locate.width/2);//在旋转的坐标系上设置文字与坐标 
    ctx.rotate(this.options.rotateAngle);//还原坐标系 
}



let imgBase64 = canvasImg('http://img3.imgtn.bdimg.com/it/u=1972835011,816397856&fm=26&gp=0.jpg') 
console.log('base64',imgBase64)

