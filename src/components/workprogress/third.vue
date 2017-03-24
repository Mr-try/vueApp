<template>
  <div>
    <div id="allmap" style="width: 100%;height: 100%"></div>

    <transition name="bounce2">
      <div v-if="!rankDetail" class="rank-marker">
        <div class="rank-marker1 " @click="getRank(1)">拆迁<br>排名</div>
        <div class="rank-marker2 " @click="getRank(2)">交地<br>排名</div>
        <div class="rank-marker3 " @click="getRank(3)">征迁<br>排名</div>
      </div>
    </transition>
    <transition name="bounce">
      <article id="rankDetail" v-if="rankDetail" class="rankDetail">
        <el-tabs v-model="activeName">
          <el-tab-pane label="完成量排名" name="first">
            <ul v-if="rankType ==1">
              <li v-for="item in rankListTotal">
                <span class="icon-flag"></span> {{ item.town }}{{ item.ljcq }}
              </li>
            </ul>
            <ul v-if="rankType ==2">
              <li v-for="item in rankListTotal">
                <span class="icon-flag"></span>{{ item.town }}{{ item.ljjd }}
              </li>
            </ul>
            <ul v-if="rankType ==3">
              <li v-for="item in rankListTotal">
                <span class="icon-flag"></span>{{ item.town }}{{ item.ljzq }}
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="完成率排名" name="second">
            <ul v-if="rankType ==1">
              <li v-for="item in rankListPercent">
                <span class="icon-flag"></span>{{ item.town }}{{ item.cqpercent }}
              </li>
            </ul>
            <ul v-if="rankType ==2">
              <li v-for="item in rankListPercent">
                <span class="icon-flag"></span>{{ item.town }}{{ item.jdpercent }}
              </li>
            </ul>
            <ul v-if="rankType ==3">
              <li v-for="item in rankListPercent">
                <span class="icon-flag"></span>{{ item.town }}{{ item.zqpercent }}
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
        <i class="icon-arrow-right2"
           style="z-index:99;position: absolute;top: 15px;right: 15px;width: 10px;height: 10px;cursor: pointer"
           @click="isShowDetail">
        </i>
      </article>
    </transition>
  </div>
</template>

<style scoped>
  li {
    text-align: left;
    list-style-type: none;
  }

  .bounce-enter-active {
    animation: bounce-in .8s;
  }

  .bounce-leave-active {
    animation: bounce-out .5s;
  }

  .bounce2-enter-active {
    animation: zoom-in .5s;
  }

  .bounce2-leave-active {
    animation: zoom-out .5s;
  }

  @keyframes bounce-in {
    from {
      right: -250px;
    }
    to {
      right: 0px;
    }
  }

  @keyframes bounce-out {
    from {
      right: 0px;
    }
    to {
      right: -250px;
    }
  }

  @keyframes zoom-in {
    from {
      right: -50px;
    }
    to {
      right: 0;
    }
  }

  @keyframes zoom-out {
    from {
      right: 0;
    }
    to {
      right: -50px;
    }
  }

  .rank-marker {
    position: absolute;
    width: 50px;
    cursor: pointer;
    top: 120px;
    right: 0;
    opacity: 1;
    background-color: transparent;
  }

  .rank-marker1, .rank-marker2, .rank-marker3 {
    background-color: #fff;
    margin-bottom: 10px;
    height: 45px;
  }

  .rankDetail {
    position: absolute;
    top: 60px;
    right: 0;
    opacity: 0.7;
    background-color: #fff;
    width: 250px;
    z-index: 99;
    min-height: 450px;
  }
</style>

<script>
  export default {
    data() {
      return {
        rankType: '',
        rankDetail: false,
        activeName: 'first',
        rankData: {},
        rankListTotal: [],
        rankListPercent: [],
      };
    },
    methods: {
      isShowDetail: function () {
        this.rankDetail = false
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getRank(type){
        this.rankType = type;
        console.log(this.rankData)
        this.rankDetail = true;
        if (type == 1) {
          this.rankListTotal = this.rankData.zcq;
          this.rankListPercent = this.rankData.cqpercent
        }
        else if (type == 2) {
          this.rankListTotal = this.rankData.zjd;
          this.rankListPercent = this.rankData.jdpercent
        }
        else {
          this.rankListTotal = this.rankData.zzq;
          this.rankListPercent = this.rankData.zqpercent
        }
      }
    },
    mounted: function () {
      /*
       创建map实例并设置最大最小缩放级别
       */
      var map = new BMap.Map("allmap", {mapType: BMAP_HYBRID_MAP, minZoom: 6, maxZoom: 18});

      /* 初始化地图,设置中心点坐标和地图级别 */
      map.centerAndZoom(new BMap.Point(119.302938, 26.080447), 11);

      /* 设置地图显示的城市 此项是必须设置的 */
      map.setCurrentCity("福州");

      /* 显示左上角地图模式控件 */
      var mapType = new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        anchor: BMAP_ANCHOR_TOP_LEFT
      });

      /* 显示左上角地图缩放平移控件 */
      var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: new BMap.Size(26, 50),
        type: BMAP_NAVIGATION_CONTROL_LARGE,
      });

      /* 开启鼠标滚轮缩放 */
      map.enableScrollWheelZoom(true);

      /* 添加之前定义的控件 */
      map.addControl(mapType);
      map.addControl(navigationControl);


    },
    created: function () {
      const _self = this;
      this.$http({
        url: localStorage.url + '/leader/getRemoveSortGByTown',
        type: "GET",
        success: function (data) {
          if (data.code == 0) {
            _self.rankData = data.data;
          }
          else {
            console.log('error submit!!');
            return false;
          }
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  };
</script>
