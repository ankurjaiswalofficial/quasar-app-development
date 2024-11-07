<template>
  <q-card class="history-card q-ma-md">
    <q-card-section>
      <div class="text-h6">Todo History</div>
      <q-list>
        <q-item v-for="(item, index) in history" :key="index">
          <q-item-section>
            <q-item-label>
              <span :class="{ 'text-strike': item.completed }">{{ item.text }}</span>
            </q-item-label>
            <q-item-label caption>
              {{ item.completed ? 'Completed' : 'Added' }} on {{ formatDate(item.date) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  history: {
    type: Array,
    required: true
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleString()
}
</script>

<style scoped>
.history-card {
  max-height: 300px;
  overflow-y: auto;
}
</style>
