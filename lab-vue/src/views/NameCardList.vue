<template>
  <h1>List of Name Cards</h1>
  <div class="events">
    <NameCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import NameCard from '@/components/NameCard.vue'

export default {
  name: 'NameCardList',
  components: {
    NameCard // register it as a child component
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'Animal Welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        },
        {
          id: 4582797,
          category: 'Food',
          title: 'Community Gardening',
          description: 'Join us as we tend to the community edible plants.',
          location: 'Flora City',
          date: 'March 14, 2022',
          time: '10:00',
          petsAllowed: true,
          organizer: 'Fern Pollin'
        },
        {
          id: 8419988,
          category: 'Sustainability',
          title: 'Beach Cleanup',
          description: 'Help pick up trash along the shore.',
          location: 'Playa Del Carmen',
          date: 'July 22, 2022',
          time: '11:00',
          petsAllowed: false,
          organizer: 'Carey Wales'
        }
      ]
    }
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
