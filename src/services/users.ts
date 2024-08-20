/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker'
import { RANDOMIZE } from '../app/constants.js'
import type { Users } from '../types/entities.js'

import usersStaticJSON from '../../data/users.json' assert { type: 'json' }

const usersStaticData: Users = usersStaticJSON

export function getUsers(randomize = RANDOMIZE) {
  console.log('getUsers')

  const result = randomize
    ? usersStaticData.map(p => {
        p.FirstName = faker.name.fullName()
        p.Email = faker.internet.email()
        p.Job = faker.name.jobTitle()
        p.Address = faker.address.country()
        return p
      })
    : usersStaticData

  return result
}
