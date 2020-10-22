<template>
  <div class="pre-meet">
    <div class="header">
      <div class="left">Google meet</div>
      <div class="right flex-c-m">
        <div class="user-email">huyviet99uet@gmail.com</div>
        <div class="user-avatar circle"></div>
      </div>
    </div>
    <div class="container content">
      <div class="box row align-items-center justify-content-center">
        <div class="col-12 col-md-7">
          <div class="preview">
            <div class="text-notify flex-c-m">
              <div>Không tìm thấy máy ảnh</div>
            </div>
            <div class="btn-top">
              <button class="option btn-circle">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>
            <div class="btn-bottom flex-c-m">
              <button
                class="micro btn-circle"
                v-bind:class="{ 'not-available': !useMicro }"
                @click="changeMicro()"
              >
                <i class="fa fa-microphone" aria-hidden="true"></i>
                <div v-if="!useMicro" class="slash"></div>
              </button>
              <button
                class="camera btn-circle"
                v-bind:class="{ 'not-available': !useCamera }"
                @click="changeCamera()"
              >
                <i class="fa fa-camera" aria-hidden="true"></i>
                <div v-if="!useCamera" class="slash"></div>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="text">
            <div class="question">Sẵn sàng tham gia?</div>
            <div class="description">Không còn ai ở đây</div>
          </div>
          <div class="group-button flex-c-m">
            <button
              class="join-now app-btn app-btn-medium btn-green btn-oval"
              @click="joinMeetNow()"
            >
              Tham gia ngay
            </button>
            <button
              class="share-screen app-btn app-btn-medium btn-white btn-oval"
            >
              <i
                class="fa fa-level-up"
                aria-hidden="true"
                style="margin-right: 8px"
              ></i>
              Trình bày
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreMeet",
  props: {},
  data() {
    return {
      useMicro: true,
      useCamera: true,
    };
  },
  methods: {
    changeMicro() {
      this.useMicro = !this.useMicro;
    },

    changeCamera() {
      this.useCamera = !this.useCamera;
    },

    joinMeetNow() {
      this.$emit("joinNow");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pre-meet {
  .header {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
    }

    .right {
      .user-avatar {
        width: 40px;
        height: 40px;
        background-color: pink;
      }
    }
  }

  .content {
    height: calc(100vh - 52px);

    .box {
      height: 100%;

      .preview {
        width: 630px;
        height: 350px;
        background-color: black;
        border-radius: 4px;
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
          0 1px 3px 1px rgba(60, 64, 67, 0.15);
        position: relative;

        .text-notify {
          position: absolute;
          top: 50%;
          color: #ffffff;
          width: 100%;
          font-size: 24px;
        }

        .btn-top {
          position: absolute;
          top: 4px;
          right: 4px;
          .option {
            width: 40px;
            height: 40px;
            background-color: black;
            border: none;
            color: white;
          }
          .option:hover {
            background-color: #5f6368;
            transition: ease-in-out 0.3s;
          }
        }

        .btn-bottom {
          position: absolute;
          bottom: 12px;
          left: 42%;

          i {
            color: white;
          }

          .micro {
            margin-right: 20px;
            position: relative;
            border: solid 1px white;
            background-color: black;
          }

          .camera {
            position: relative;
            border: solid 1px white;
            background-color: black;
          }

          .micro:hover,
          .camera:hover {
            background-color: #5f6368;
            transition: ease-in-out 0.3s;
          }

        

          .slash {
            position: absolute;
            width: 2px;
            height: 24px;
            background-color: white;
            transform: rotate(-45deg);
          }
        }
      }

      .text {
        font-family: "Google Sans", Roboto, Arial, sans-serif;
        color: #1f1f1f;
        margin-bottom: 16px;

        .question {
          font-size: 1.75rem;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 2.25rem;
          box-sizing: border-box;
          cursor: default;
          overflow: hidden;
          padding: 0 24px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .description {
          letter-spacing: 0.01785714em;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.25rem;
          cursor: default;
          margin: 8px 8px 0 8px;
          text-align: center;
        }
      }

      .group-button {
        .join-now {
          box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
            0 1px 3px 1px rgba(60, 64, 67, 0.15);
          margin-right: 16px;
        }

        .share-screen {
          box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
            0 1px 3px 1px rgba(60, 64, 67, 0.15);
        }
      }
    }
  }
}



</style>
