<template>
  <div style="padding:30px;">
    <el-row>

      <el-col :span="14">
        <div class="map">
          <div id="mapDiv" />
        </div>
      </el-col>
      <el-col :span="10">
        <el-form ref="form" style="width:460px" :model="markerForm" label-width="80px">
          <el-form-item label="标记经度:">
            <el-input v-model="markerForm.Lng" />
          </el-form-item>
          <el-form-item label="标记经度:">
            <el-input v-model="markerForm.Lat" />
          </el-form-item>
          <el-form-item label="标记图标:">
            <el-input v-model="markerForm.iconUrl" />
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>

  </div>
</template>

<script>
const T = require('T')
export default {
  data() {
    return {
      // 存储地图对象
      map: null,
      // 存储地图放缩比例
      zoom: 12,
      // 经纬度
      Lng: 116.40769,
      Lat: 39.89945,
      markerForm: {
        Lng: 116.40769,
        Lat: 39.89945,
        // 标记图片
        iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png'
      },
      // 标记点的属性值
      markerOptions: {
        // Lng: 116.40769,
        // Lat: 39.89945,
        // 标记图片
        // iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png'
      }

    }
  },
  mounted() {
    this.initMap()
    this.addMarker()
  },
  methods: {
    // 初始化地图组件
    initMap() {
      this.map = new T.Map('mapDiv')
      this.map.centerAndZoom(new T.LngLat(this.Lng, this.Lat), this.zoom)
    },
    // 设置标记属性
    setMarkerOptions() {
      if (this.markerForm.iconUrl) {
        this.markerOptions.icon = new T.Icon({
          iconUrl: this.markerForm.iconUrl,
          iconSize: new T.Point(19, 27),
          iconAnchor: new T.Point(10, 25)
        })
        // delete this.markerOptions.iconUrl
      } else {
        // delete this.markerOptions.iconUrl
      }
    },
    // 添加标记
    addMarker() {
      this.setMarkerOptions()
      // 向地图上添加自定义标注
      var marker = new T.Marker(new T.LngLat(this.markerForm.Lng, this.markerForm.Lat), this.markerOptions)
      this.map.addOverLay(marker)
    }

  }
}
</script>

<style  scoped>
#mapDiv{
  position:absolute;
  width:800px;
  height:600px;
}
.map{
    width:800px;
  height:600px;
}
</style>
