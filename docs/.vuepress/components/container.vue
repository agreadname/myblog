<template>
    <div class="dc-container">
        <el-card class="box-card">
        <div class="uishow">
            
            <slot></slot>
        </div>
    
     <p class="show-button" @click="show=!show">
         <i :class="iconClass"></i>
         <span class="dc-showtext">{{text}}</span> 
     </p>
       <div class="code">
        
           <el-collapse-transition>
              <slot name="codeText" v-if="show"></slot>
            
          </el-collapse-transition>
            <el-collapse-transition>
             <slot name="jstext" v-if="show"></slot>
            </el-collapse-transition>

       </div>
    </el-card>
      
    </div>
</template>
<script>
export default {
  data() {
    return {
      show:false,
      text:'显示代码',
      iconClass:"el-icon-caret-bottom",
    }
  },
  created(){
  },
  watch:{
      show(n,o){
          if(!n){
              this.text="显示代码"
              this.iconClass="el-icon-caret-bottom"
          }else{
              this.text="隐藏代码"
              this.iconClass="el-icon-caret-top"
          }
      }
  }
}
</script>
<style>
.dc-container{
    position: relative;
    /* box-sizing: border-box; */
    /* padding-bottom: 20px; */
    margin-bottom: 20px;
}
 .show-button{
     cursor: pointer;
     position: absolute;
     bottom: -50px;
     border:1px solid #eee;
     background: #fff;
     width: 100%;
     line-height: 40px;
     left: 0;
     text-align: center;
     color:#999;
 }
 .show-button:hover{
     transition: all .5s;
     background: #f9fafc;
     color:#FF5722;
 }
 .code{
     margin-top: 20px;
     max-height: 500px;
     overflow-y: auto;
 }
 .dc-showtext{
     position: absolute;
     width: 100%;
     left: 0px;
     /* display: inline-block; */
     color: #fff;
     transition: all .5s;
    transform:translate(100px,0);
 }
 .dc-showtext:hover{
  transform: translate(40px,0);
  color:#FF5722;
 }
</style>


