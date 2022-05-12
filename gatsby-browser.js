import React from 'react'
import { YMaps } from 'react-yandex-maps'

export function wrapRootElement({ element }) {
  return <YMaps>{element}</YMaps>
}