<template>
  <div id="app">
    <div class="appcontent">
      <router-view></router-view>
    </div>
    
    <foot v-model='isShow'>
      <a @click='isShow=!isShow'>
        <i class='iconfont icon-fabu1'></i>
        <span>发布</span>
      </a>
    </foot>
    <div v-if='isShow' class="new"> 
      <div class="bg">
        
      </div>
      
      <div class="fabu">
        <span @click='isShow=!isShow'>X</span>
        <div class="content-a"  @click='isShow=!isShow'>
          <router-link to='/newWork' tag='a'>
            <img src="src/assets/load.png" alt="">
            画作
          </router-link>
        </div>
         <div class="content-a"  @click='isShow=!isShow'>
            <router-link to='/newProject' tag='a'>
              <img src="src/assets/artist.png" alt="">
              约稿
            </router-link> 
         </div>
      
      </div>       
    </div>
    </div>
  </div>
</template>

<script>
import foot from '@/components/common/footer';
document.documentElement.style.fontSize=document.documentElement.clientWidth/750*100+'px'
export default {
  data(){
    return {
      isShow:false
    }
  },
  components:{
    foot
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}
body{
  font-size: 16px;
  background-color: #ededf1;
 
}
.appcontent{
  padding-bottom: 60px
}

body, h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica,Tahoma,Arial
}

.new{
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
}
.bg{
   width: 100%;
    height: 100%;
    background: #000;
   opacity: 0.5
}
.fabu{
    position: absolute;
    left:50%;
    top:50%;
    transform: translateX(-50%) translateY(-50%); 
    height: 3.5rem;
    width: 7rem;
    background: #fff;
    padding: 10px 0;
    display:flex;
  }
  .new span{
    position: absolute;
    right: 5px;
    top:5px;
    display: block;
    height: 20px;
    width: 20px;
    text-align: center;
    background: #ccc;
    border-radius:50%;
    line-height: 20px;
    opacity: 0.5;
    font-size: 10px;
    color: #000
  }
  .new .content-a{ 
    width: 50%;   
    vertical-align: middle;  
    text-decoration: none;
    height: 2rem;
   margin-top: 1rem;
  }
 .new a{
   
    display: block;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction:column;
    height: 2rem;
   
    color: #444;
    font-size: 14px;
    text-decoration: none;
  }
  .new img{
    width: 60px;
    margin:0 auto;

  }
</style>
