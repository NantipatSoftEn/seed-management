interface User {
	UserID: number;
	ProfilePicture: string | null;  // Nullable since it's a TEXT field
	NickName: string | null;
	FirstName: string | null;
	LastName: string | null;
	Email: string;
	Birthday: string | null;  // Assuming DATE is stored as a string in SQLite
	Personality: string | null;
	Address: string | null;
	PhoneNumber: string | null;
	Job: string | null;
	Interests: string | null;
}

// Interface for the Settings table
interface Settings {
	SettingID: number;
	UserID: number;
	Language: string | null;
	Timezone: string | null;
}

// Interface for the SocialAccounts table
interface SocialAccounts {
	AccountID: number;
	UserID: number;
	PlatformName: string | null;
	URL: string | null;
}

// Interface for the ReligiousInfo table
interface ReligiousInfo {
	ReligiousInfoID: number;
	UserID: number;
	PreviousChurch: string | null;
	Age: number | null;  // DECIMAL(10, 2) could be a number
	Remark: string | null;
}
