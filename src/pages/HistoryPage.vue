<template>
  <q-page padding>
    <h2>Completed To-Dos</h2>
    <q-list separator>
      <q-item v-for='(todo, index) in history' :key='index'>
        <q-item-section>{{ todo.text }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      history: JSON.parse(localStorage.getItem('history') || '[]'),
    };
  },
};
</script>
