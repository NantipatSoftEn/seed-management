export interface Lamb {
  id: number | null
  nickName: string | null
  firstName: string | null
  lastName: string | null

  gender: string | null
  address: string | null
  email: string | null
  phone: string | null
  birthday: string | null
  personality: string | null
  job: string | null
  interests: string | null
  interesting: string | null
  persernality: string | null

  isTimote: boolean
  status: string | null
  groupCare: string | null
  age: number | null
  ageInGod: number | null
  remark: string | null
  previouseChurch: string | null
  gift: GiftFromGod | null
  profilePicture: string | null
}

export interface GroupCare {
  id: number | null
  name: string | null
  des: string | null
  day: string | null
}

export interface GiftFromGod {
  id: number | null;
  manualSort: number | null;
  lambId: number | null;
  Pastoral: number | null;
  Teaching: number | null;
  WordContainerIntelligence: number | null;
  WarningAndEncouragement: number | null;
  ObservationOfSpirits: number | null;
  Donation: number | null;
  Pampering: number | null;
  Compassion: number | null;
  Missionary: number | null;
  Announcer: number | null;
  GuestReception: number | null;
  Belief: number | null;
  Owner: number | null;
  Executive: number | null;
  Miracle: number | null;
  TreatmentOfDisease: number | null;
  SpeakingInStrangeLanguages: number | null;
  Ambassador: number | null;
  BeingSingle: number | null;
  PrayerOfSupplication: number | null;
  Exorcism: number | null;
  Benefactor: number | null;
  Prophecy: number | null;
  Status: string | null;
  StrangelanguageTranslation: number | null;
  WordContainKnowledge: number | null;
  gristHelper_Display: string | null;
}
