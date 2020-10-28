<template>
  <div id="mediasoup-demo-app-container">
    <room v-if="!visiblePreMeet"></room>
    <PreMeet v-if="visiblePreMeet" @joinNow="joinMeetNow()" />
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
      visiblePreMeet: true
    }
  },
  methods: {
    joinMeetNow() {
      this.visiblePreMeet = false
      console.log('join')
    }
  }
}
</script>
