<template>
  <h1>List of Students</h1>
  <div class="events">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from '@/components/StudentCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'StudentList',
  components: {
    StudentCard // register it as a child component
  },
  data() {
    return {
      events: null
    }
  },
  created() {
      EventService.getEvents()
      .then((response) => {
          this.events = response.data
      })
      .catch((error) => {
          console.log(error)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
