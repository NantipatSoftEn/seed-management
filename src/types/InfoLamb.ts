interface Lamb {
  id: number
  profilePicture: string | null // Nullable since it's a TEXT field
  nickName: string | null
  firstName: string | null
  lastName: string | null
  email: string
  birthday: string | null // Assuming DATE is stored as a string in SQLite
  personality: string | null
  address: string | null
  phoneNumber: string | null
  job: string | null
  interests: string | null

	socialAccounts:SocialAccounts
	religiousInfo:ReligiousInfo
}


// Interface for the SocialAccounts table
interface SocialAccounts {
  platformName: string | null
  URL: string | null
}

// Interface for the ReligiousInfo table
interface ReligiousInfo {
  previousChurch: string | null
  age: number | null // DECIMAL(10, 2) could be a number
  remark: string | null
}