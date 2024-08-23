/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker'
import { RANDOMIZE } from '../app/constants.js'

import lambStaticJSON from '../../data/lambs.json' assert { type: 'json' }

export function getLambs(randomize = RANDOMIZE): Lamb[] {
  console.log('getLambs')

  const result = randomize
    ? lambStaticJSON.map(p => {
        // p.nickName = faker.name.fullName()
        return p
      })
    : lambStaticJSON

  return result as Lamb[]
}
