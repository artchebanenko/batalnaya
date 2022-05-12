import type1a_1 from '../images/1et/1A.png'
import type1a_25 from '../images/2-5et/1A.png'
import type1a_67 from '../images/6,7et/1A.png'
import type1a_8 from '../images/8et/1A.png'

import type1b_1 from '../images/1et/1B.png'
import type1b_25 from '../images/2-5et/1B.png'
import type1b_67 from '../images/6,7et/1B.png'
import type1b_8 from '../images/8et/1B.png'

import type1a1_1 from '../images/1et/1A1.png'
import type1a1_25 from '../images/2-5et/1A1.png'
import type1b1_1 from '../images/1et/1B1.png'
import type1b1_25 from '../images/2-5et/1B1.png'

import type2a_1 from '../images/1et/2A.png'
import type2a_25 from '../images/2-5et/2A.png'
import type2a_67 from '../images/6,7et/2A.png'
import type2a_8 from '../images/8et/2A.png'

import type2b_1 from '../images/1et/2B.png'
import type2b_25 from '../images/2-5et/2B.png'
import type2c_67 from '../images/6,7et/2C.png'
import type2c_8 from '../images/8et/2C.png'

import type3a_67 from '../images/6,7et/3A.png'
import type3a_8 from '../images/8et/3A.png'

export default function switchUnitPlan(type, floor) {
  const types = {
    '1a': [
      {
        src: type1a_1,
        floors: [1],
      },
      {
        src: type1a_25,
        floors: [2,3,4,5],
      },
      {
        src: type1a_67,
        floors: [6,7],
      },
      {
        src: type1a_8,
        floors: [8],
      },
    ],
    '1b': [
      {
        src: type1b_1,
        floors: [1],
      },
      {
        src: type1b_25,
        floors: [2,3,4,5],
      },
      {
        src: type1b_67,
        floors: [6,7],
      },
      {
        src: type1b_8,
        floors: [8],
      },
    ],
    '1a1': [
      {
        src: type1a1_1,
        floors: [1],
      },
      {
        src: type1a1_25,
        floors: [2,3,4,5],
      },
    ],
    '1b1': [
      {
        src: type1b1_1,
        floors: [1],
      },
      {
        src: type1b1_25,
        floors: [2,3,4,5],
      },
    ],
    '2a': [
      {
        src: type2a_1,
        floors: [1],
      },
      {
        src: type2a_25,
        floors: [2,3,4,5],
      },
      {
        src: type2a_67,
        floors: [6,7],
      },
      {
        src: type2a_8,
        floors: [8],
      },
    ],
    '2b': [
      {
        src: type2b_1,
        floors: [1],
      },
      {
        src: type2b_25,
        floors: [2,3,4,5],
      },
    ],
    '2c': [
      {
        src: type2c_67,
        floors: [6,7],
      },
      {
        src: type2c_8,
        floors: [8],
      },
    ],
    '3a': [
      {
        src: type3a_67,
        floors: [6,7],
      },
      {
        src: type3a_8,
        floors: [8],
      },
    ],
  }

  const { src } = types[type].find(t => t.floors.findIndex(f => f === floor) > -1)

  return src
}