<template>
  <div class="participant-item">
    <template v-if="useCamera">
      <video src="../assets/videos/Demo.mp4"></video>
    
    </template>
    <template v-if="!useCamera">
      <div class="no-video">
        <div class="participant-avt">
          <img src="../assets/images/avt.jpg" alt="" />
        </div>
        <div class="participant-name">Nguyễn Huy Việt</div>
      </div>
    </template>
      <div class="control-button">
        <div class="group-button">
          <button
            class="micro btn-circle-sm mr-3"
            v-bind:class="{ 'not-available': !useMicro }"
            @click="changeMicro()"
          >
            <i class="fa fa-microphone" aria-hidden="true"></i>
            <div v-if="!useMicro" class="slash"></div>
          </button>
          <button class="btn-circle-sm mr-3">
            <i class="fa fa-stop" aria-hidden="true"></i>
          </button>
          <button
            class="camera btn-circle-sm"
            v-bind:class="{ 'not-available': !useCamera }"
            @click="changeCamera()"
          >
            <i class="fa fa-camera" aria-hidden="true"></i>
            <div v-if="!useCamera" class="slash"></div>
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Participant",
  props: {
    useMicro: Boolean,
    useCamera: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    changeMicro() {
      this.useMicro = !this.useMicro;
    },

    changeCamera() {
      this.useCamera = !this.useCamera;
    },
  },
};
</script>

<style lang="scss">
.participant-item {
  padding-bottom: 16px;
  position: relative;
}
.no-video {
  .participant-avt {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 16px auto;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .participant-name {
    color: #ffffff;
    font-size: 14px;
  }
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.control-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .group-button {
    display: none;
    background: #f6f6f6;
    padding: 0px 16px;
    border-radius: 20px;
  }
}
.participant-item:hover .group-button {
  display: flex;
}
</style>
