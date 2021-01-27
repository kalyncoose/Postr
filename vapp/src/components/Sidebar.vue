<template>
  <div id="Sidebar">
    <div id="Search">
      <md-autocomplete
          class="search"
          v-model="selectedEmployee"
          :md-options="employees"
          md-layout="box">
        <label style="margin-left:33px">Search Postr</label>
        <md-icon style="margin:auto;position:absolute;top:13px;left:13px;color:rgba(255,255,255,0.5);">search</md-icon>
      </md-autocomplete>
    </div>

    <Trending />
    <Following />

  </div>
</template>

<script>
import Trending from '@/components/Trending';
import Following from '@/components/Following';

export default {
  name: "Sidebar",
  components: {
    Trending,
    Following
  },
  data: () => ({
    selectedEmployee: null,
    employees: [
      'Jim Halpert',
      'Dwight Schrute',
      'Michael Scott',
      'Pam Beesly',
      'Angela Martin',
      'Kelly Kapoor',
      'Ryan Howard',
      'Kevin Malone',
      'Creed Bratton',
      'Oscar Nunez',
      'Toby Flenderson',
      'Stanley Hudson',
      'Meredith Palmer',
      'Phyllis Lapin-Vance'
    ]
  })
}
</script>

<style scoped>

#Sidebar {
  max-width:60%;
  width:100%;
  float:left;
  margin-left:30px;
}

#Search {
  margin-top:10px;
}

.md-autocomplete {
  border-radius: 30px !important;
  background: rgba(100,100,100,0.15) !important;
  box-shadow: none !important;
}

</style>