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

	SocialAccounts:SocialAccounts
	ReligiousInfo:ReligiousInfo
}


// Interface for the SocialAccounts table
interface SocialAccounts {
  PlatformName: string | null
  URL: string | null
}

// Interface for the ReligiousInfo table
interface ReligiousInfo {
  PreviousChurch: string | null
  Age: number | null // DECIMAL(10, 2) could be a number
  Remark: string | null
}
