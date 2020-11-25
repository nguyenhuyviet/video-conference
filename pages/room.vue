<template>
  <div id="mediasoup-demo-app-container">
    <room :display-name="displayName" :disable-audio="disableAudio" :disable-webcam="disableWebcam" v-if="!visiblePreMeet"></room>
    <PreMeet v-if="visiblePreMeet" @joinNow="joinMeetNow" />
  </div>
</template>

<script>
import Room from '~/components/Room'
import PreMeet from '~/components/PreMeet'

export default {
  components: {
    Room,
    PreMeet
  },
  data() {
    return {
      visiblePreMeet: true,
      peerId : "",
      displayName : "",
      disableAudio : false,
      disableWebcam : false,

    }
  },
  methods: {
    joinMeetNow(obj) {
      this.displayName = obj.displayName

      this.disableAudio = !obj.useMicro

      this.disableWebcam = !obj.useCamera

      this.visiblePreMeet = false
    }
  }
}
</script>
