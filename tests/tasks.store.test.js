import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { setActivePinia, createPinia } from 'pinia';
import { useTasksStore } from '../src/stores/tasks.store.js';

describe('useTasksStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('adds a task to the store', () => {
    const store = useTasksStore();
    const task = { id: 6, text: 'write tests', status: false };
    store.addTask(task);
    assert.deepStrictEqual(store.tasks.find(t => t.id === task.id), task);
  });

  test('deletes a task by id', () => {
    const store = useTasksStore();
    store.handleDeleteTask(1);
    assert.strictEqual(store.tasks.find(t => t.id === 1), undefined);
  });

  test('toggles task status', () => {
    const store = useTasksStore();
    const before = store.tasks.find(t => t.id === 2).status;
    store.handleStatus(2);
    const after = store.tasks.find(t => t.id === 2).status;
    assert.strictEqual(after, !before);
  });

  test('getters return only completed or uncompleted tasks', () => {
    const store = useTasksStore();
    assert.ok(store.completedTasks.every(t => t.status));
    assert.ok(store.unCompletedTasks.every(t => !t.status));
  });
});
