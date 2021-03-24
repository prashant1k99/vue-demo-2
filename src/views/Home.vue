<template>
  <v-col>
    <v-row>
      <h1>User List</h1>
      <v-spacer />
      <v-btn text color="" class="mr-2" @click="cardView = !cardView">
        <v-icon class="mr-2">{{!cardView ? 'mdi-cards-variant' : 'mdi-view-list-outline'}}</v-icon>
        {{!cardView ? 'Card View' : 'List View'}}
      </v-btn>
      <v-btn color="primary" @click="$router.push('/create')">Add New User</v-btn>
    </v-row>
    <card-listing v-if="cardView"/>
    <table-listing v-else/>
  </v-col>
</template>

<script>
import CardListing from '../components/UserCardListing'
import TableListing from '../components/UserTableListing'
export default {
  name: 'Home',
  components: {
    CardListing,
    TableListing
  },
  data: () => ({
    cardView: true
  })
}
</script>
