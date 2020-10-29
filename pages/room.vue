<template>
  <div id="mediasoup-demo-app-container">
    <room :display-name="displayName" v-if="!visiblePreMeet"></room>
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
      peerId : ""
    }
  },
  methods: {
    joinMeetNow(obj) {
      this.displayName = obj.displayName
      this.visiblePreMeet = false
    }
  }
}
</script>
