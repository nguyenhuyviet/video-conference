<template>
  <div class="room">
    <div v-if="!visiblePreMeet" class="room">
      <div class="header">
        <div style="flex: 1"></div>
        <div class="top-bar flex-c-m">
          <div
            class="user-participate-item top-bar-item"
            @click="showRightBar(tab.People)"
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <div class="user-count">2</div>
          </div>
          <div class="chat-item top-bar-item" @click="showRightBar(tab.Chat)">
            <i class="fa fa-comments" aria-hidden="true">
              <div class="message-count">2</div>
            </i>
          </div>
          <div class="time-item top-bar-item">23:25</div>
          <div class="me-item top-bar-item"></div>
        </div>
      </div>

      <div class="container-fluid content">
        <!-- phòng -->
        <div class="row main">
          <div class="col-12 col-md-9 screen-share">
            <div class="screen">
              <video src="../assets/videos/Demo.mp4"></video>
            </div>
          </div>

          <!-- danh sachs tham gia -->
          <div class="col-12 col-md-3 list-participant">
            <Participant  :useCamera="true"/>
            <Participant  :useCamera="true" />
            <Participant  :useCamera="false"/>
            <Participant  :useCamera="true"/>
          </div>
        </div>

        <!-- right bar -->
        <transition name="slide">
          <div class="right-bar" v-if="visibleRightBar">
            <DetailMeet
              :tabSelectedProp="tabSelected"
              @onHidden="hidenRightBar()"
            />
          </div>
        </transition>
        <!--end right bar -->
      </div>

      <div class="bottom-bar">
        <div class="detail-meet" id="detail-meet">
          <button @click="showPopoverDetail()">Chi tiet ve cuoc hop</button>
          <DxPopover
            :width="300"
            :height="250"
            :visible.sync="withTitleVisible"
            target="#detail-meet"
            position="top"
          >
            <DxTabs
              :data-source="detailTab"
              :selected-index.sync="selectedIndex"
            />
            <div class="mt-3">
              <div class="" v-if="selectedIndex == 0">
                Thông tin về cách tham gia
                <div class="flex-c-m">
                  <div class="link-join-meet" id="link-join-meet">
                    {{ textLink }}
                  </div>
                  <div>
                    <i
                      class="fa fa-clone"
                      aria-hidden="true"
                      @click="copyLinkJoinMeet()"
                      style="cursor: pointer"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="" v-if="selectedIndex == 1">
                <div>Số tệp đính kèm trong Lịch Google sẽ hiển thị ở đây</div>
              </div>
            </div>
          </DxPopover>
        </div>
        <div class="group-button">
          <button
            class="micro btn-circle-big mr-3"
            v-bind:class="{ 'not-available': !useMicro }"
            @click="changeMicro()"
          >
            <i class="fa fa-microphone" aria-hidden="true"></i>
            <div v-if="!useMicro" class="slash"></div>
          </button>
          <button class="btn-circle-big mr-3">
            <i class="fa fa-stop" aria-hidden="true"></i>
          </button>
          <button
            class="camera btn-circle-big mr-3"
            v-bind:class="{ 'not-available': !useCamera }"
            @click="changeCamera()"
          >
            <i class="fa fa-camera" aria-hidden="true"></i>
            <div v-if="!useCamera" class="slash"></div>
          </button>
        </div>
        <div class="share-now">
          <button>
            <i class="fa fa-share" aria-hidden="true"></i>
            Trinh bay ngay
          </button>
        </div>
      </div>
    </div>
    <PreMeet v-if="visiblePreMeet" @joinNow="joinMeetNow()" />
  </div>
</template>

<script>
import PreMeet from "./pre-meet";
import DetailMeet from "./detail-meet";
import Participant from "./participant";
import DxPopover from "devextreme-vue/popover";
import DxTabs from "devextreme-vue/tabs";
export default {
  name: "Room",
  components: {
    PreMeet,
    DetailMeet,
    Participant,
    DxPopover,
    DxTabs,
  },
  data() {
    return {
      textLink: " https://meet.google.com/msv-porv-vcz",
      selectedIndex: 0,
      detailTab: [
        {
          id: 0,
          text: "Chi tiết",
          icon: "info",
          content: "User tab content",
        },
        {
          id: 1,
          text: "Số tệp đính kèm",
          icon: "link",
          content: "Comment tab content",
        },
      ],
      tab: {
        Chat: 1,
        People: 2,
      },
      visiblePreMeet: true,
      withTitleVisible: false,
      visibleRightBar: false,
      useMicro: true,
      useCamera: true,
      message: "",
      tabSelected: null,
    };
  },
  props: {},
  methods: {
    sendMessage() {
      this.chatService.sendMessage(this.message);
      this.message = "";
    },

    joinMeetNow() {
      this.visiblePreMeet = false;
      console.log("join");
    },

    showRightBar(tabType) {
      this.tabSelected = tabType;
      this.visibleRightBar = true;
    },

    hidenRightBar() {
      this.visibleRightBar = false;
    },

    changeMicro() {
      this.useMicro = !this.useMicro;
    },

    changeCamera() {
      this.useCamera = !this.useCamera;
    },
    showPopoverDetail() {
      this.withTitleVisible = true;
    },
    copyLinkJoinMeet() {
      let testingCodeToCopy = document.querySelector("#link-join-meet");
      var range, selection;

      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(testingCodeToCopy);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(testingCodeToCopy);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      try {
        document.execCommand("copy");
        alert("Sao chép thành công");
      } catch (err) {
        alert("Có lỗi xảy ra");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.room {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #0f0f0f;

  .header {
    display: flex;
    align-items: flex-start;

    .top-bar {
      background-color: white;
      border-bottom-left-radius: 8px;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 2px 6px 2px rgba(60, 64, 67, 0.15);
      display: flex;
      height: 48px;
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0.25s;
      transition-property: opacity, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

      .top-bar-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 66px;
        cursor: pointer;
        position: relative;
      }

      .top-bar-item:hover {
        background-color: #e0f2f1;
      }

      .top-bar-item::after {
        position: absolute;
        top: 8px;
        right: 0px;
        content: "";
        width: 1px;
        height: 30px;
        background-color: #e9e9e9;
      }

      .user-participate-item {
        overflow: hidden;

        .user-count {
          position: absolute;
          font-size: 10px;
          top: 8px;
          left: 40px;
        }
      }

      .chat-item {
        overflow: hidden;

        .message-count {
          min-width: 12px;
          height: 12px;
          border-radius: 10px;
          color: white;
          text-align: center;
          background-color: #00796b;
          position: absolute;
          font-size: 10px;
          top: 10px;
          left: 40px;
        }
      }
    }
  }

  .horizontal-slash {
    width: 2px;
    height: 8px;
    background-color: #e9e9e9;
  }

  .right-bar {
    position: fixed;
    width: 360px;
    height: 100vh;
    top: 0px;
    right: 0px;
  }
}

.item-circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: auto;
  background-color: rgba(95, 99, 104, 0.039);
}

.content {
  .main {
    height: calc(100vh - 150px);
    margin-top: 24px;

    .screen-share {
      display: flex;
      align-items: center;
    }

    .list-participant {
      background-color: #202124;
      background-color: #202124;
      max-height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding-top: 15px;
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
    }
  }
}
.bottom-bar {
  background: #ffffff;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  .group-button {
    display: flex;
  }
  .share-now,
  .detail-meet {
    height: 100%;
    button {
      height: 100%;
      background: none;
      border: none;
      outline: none;
    }
    button:hover {
      background: #e6e6e6;
    }
  }
}
.slash {
  position: absolute;
  width: 2px;
  height: 24px;
  background-color: white;
  transform: rotate(-45deg);
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.link-join-meet {
  text-overflow: ellipsis;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 8px;
}

.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}

.slide-leave-to {
  transform: translate(100%, 0);
}

.slide-enter {
  transform: translate(100%);
}
</style>
