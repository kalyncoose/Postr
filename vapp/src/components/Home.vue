<template>
  <div id="Home">
    <md-toolbar id="title" class="md-transparent" md-elevation="0">
      <h3 class="md-title" style="color:white;font-weight:600;">Home</h3>
    </md-toolbar>

    <div id="compile-post">
      <div id="submission-top">
        <md-field>
          <label>What's happening?</label>
          <md-textarea v-model="message" md-counter="180" maxlength="180"></md-textarea>
          <md-icon>alternate_email</md-icon>
        </md-field>
      </div>
      <div id="submission-btm">
        <md-button @click.prevent="onSubmit" class="md-raised md-primary post-btn">Post</md-button>
      </div>
    </div>

    <md-content class="md-scrollbar">
      <Post v-if="this.txData.length > 3"
            :address="this.txAddr"
            :date="this.txDate.toLocaleDateString('en-US',{ weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })"
            :message="this.txData"
      />
    </md-content>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from "@/components/Post";
import stringify from 'json-stringify-safe';

export default {
  name: "Home",
  props: {
    contractName: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
    methodArgs: {
      type: Array,
      default: () => []
    },
    placeholders: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Post
  },
  data() {
    return {
      contractObject: {},
      txHash: "",
      txData: '',
      txAddr: '',
      txDate: '',
      stackID: 0,
      message: "",
      ethData: {}
    }
  },
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('contracts', ['contractInstances', 'getContractData']),
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
    utils() {
      return this.drizzleInstance.web3.utils
    },
    web3() {
      return this.drizzleInstance.web3
    }
  },
  methods: {
    onSubmit() {
      const convertedInputs = this.utils.toHex(this.message)
      this.stackID = this.drizzleInstance.contracts[this.contractName].methods[this.method].cacheSend(convertedInputs)
      this.txAddr = this.activeAccount
      this.txDate = new Date()
      setTimeout(this.refresh,1000)
    },
    refresh() {
      var contractString = stringify(this.contractInstances)
      this.contractObject = JSON.parse(contractString)
      // eslint-disable-next-line no-console
      console.log(this.contractObject)
      if (this.contractObject.Post.events.length == 0)
        setTimeout(this.refresh, 1000)
      else {
        var event = this.contractObject.Post.events[this.stackID]
        this.txHash = event.transactionHash
        // eslint-disable-next-line no-console
        console.log(this.txHash)
        this.clearMessage()
        this.getPost()
      }
    },
    async getPost() {
      this.txData = await this.web3.eth.getTransaction(this.txHash)
        .then((result) => {
          let str = this.utils.hexToAscii(result.input)
          let xStart = str.indexOf('x')
          let substr = str.substring(xStart, str.length)
          let clean = substr.replace(/\0/g,'')
          let hex = '0'.concat(clean)
          return this.utils.hexToUtf8(hex)
        });
    },
    clearMessage() {
      this.message = ""
    }
  },
}
</script>

<style scoped>

#title {
  border-bottom:1px solid rgba(100,100,100,0.15);
}

#compile-post {
  border-bottom:1px solid rgba(100,100,100,0.15);
}

#submission-top {
  border-bottom:1px solid rgba(100,100,100,0.15);
}

#submission-btm {
  display:flex;
  direction:rtl;
}

.post-btn {
  border-radius:30px;
  box-shadow:none;
  color:white !important;
  border:none;
  font-weight:bold;
  font-size:1.15em;
  text-transform:none;
}

.md-content {
  background: none !important;
  height:100vh;
  overflow:auto;
}

.md-field.md-has-textarea:not(.md-autogrow):after, .md-field.md-has-textarea:not(.md-autogrow):before {
  border: none;
}

</style>