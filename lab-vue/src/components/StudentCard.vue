<template>
  <div class="student-card">
    <h4>{{ event.name }} {{ event.surname }}</h4>
    <h5>{{ event.gpa }}</h5>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  // props: {
  //  msg: String
  // }
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

h4 {
    text-align: right;
}

h5 {
    text-align: right;
    font-weight: bold;
}
</style>