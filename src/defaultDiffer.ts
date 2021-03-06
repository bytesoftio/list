import { ListDiffer } from "./types"
import { isEqual } from "lodash"

export const defaultDiffer: ListDiffer<any> = (oldState, newState) => ! isEqual(oldState, newState)
