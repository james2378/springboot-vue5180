<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px 0","flexWrap":"wrap","justifyContent":"space-around","display":"flex"}'>




	<!-- 系统简介 -->
	<div :style='{"padding":"30px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 auto 10px","background":"#fff","width":"calc(100% - 160px)","position":"relative","height":"auto"}'>
	  <div :style='{"width":"100%","margin":"0 0 150px","lineHeight":"1.5","fontSize":"40px","color":"#333","textAlign":"center"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"20px 150px","background":"#347BEF","justifyContent":"space-around","display":"flex","height":"auto"}'>
	    <img :style='{"width":"30%","margin":"0 10px","objectFit":"cover","display":"block","height":"300px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"width":"30%","margin":"0 10px","objectFit":"cover","display":"block","height":"300px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"width":"30%","margin":"0 10px","objectFit":"cover","display":"block","height":"300px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"0 200px","margin":"0 0 10px 0","overflow":"hidden","color":"#000","top":"100px","width":"100%","lineHeight":"2","fontSize":"16px","position":"absolute","height":"130px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"border":"2px solid #347BEF","padding":"20px 10px 40px","margin":"50px auto","background":"#fff","width":"40%","position":"relative","height":"auto"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"10px auto","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#000","fontSize":"28px"}'>公告信息</span>
	</div>
	
	
	
	
	
	
	<!-- 样式五 -->
	<div v-if="newsList.length" class="list list5 index-pv1" :style='{"padding":"10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-around","height":"auto"}'>
	  <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="list-item animation-box" :style='{"width":"94%","boxShadow":" 0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 0 20px","background":"#fff","height":"250px"}'>
	    <img :style='{"width":"50%","objectFit":"cover","float":"left","height":"100%"}' :src="baseUrl + newsList[0].picture" alt="">
	    <div :style='{"width":"50%","padding":"10px","overflow":"hidden","background":"#fff","display":"inline-block","height":"250px"}'>
	      <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"16px","overflow":"hidden","color":"#333","height":"32px"}' class="new5-one-info-title line1">{{newsList[0].title}}</div>
	      <div :style='{"padding":"0 10px","margin":"5px 0","overflow":"hidden","color":"#ADADAD","lineHeight":"30px","fontSize":"14px","height":"120px"}' class="new5-one-info-descript line3">{{newsList[0].introduction}}</div>
	      <div :style='{"padding":"10px","lineHeight":"32px","fontSize":"12px","color":"#ADADAD"}' class="new5-one-info-time">{{newsList[0].addtime}}</div>
	    </div>
	  </div>
	  <div :style='{"width":"100%","flexWrap":"wrap","background":"#fff","justifyContent":"center","display":"flex","height":"275px"}' class="list-body">
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new5-item animation-box" :style='{"width":"30%","padding":"10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","position":"relative","background":"#FFFFFF","height":"280px"}'>
	      <div :style='{"padding":"10px","color":"#fff","textAlign":"center","background":"#347BEF","display":"inline-block","width":"100%","lineHeight":"32px","fontSize":"12px"}' class="new5-item-time">{{newsList[1].addtime.split(" ")[0]}}1</div>
	      <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"16px","overflow":"hidden","color":"#333","height":"64px"}' class="new5-item-title line1">{{newsList[1].title}}</div>
	      <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"14px","overflow":"hidden","color":"#666","height":"96px"}' class="new5-item-descript line3">{{newsList[1].introduction}}</div>
	    </div>
		<div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new5-item animation-box" :style='{"padding":"10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 10px","background":"#FFFFFF","width":"30%","position":"relative","height":"280px"}'>
		  <div :style='{"padding":"10px","color":"#fff","textAlign":"center","background":"#347BEF","display":"inline-block","width":"100%","lineHeight":"32px","fontSize":"12px"}' class="new5-item-time">{{newsList[2].addtime.split(" ")[0]}}</div>
		  <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"16px","overflow":"hidden","color":"#333","height":"64px"}' class="new5-item-title line1">{{newsList[2].title}}</div>
		  <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"14px","overflow":"hidden","color":"#666","height":"96px"}' class="new5-item-descript line3">{{newsList[2].introduction}}</div>
		</div>
		<div @click="toDetail('newsDetail', newsList[3])" v-if="newsList.length>3" class="new5-item animation-box" :style='{"width":"30%","padding":"10px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","position":"relative","background":"#FFFFFF","height":"280px"}'>
		  <div :style='{"padding":"10px","color":"#fff","textAlign":"center","background":"#347BEF","display":"inline-block","width":"100%","lineHeight":"32px","fontSize":"12px"}' class="new5-item-time">{{newsList[3].addtime.split(" ")[0]}}</div>
		  <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"16px","overflow":"hidden","color":"#333","height":"64px"}' class="new5-item-title line1">{{newsList[3].title}}</div>
		  <div :style='{"padding":"0 10px","lineHeight":"32px","fontSize":"14px","overflow":"hidden","color":"#666","height":"96px"}' class="new5-item-descript line3">{{newsList[3].introduction}}</div>
		</div>
	  </div>
	</div>
	
	
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","margin":"10px auto","transform":"translateX(-50%)","textAlign":"center","left":"50%","background":"#347BEF","bottom":"-10px","display":"block","width":"200px","lineHeight":"32px","position":"absolute"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>


<div class="lists" :style='{"border":"2px solid #347BEF","padding":"20px 10px 50px","margin":"50px auto","background":"#fff","width":"40%","position":"relative","height":"auto"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"10px auto","lineHeight":"54px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"28px"}'>课程信息展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-around","height":"auto"}'>
		<div :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","padding":"20px 0 0 0","margin":"10px 0","background":"#ffff","display":"flex","width":"45%","fontSize":"0","position":"relative","height":"250px"}' v-for="(item,index) in kechengxinxiList" class="list-item animation-box" :key="index" @click="toDetail('kechengxinxiDetail', item)">
			<img :style='{"width":"50%","margin":"50px 0 0 0","objectFit":"cover","display":"inline-block","height":"180px"}' v-if="item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"50%","margin":"50px 0 0 0","objectFit":"cover","display":"inline-block","height":"180px"}' v-else :src="baseUrl +  (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div :style='{"padding":"10px","overflow":"hidden","flex":"1","display":"inline-block","height":"250px"}' class="item-info">
				<div class="name line1" :style='{"lineHeight":"30px","fontSize":"14px","overflow":"hidden","color":"#000000","height":"30px"}'>{{item.kechengmingcheng}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('kechengxinxi')" :style='{"border":"0","margin":"10px auto","transform":"translateX(-50%)","textAlign":"center","left":"50%","background":"#347bef","bottom":"-10px","display":"block","width":"200px","lineHeight":"32px","position":"absolute"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        newsList: [],

        kechengxinxiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 6,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
			
			this.$http.get('kechengxinxi/list', {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kechengxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(0.95) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform:  skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform:  skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
