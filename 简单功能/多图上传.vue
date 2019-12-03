<template>
<!-- 图片上传 -->
  <div class="machfilebox">
    <el-upload
      :action="imgUrl"
      list-type="picture-card"
      :auto-upload="false"
      :on-change="OnChange"
      :before-remove="beforeRemove"
      :on-remove="OnRemove"
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" class="viewBox">
      <img :src="dialogImageUrl" alt="">
    </el-dialog>
    <!-- <el-button type="" @click="fun">点击查看filelist</el-button>
    <el-button type="" @click="onSubmit">提交</el-button> -->
  </div>
</template>

<script>
import url from "@/common/url.base";
  export default {
    name:'upfile',
    data() {
      return {
        imgUrl: url.url + "/common/attachmentUpload", //图片上传地址,
        param: new FormData(),
        form:{},
        count:0,
        // fileList:  [
        // {url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
        // {url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        fileList: [],
        dialogVisible:false,
        dialogImageUrl:''
      };
    },
    methods: {
      /* 注： 
        1.方法中获取到的fileList是当前所有的图片集合-包含了:file-list中的数据
        2.而 :file-list中的数据 在图片新增删除时不会改变；
      */
      handlePictureCardPreview(file) {//---放大钩子  能拿到图片返回值
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      OnRemove(file,fileList){
        // this.fileList=fileList
        // console.log(fileList,2)
        console.log(fileList,1)
        console.log(this.fileList,2)
        this.$emit('sendImgEven',fileList)
      },
      OnChange(file,fileList){
        // console.log(fileList,1)
        // this.fileList=fileList
        console.log(fileList,1)
        console.log(this.fileList,2)
        this.$emit('sendImgEven',fileList)
      }, 
      // fun(){
      //   console.log('------------------------')
      //   console.log(this.fileList)
      // },
      // onSubmit(){ 
      //   let file='' 
      //   for(let i=0;i<this.fileList.length;i++){
      //     file='file'+this.count
      //     this.count++
      //     this.param.append(file,this.fileList[i].raw)
      //   } 
      // }
    }
  }
</script>

<style lang="scss" scoped>
.viewBox{
  text-align: center;
}
</style>
<style>
.machfilebox .el-upload--picture-card {
    background-color: #FAFAFA;
    background: url("../../../../assets/img/upfileBg.png");
    border: 0;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 104px;
    height: 104px;
    line-height: 102px;
    vertical-align: top;
}
.machfilebox .el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 104px;
    height: 104px;
    margin: 0 8px 8px 0;
    display: inline-block;
}
</style>