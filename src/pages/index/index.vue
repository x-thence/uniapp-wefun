<template>
  <view class="content">
    <u-notice-bar :text="text1"></u-notice-bar>
    <view>
      <view class="album">
        <view class="album__avatar">
          <image src="/static/logo.png" mode="" style="width: 32px; height: 32px"></image>
        </view>
        <view class="album__content">
          <u--text text="uView UI" type="primary" bold size="17"></u--text>
          <u--text margin="0 0 8px 0" :lines="2" text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
          <u-album :urls="urls" keyName="src2"></u-album>
          <u--text type="info" text="3小时前"></u--text>
        </view>
      </view>

      <view class="album">
        <view class="album__avatar">
          <image src="/static/a.jpg" mode="" style="width: 32px; height: 32px"></image>
        </view>
        <view class="album__content">
          <u--text text="thence" type="primary" bold size="17"></u--text>
          <u--text margin="0 0 8px 0" :lines="2" text="唯见青山不见君"></u--text>
          <u-album :urls="images"></u-album>
          <u--text type="info" text="12小时前"></u--text>
        </view>
      </view>
    </view>
    <!-- <u-loadmore :line="true" status="nomore"></u-loadmore> -->
  </view>
</template>

<script>

export default {
  data() {
    return {

      text1:
        "uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",
      urls: [
        {
          src2: "https://cdn.uviewui.com/uview/album/1.jpg",
          src3: "/static/logo.png",
        },
      ],
      images: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg",
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.album {
  @include flex;
  align-items: flex-start;
  margin-top: 20rpx;

  &__avatar {
    background-color: $u-bg-color;
    padding: 5px;
    border-radius: 3px;
  }

  &__content {
    margin-left: 10px;
    flex: 1;
  }
}

.content {
  padding: 10rpx;
}
</style>
