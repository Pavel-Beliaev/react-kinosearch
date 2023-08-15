import { useMemo } from 'react'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import {useAppDispatch} from "../Store/store";

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
