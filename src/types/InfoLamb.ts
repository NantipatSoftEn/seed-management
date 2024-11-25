interface Lamb {
  id: number | null
  nickName: string | null
  firstName: string | null
  lastName: string | null

	gender: string | null
	address: string | null,
	email: string | null
	phone: string | null
  birthday: string | null 
  personality: string | null
  phoneNumber: string | null
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
	gift: string | null
	profilePicture: string | null 

}

// Interface for the SocialAccounts table
interface SocialAccounts {
  facebook: string | null
  line: string | null
  instagram: string | null
  twitter: string | null
}

// Interface for the ReligiousInfo table
interface ReligiousInfo {
  mentor: string | null
  groupCare: string | null
  previousChurch: string | null
  age: number | null // DECIMAL(10, 2) could be a number
  remark: string | null
}

