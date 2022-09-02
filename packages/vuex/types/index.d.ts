import { StoreType } from '../src/index'

declare module "@miniRepo/vuex" {
  export function createStore({ state, action, mutation }: StoreType): StoreType
  export function useStore(): StoreType
}