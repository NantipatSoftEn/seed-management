/* eslint-disable no-param-reassign */
import { GristDocAPI, type IRecord } from 'grist-api'
import { mockLambs } from 'src/mocks/lamps'
import type { GroupCare, Lamb } from 'src/types/InfoLamb'

export async function getLambs(): Promise<Lamb[]> {
  // console.log('getLambs')
  const docUrl = process.env.DOC_URL
  if (!docUrl) {
    throw new Error('DOC_URL environment variable is not defined')
  }

  // const api = new GristDocAPI(docUrl)
  // const records: IRecord[] = await api.fetchTable('LambInfo_Main')
  // const subRecords: IRecord[] = await api.fetchTable('GroupCare')
	// const groupCare: GroupCare[] = subRecords.map(mapRecordToGroupCare)
  // const lambs: Lamb[] = records.map(record => mapRecordToLamb(record, groupCare))
  return mockLambs
}

const getNameGroupCare = (groupCare: GroupCare[], id: number | null): string | null => {
	const group = groupCare.find(group => group.id === id)
	return group ? group.name : null
}

const mapRecordToGroupCare = (record: IRecord): GroupCare => {
  const groupCare: GroupCare = {
    id: getNumber(record.id),
    name: getString(record.name),
    des: getString(record.des),
    day: getString(record.day),
  }
  return groupCare
}

function mapRecordToLamb(record: IRecord,groupCare:GroupCare[]): Lamb {
  const lamb: Lamb = {
    id: getNumber(record.id),
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
    groupCare:  getNameGroupCare(groupCare, getNumber(record.groupCare)),
    age: getNumber(record.age),
    interesting: getString(record.interesting),
    ageInGod: getNumber(record.ageInGod),
    remark: getString(record.remark),
    previouseChurch: getString(record.previouseChurch),
    gift: null,
    profilePicture: null,
  }
  return lamb
}

function getString(value: any): string | null {
  return value?.toString() ?? null
}

function getBoolean(value: any): boolean {
  return value?.toString() === 'true'
}

function getNumber(value: any): number | null {
  return value ? parseInt(value.toString()) : null
}
