<template>
	<div id="mapp">
		
		
	</div>
</template>

<script>
export default {
	name:'mapp',
    data() {
        return {
            longitude:0,//经度
            latitude:0,//纬度
            city:''
        }
    },
	mounted:function(){
		this.getMyLocation();
	},
  	methods:{
  		//定位获得当前位置信息
        getMyLocation() {
            var geolocation = new qq.maps.Geolocation("APZBZ-5RL3F-FMEJX-JLK4E-LGAQF-RDFRH", "self-hxh");
            geolocation.getIpLocation(this.showPosition, this.showErr);
        },
        showPosition(position) {
            console.log(position);
            this.latitude = position.lat;
            this.longitude = position.lng;
            this.city = position.city;
            this.init();
        },
        showErr() {
            console.log("定位失败");
            this.getMyLocation();//定位失败再请求定位，测试使用
        },
	    init:function () {
	      	var myLatlng = new qq.maps.LatLng(this.latitude,this.longitude);
	      	var myOptions = {
		        zoom: 12,
		        center: myLatlng,
		        mapTypeId: qq.maps.MapTypeId.ROADMAP
	      	}
	      	var map = new qq.maps.Map(document.getElementById("mapp"), myOptions);
	      	//添加监听事件
	      	qq.maps.event.addListener(map, 'click', function(event) {
	        	console.log('您点击的位置为: [' + event.latLng.getLat() + ', ' +
	          	event.latLng.getLng() + ']');
	      	});
	      	
	      	//给定位的位置添加图片标注
            var marker = new qq.maps.Marker({
                position: myLatlng,
                map: map
            });
            //给定位的位置添加文本标注
            var marker = new qq.maps.Label({
                position: myLatlng,
                map: map,
//              content:'当前的位置'
            });
	    },
	    	
  	}
}
</script>

<style scoped>
#mapp{height: 500px;}
</style>