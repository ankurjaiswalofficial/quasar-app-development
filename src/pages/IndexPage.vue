<template>
  <q-page padding>
    <q-input v-model='newTodo' label='New To-Do' @keyup.enter='addTodo' />

    <q-btn label='Add To-Do' color='primary' @click='addTodo' />

    <q-list separator>
      <q-item v-for='(todo, index) in todos' :key='index'>
        <q-item-section>{{ todo.text }}</q-item-section>
        <q-item-section side>
          <q-btn icon='delete' color='red' flat @click='deleteTodo(index)' />
        </q-item-section>
        <q-item-section side>
          <q-btn icon='check' color='green' flat @click='completeTodo(index)' />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
        this.saveTodos();
      }
    },
    deleteTodo(index) {
      const [deletedTodo] = this.todos.splice(index, 1);
      this.saveTodos();
      this.saveToDeleted(deletedTodo);
    },
    completeTodo(index) {
      const [completedTodo] = this.todos.splice(index, 1);
      completedTodo.completed = true;
      this.saveTodos();
      this.saveToHistory(completedTodo);
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    saveToHistory(todo) {
      const history = JSON.parse(localStorage.getItem('history') || '[]');
      history.push(todo);
      localStorage.setItem('history', JSON.stringify(history));
    },
    saveToDeleted(todo) {
      const deleted = JSON.parse(localStorage.getItem('deleted') || '[]');
      deleted.push(todo);
      localStorage.setItem('deleted', JSON.stringify(deleted));
    },
  },
};
</script>
