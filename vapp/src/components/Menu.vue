<template>
  <md-list id="Menu">
    <md-button class="md-fab" style="box-shadow:none;background:none;">
      <md-icon class="md-size-2x" style="color:white;">markunread_mailbox</md-icon>
    </md-button>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:#1DA1F2">house</md-icon>
      <span class="md-list-item-text white" style="color:#1DA1F2">Home</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">tag</md-icon>
      <span class="md-list-item-text white">Explore</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">notifications_none</md-icon>
      <span class="md-list-item-text white">Notifications</span>
      <md-badge class="md-primary" style="color:white;font-weight:600;" md-content="1" />
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">mail_outline</md-icon>
      <span class="md-list-item-text white">Messages</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">bookmark_outline</md-icon>
      <span class="md-list-item-text white">Bookmarks</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">notes</md-icon>
      <span class="md-list-item-text white">Lists</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">person_outline</md-icon>
      <span class="md-list-item-text white">Profile</span>
    </md-list-item>

    <md-list-item @click="test" :md-ripple="false" class="menu-item">
      <md-icon style="color:inherit">more_horiz</md-icon>
      <span class="md-list-item-text white">More</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      home: true,
      explore: false,
      notifications: false,
      messages: false,
      bookmarks: false,
      lists: false,
      profile: false,
      more: false,
    }
  },
  methods: {
    test() {
      // eslint-disable-next-line no-console
      console.log('test');
    }
  }
}
</script>

<style scoped>

#Menu {
  max-width:50%;
  width:100%;
  float:right;
  background:none;
}

.white {
  font-weight:600;
  font-size:1.25em;
}

:hover {
  background: unset!important;
}

.menu-item:hover {
  background:rgba(29, 161, 242, 0.1) !important;
  border-radius: 30px;
}

.menu-item * {
  transition: none !important;
}

.md-list-item-button:hover {
  color:#1DA1F2 !important;
}

</style>