<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>To-Do App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <q-list>
        <q-item to="/" clickable>
          <q-item-section>To-Do List</q-item-section>
        </q-item>
        <q-item to="/history" clickable>
          <q-item-section>History</q-item-section>
        </q-item>
        <q-item to="/deleted" clickable>
          <q-item-section>Deleted To-Dos</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
