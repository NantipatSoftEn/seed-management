/* eslint-disable no-param-reassign */
import { GristDocAPI, type IRecord } from 'grist-api'

export async function getLambs():Promise<Lamb[]> {
  console.log('getLambs')
  const docUrl = process.env.DOC_URL
  if (!docUrl) {
    throw new Error('DOC_URL environment variable is not defined')
  }

  const api = new GristDocAPI(docUrl)
  const records:IRecord[] = await api.fetchTable('LambInfo_Main')
	console.log("records",records)
	const lambs:Lamb[] = records.map(mapRecordToLamb)
	return lambs
}

function mapRecordToLamb(record: IRecord): Lamb {
	const lamb: Lamb = {
		nickName: getString(record.nickName),
		firstName: getString(record.firstName),
		lastName: getString(record.lastName),
		birthday: getString(record.birthDate),
		gender: getString(record.gender),
		address: getString(record.address),
		email: getString(record.email),
		phone: getString(record.phone),
		personality: getString(record.personality),
		phoneNumber: getString(record.phoneNumber),
		job: getString(record.job),
		interests: getString(record.interests),
		persernality: getString(record.persernality),
		isTimote: getBoolean(record.isTimote),
		status: getString(record.status),
		groupCare: getString(record.groupCare),
		age: getNumber(record.age),
		interesting: getString(record.interesting),
		ageInGod: getNumber(record.ageInGod),
		remark: getString(record.remark),
		previouseChurch: getString(record.previouseChurch),
		gift: null,
		profilePicture: null
	}
	return lamb
}

function getString(value: any): string | null {
	return value?.toString() ?? null;
}

function getBoolean(value: any): boolean {
	return value?.toString() === 'true';
}

function getNumber(value: any): number | null {
	return value ? parseInt(value.toString()) : null;
}
