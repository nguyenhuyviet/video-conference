<template>
  <div class="detail-meet">
    <div>
      <div class="text-right-bar">Chi tiết cuộc họp</div>
      <!-- tab -->
      <div class="tabs">
        <div
          class="people flex-c-m tab-item"
          v-bind:class="{ 'tab-active': tabSelected == tab.People }"
          @click="tabSelected = tab.People"
        >
          <i class="fa fa-user" aria-hidden="true"></i> Mọi người ({{listParticipant.length}})
        </div>
        <div
          class="chat flex-c-m tab-item"
          v-bind:class="{ 'tab-active': tabSelected == tab.Chat }"
          @click="tabSelected = tab.Chat"
        >
          <i class="fa fa-comments" aria-hidden="true"></i> Trò chuyện ({{listMessage.length}})
        </div>
      </div>
    </div>
    <!-- nội dung tab -->
    <div class="content-tab">
      <!-- tab người tham gia -->
      <div class="people-tab" v-if="tabSelected == tab.People">
        <div class="add-user" @click="addUser()">
          <div class="item-circle flex-c-m">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </div>

          <div style="font-size: 14px">Thêm người</div>
        </div>
        <div class="list-user">
          <div
            class="user-item"
            v-for="user in listParticipant"
            :key="user.UserID"
          >
            <div class="avt flex-c-m">
              <img :src="user.Avatar" alt="" />
            </div>
            <div class="full-name">{{ user.Name }}</div>
          </div>
        </div>
      </div>
      <!-- tab chat -->
      <div class="chat-tab" v-if="tabSelected == tab.Chat">
        <template  v-if="!loadingMessage">
          <div
            class="chat-item"
            v-for="message in listMessage"
            :key="message.Name"
          >
            <div class="chat-by">
              <div class="chat-name">{{ message.Name }}</div>
              <div class="chat-time">{{ message.ChatTime }}</div>
            </div>
            <div class="chat-content" v-html="message.Value"></div>
          </div>
        </template >
        <!-- loading -->
        <template  v-if="loadingMessage">
          <div class="chat-loading">
            <div class="loading-name gradient"></div>
            <div class="loading-content gradient" style="width: 100%"></div>
          </div>
          <div class="chat-loading">
            <div class="loading-name gradient"></div>
            <div class="loading-content gradient"></div>
          </div>
          <div class="chat-loading">
            <div class="loading-name gradient"></div>
            <div class="loading-content gradient"></div>
          </div>
        </template >
      </div>
    </div>
    <!-- input nhập chat -->
    <div class="form-chat flex-c-m" v-if="tabSelected == tab.Chat">
      <div
        class="input-chat"
        @input="onMessageChange($event.target.innerHTML)"
        contenteditable="true"
        placeholder="Gửi tin nhắn cho mọi người"
      ></div>
      <button class="btn-send">
        <i
          class="fa fa-paper-plane"
          aria-hidden="true"
          @click="sendMessage()"
        ></i>
      </button>
    </div>
    <div class="close" @click="hidenRightBar()">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import fakeAvt from "../assets/images/avt.jpg";

export default {
  name: "DetailMeet",
  props: {
    tabSelectedProp: Number,
  },
  data() {
    return {
      tab: {
        Chat: 1,
        People: 2,
      },
      tabSelected: null,
      listMessage: [
        {
          Name: "Nguyễn Huy Việt1",
          ChatTime: "22:35",
          Value: "Hello",
        },
      ],
      listParticipant: [
        {
          UserID: 1,
          Name: "Nguyễn Huy Việt1",
          Avatar: fakeAvt,
        },
        {
          UserID: 11,

          Name: "Nguyễn Huy Việt2",
          Avatar: fakeAvt,
        },
        {
          UserID: 111,

          Name: "Nguyễn Huy Việt3",
          Avatar: fakeAvt,
        },
        {
          UserID: 1111,

          Name: "Nguyễn Huy Việt4",
          Avatar: fakeAvt,
        },
      ],
      loadingMessage: false,
    };
  },
  mounted() {
    this.tabSelected = this.tabSelectedProp;
    this.getMessage();
  },
  methods: {
    getMessage() {
      this.loadingMessage = true;
      setTimeout(() => {
        this.loadingMessage = false;
      }, 1000);
    },
    // ẩn popup
    hidenRightBar() {
      this.$emit("onHidden");
    },
    // gửi tin nhắn
    sendMessage() {
      // gọi service gửi message
      const newMsg = {
        Name: "Nguyễn Huy Việt",
        ChatTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
        Value: this.message,
      };
      this.listMessage.push(newMsg);
      this.message = "";
    },
    //
    onMessageChange(value) {
      this.message = value;
    },

    //thêm user
    addUser() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chat-loading {
  margin-bottom: 16px;
  .loading-name {
    height: 16px;
    border-radius: 4px;
    width: 160px;
  }
  .loading-content {
    margin-top: 8px;
    height: 16px;
    border-radius: 4px;
    width: 215px;
  }
}
.detail-meet {
  width: 100%;
  height: 100%;
  background: white;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;

  .text-right-bar {
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5rem;
    box-flex: 1;
    /* flex-grow: 1; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* margin-bottom: 40px; */
    margin-left: 24px;
    height: 36px;
  }

  .tabs {
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: solid 1px #e0e0e0;
    font-size: 14px;

    .tab-item {
      width: 50%;
      height: 50px;
      font-weight: 500;
      cursor: pointer;
    }

    .tab-item:hover {
      background: rgba(0, 121, 107, 0.039);
    }

    .tab-active::after {
      content: "";
      position: absolute;
      background: #00796b;
      height: 5px;
      width: 112px;
      top: 46px;
      border-radius: 4px;
    }
  }

  .content-tab {
    flex: 1;
    border-bottom: solid 1px #e0e0e0;
    font-size: 14px;
    overflow: auto;
    .people-tab {
      .add-user {
        height: 60px;
        width: 90px;
        margin: 16px auto;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .add-user:hover {
        background-color: rgba(95, 99, 104, 0.039);
      }

      .list-user {
        max-height: 735px;
        overflow-y: auto;
        overflow-x: hidden;
        border-top: solid 1px #e0e0e0;

        .user-item {
          display: flex;
          align-items: center;

          height: 60px;

          .avt {
            height: 100%;
            width: 100px;
            background-color: rgba(95, 99, 104, 0.039);

            img {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          .full-name {
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 226px;
            overflow: hidden;
            padding-left: 16px;
          }
        }
      }
    }

    .chat-tab {
      padding: 8px 24px;

      .chat-item {
        margin-bottom: 16px;
      }

      .chat-by {
        display: flex;

        .chat-name {
          font-weight: 500;
          margin-right: 8px;
        }

        .chat-time {
          font-size: 13px;
          color: grey;
        }
      }

      .chat-content {
        word-break: break-word;
        text-align: left;
      }
    }
  }

  .form-chat {
    height: 75px;

    .input-chat {
      outline: none;
      width: 75%;
      border-bottom: solid 1px #e0e0e0;
      font-size: 13px;
      cursor: text;
    }

    .input-chat:focus {
      border-bottom: solid 2px #00796b;
    }

    .input-chat[contentEditable="true"]:empty:not(:focus):before {
      content: attr(placeholder);
      color: grey;
    }

    .input-chat[contentEditable="true"]:empty:before {
      content: attr(placeholder);
      color: grey;
    }

    .btn-send {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: none;
      background: white;
      color: #00796b;
      margin-left: 12px;
      outline: none;
    }

    .btn-send:hover {
      background-color: rgba(95, 99, 104, 0.039);
    }

    .btn-send:focus {
      background-color: rgba(95, 99, 104, 0.157);
    }
  }

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
}
</style>
