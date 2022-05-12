import type1a1_25 from '../images/2-5et/1A1.png'
import type1b_25 from '../images/2-5et/1B.png'
import type2a_25 from '../images/2-5et/2A.png'
import type2b_25 from '../images/2-5et/2B.png'
import type2c_67 from '../images/6,7et/2C.png'
import type3a_67 from '../images/6,7et/3A.png'

import onfloor1a_1 from '../images/1et/onfloor/1A.png'
import onfloor1a_25 from '../images/2-5et/onfloor/1A.png'
import onfloor1a_67 from '../images/6,7et/onfloor/1A.png'
import onfloor1a_8 from '../images/8et/onfloor/1A.png'

import onfloor1b_1 from '../images/1et/onfloor/1B.png'
import onfloor1b_25 from '../images/2-5et/onfloor/1B.png'
import onfloor1b_67 from '../images/6,7et/onfloor/1B.png'
import onfloor1b_8 from '../images/8et/onfloor/1B.png'

import onfloor2a_1 from '../images/1et/onfloor/2A.png'
import onfloor2a_25 from '../images/2-5et/onfloor/2A.png'
import onfloor2a_67 from '../images/6,7et/onfloor/2A.png'
import onfloor2a_8 from '../images/8et/onfloor/2A.png'

import onfloor2b_1 from '../images/1et/onfloor/2B.png'
import onfloor2b_25 from '../images/2-5et/onfloor/2B.png'
import onfloor2c_67 from '../images/6,7et/onfloor/2C.png'
import onfloor2c_8 from '../images/8et/onfloor/2C.png'

import onfloor3a_67 from '../images/6,7et/onfloor/3A.png'
import onfloor3a_8 from '../images/8et/onfloor/3A.png'

export default function switchTypePlan(type) {
  const types = {
    '1a': {
      src: type1a1_25,
      onfloor: [
        {
          src: onfloor1a_1,
          title: 'План 1 этажа',
        },
        {
          src: onfloor1a_25,
          title: 'План 2-5 этажей',
        },
        {
          src: onfloor1a_67,
          title: 'План б, 7 этажей',
        },
        {
          src: onfloor1a_8,
          title: 'План 8 этажа',
        },
      ],
    },
    '1b': {
      src: type1b_25,
      onfloor: [
        {
          src: onfloor1b_1,
          title: 'План 1 этажа',
        },
        {
          src: onfloor1b_25,
          title: 'План 2-5 этажей',
        },
        {
          src: onfloor1b_67,
          title: 'План б, 7 этажей',
        },
        {
          src: onfloor1b_8,
          title: 'План 8 этажа',
        },
      ],
    },
    '2a': {
      src: type2a_25,
      onfloor: [
        {
          src: onfloor2a_1,
          title: 'План 1 этажа',
        },
        {
          src: onfloor2a_25,
          title: 'План 2-5 этажей',
        },
        {
          src: onfloor2a_67,
          title: 'План б, 7 этажей',
        },
        {
          src: onfloor2a_8,
          title: 'План 8 этажа',
        },
      ],
    },
    '2b': {
      src: type2b_25,
      onfloor: [
        {
          src: onfloor2b_1,
          title: 'План 1 этажа',
        },
        {
          src: onfloor2b_25,
          title: 'План 2-5 этажей',
        },
      ],
    },
    '2c': {
      src: type2c_67,
      onfloor: [
        {
          src: onfloor2c_67,
          title: 'План б, 7 этажей',
        },
        {
          src: onfloor2c_8,
          title: 'План 8 этажа',
        },
      ],
    },
    '3a': {
      src: type3a_67,
      onfloor: [
        {
          src: onfloor3a_67,
          title: 'План б, 7 этажей',
        },
        {
          src: onfloor3a_8,
          title: 'План 8 этажа',
        },
      ],
    },
  }

  return types[type]
}