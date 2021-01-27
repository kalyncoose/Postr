<template>
  <div id="Post" v-if="isDrizzleInitialized">
    <md-card>
      <md-card-header>
        <div class="md-subhead">
          <md-icon>account_circle</md-icon>
          <span id="address">
            {{ address.substring(0,10) }}
            <md-tooltip md-direction="right">{{ address }}</md-tooltip>
          </span>
          <span id="separator">&middot;</span>
          <span id="date">{{ date }}</span>
        </div>
      </md-card-header>

      <md-card-content>
        {{ message }}
      </md-card-content>

      <md-card-actions md-alignment="left">
        <md-button class="md-icon-button">
          <md-icon>mode_comment</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>repeat</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>timeline</md-icon>
        </md-button>

      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Post",
  props: {
    address: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: ''
    },
    callMethod: {}
  },
  computed: mapGetters('drizzle', ['isDrizzleInitialized']),
}
</script>

<style scoped>

#Post {
  background:none;
}

.md-card {
  text-align:left;
  background:inherit !important;
  box-shadow:none;
  border-bottom:1px solid rgba(100,100,100,0.15);
}

.md-card:hover {
  background: rgba(100,100,100,0.15) !important;
}

.md-icon-button {
  margin-right:15% !important;
}

#address {
  font-weight:bold;
  font-size:1.1em;
  margin-right:5px;
}

#separator {
  margin:0 10px 0 10px;
  font-weight:bold;
}

#date {
  font-size:0.75em;
}

</style>