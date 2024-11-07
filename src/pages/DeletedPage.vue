<template>
  <q-page padding>
    <h2>Deleted To-Dos</h2>
    <q-list separator>
      <q-item v-for='(todo, index) in deletedTodos' :key='index'>
        <q-item-section>{{ todo.text }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      deletedTodos: JSON.parse(localStorage.getItem('deleted') || '[]'),
    };
  },
};
</script>
