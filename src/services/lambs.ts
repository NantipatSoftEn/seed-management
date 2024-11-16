/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker'
import { RANDOMIZE } from '../app/constants.js'

import lambStaticJSON from '../../data/lambs.json' assert { type: 'json' }
import { GristDocAPI } from 'grist-api';

export async function getLambs(randomize = RANDOMIZE): Promise<Lamb[]> {
  console.log('getLambs')
  // const authorization = await fetch(
  //   'https://docs.getgrist.com/api/docs/gMcnyNRQvNWPZPmqF7Fv9T/tables/LambInfo/records',
  //   {
  //     method: 'GET',

  //     headers: {
  //       Accept: 'application/json',
	// 			'Authorization': `Bearer ${apiKey}`,
  //     },
  //   }
  // )
	// const t = await authorization.json()
  // console.log('responsefucU',t.records[0].fields)

  const docUrl = process.env.DOC_URL;
  if (!docUrl) {
    throw new Error('DOC_URL environment variable is not defined');
  }
  const api = new GristDocAPI(docUrl);
	const data = await api.fetchTable('LambInfo');
  console.log("LambdaInfo",data);
  const result = randomize
    ? lambStaticJSON.map(p => {
        // p.nickName = faker.name.fullName()
        return p
      })
    : lambStaticJSON

  return result as Lamb[]
}
