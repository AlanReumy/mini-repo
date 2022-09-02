import { test, expect } from 'vitest'
import { Commit, createStore, State } from '../src/index'

test('state', () => {
  const store = createStore({
    state: {
      name: 'curry',
      age: 30
    }
  })
  expect(store.state).toStrictEqual({ name: 'curry', age: 30 })
})

test("mutation", () => {
  const store = createStore({
    state: {
      name: 'curry',
      age: 30
    },
    mutation: {
      addAge(state: State, newAge: number) {
        state.age = newAge
      }
    }
  })
  store.commit('addAge', 40)
  expect(store.state).toStrictEqual({ name: 'curry', age: 40 })
})

test('action', () => {
  const store = createStore({
    state: {
      name: 'curry',
      age: 30
    },
    action: {
      addAgeAction({ commit, state }: { commit: Commit, state: State }, payload) {
        commit(state, payload)
      }
    },
    mutation: {
      addAge(state: State, newAge: number) {
        state.age = newAge
      }
    }
  })
  store.dispatch("addAgeAction", 20)
  expect(store.state).toStrictEqual({ name: 'curry', age: 50 })
})