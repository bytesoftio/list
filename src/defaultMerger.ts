import { ListMerger } from "./types"
import { isArray } from "lodash"

export const defaultMerger: ListMerger<any> = (oldState, newState) => {
  if (isArray(oldState) && isArray(newState)) {
    return [...oldState, ...newState]
  }

  return newState
}
