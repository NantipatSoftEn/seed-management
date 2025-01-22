/* eslint-disable no-param-reassign */
import { GristDocAPI, type IRecord } from 'grist-api'
import { mockLambs } from 'src/mocks/lamps'
import type { GiftFromGod, GroupCare, Lamb } from 'src/types/InfoLamb'

export async function getLambs(): Promise<Lamb[]> {
  // console.log('getLambs')
  const docUrl = process.env.DOC_URL
  if (!docUrl) {
    throw new Error('DOC_URL environment variable is not defined')
  }

  const api = new GristDocAPI(docUrl)
  const mainRecords: IRecord[] = await api.fetchTable('LambInfo_Main')
  const groupRecords: IRecord[] = await api.fetchTable('GroupCare')
  const gifFromGodRecords: IRecord[] = await api.fetchTable('GiftFromGod')
  // console.log('gifFromGodRecords', gifFromGodRecords)
	const gifFromGod: GiftFromGod[] = gifFromGodRecords.map(getGiftFromGod)
  const groupCare: GroupCare[] = groupRecords.map(mapRecordToGroupCare)
  let lambs: Lamb[] = mainRecords.map(record =>
    mapRecordToLamb(record, groupCare)
  )
	lambs = assignGifToLamb(lambs, gifFromGod)
	// console.log('lambs', lambs)
  return lambs
  // return mockLambsconsole.log('getLambs')
}

const assignGifToLamb = (lambs: Lamb[], gifs: GiftFromGod[]): Lamb[] => {
  const lambsWithGift =  lambs.map((l: Lamb) => {
    const matchingGif = gifs.find((g: GiftFromGod) => g.lambId === l.id)
    if (matchingGif) {
      l.gift = matchingGif
    }
		return l
  })
	return lambsWithGift
}

const getNameGroupCare = (
  groupCare: GroupCare[],
  id: number | null
): string | null => {
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

function mapRecordToLamb(record: IRecord, groupCare: GroupCare[]): Lamb {
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
    job: getString(record.job),
    interests: getString(record.interests),
    persernality: getString(record.persernality),
    isTimote: getBoolean(record.isTimote),
    status: getString(record.status),
    groupCare: getNameGroupCare(groupCare, getNumber(record.groupCare)),
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


function getGiftFromGod(data: any): GiftFromGod {
  const gift: GiftFromGod = {
    id: getNumber(data.id),
    manualSort: getNumber(data.manualSort),
    lambId: getNumber(data.lambId),
    Pastoral: getNumber(data.Pastoral),
    Teaching: getNumber(data.Teaching),
    WordContainerIntelligence: getNumber(data.WordContainerIntelligence),
    WarningAndEncouragement: getNumber(data.WarningAndEncouragement),
    ObservationOfSpirits: getNumber(data.ObservationOfSpirits),
    Donation: getNumber(data.Donation),
    Pampering: getNumber(data.Pampering),
    Compassion: getNumber(data.Compassion),
    Missionary: getNumber(data.Missionary),
    Announcer: getNumber(data.Announcer),
    GuestReception: getNumber(data.GuestReception),
    belief: getNumber(data.belief),
    Owner: getNumber(data.Owner),
    Executive: getNumber(data.Executive),
    Miracle: getNumber(data.Miracle),
    TreatmentOfDisease: getNumber(data.TreatmentOfDisease),
    SpeakingInStrangeLanguages: getNumber(data.SpeakingInStrangeLanguages),
    Ambassador: getNumber(data.Ambassador),
    BeingSingle: getNumber(data.BeingSingle),
    PrayerOfSupplication: getNumber(data.PrayerOfSupplication),
    Exorcism: getNumber(data.Exorcism),
    Benefactor: getNumber(data.Benefactor),
    Prophecy: getNumber(data.Prophecy),
    Status: getString(data.Status),
    StrangelanguageTranslation: getNumber(data.StrangelanguageTranslation),
    WordContainKnowledge_: getNumber(data.WordContainKnowledge_),
    gristHelper_Display: getString(data.gristHelper_Display),
  };
  return gift;
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
