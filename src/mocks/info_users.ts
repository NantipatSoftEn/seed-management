// Mock data for the User table
const mockUsers: User[] = [
	{
			UserID: 1,
			ProfilePicture: "https://example.com/profile1.jpg",
			NickName: "JohnDoe",
			FirstName: "John",
			LastName: "Doe",
			Email: "johndoe@example.com",
			Birthday: "1990-01-01",
			Personality: "Friendly",
			Address: "123 Main St, Anytown, USA",
			PhoneNumber: "123-456-7890",
			Job: "Software Developer",
			Interests: "Coding, Reading, Traveling"
	},
	{
			UserID: 2,
			ProfilePicture: "https://example.com/profile2.jpg",
			NickName: "JaneSmith",
			FirstName: "Jane",
			LastName: "Smith",
			Email: "janesmith@example.com",
			Birthday: "1985-05-15",
			Personality: "Outgoing",
			Address: "456 Elm St, Othertown, USA",
			PhoneNumber: "987-654-3210",
			Job: "Graphic Designer",
			Interests: "Art, Photography, Music"
	}
];

// Mock data for the Settings table
const mockSettings: Settings[] = [
	{
			SettingID: 1,
			UserID: 1,
			Language: "English",
			Timezone: "America/New_York"
	},
	{
			SettingID: 2,
			UserID: 2,
			Language: "Spanish",
			Timezone: "America/Los_Angeles"
	}
];

// Mock data for the SocialAccounts table
const mockSocialAccounts: SocialAccounts[] = [
	{
			AccountID: 1,
			UserID: 1,
			PlatformName: "Twitter",
			URL: "https://twitter.com/johndoe"
	},
	{
			AccountID: 2,
			UserID: 1,
			PlatformName: "LinkedIn",
			URL: "https://linkedin.com/in/johndoe"
	},
	{
			AccountID: 3,
			UserID: 2,
			PlatformName: "Instagram",
			URL: "https://instagram.com/janesmith"
	}
];

// Mock data for the ReligiousInfo table
const mockReligiousInfo: ReligiousInfo[] = [
	{
			ReligiousInfoID: 1,
			UserID: 1,
			PreviousChurch: "St. John's Church",
			Age: 30.5,
			Remark: "Active member since 2010"
	},
	{
			ReligiousInfoID: 2,
			UserID: 2,
			PreviousChurch: "Grace Community Church",
			Age: 35.2,
			Remark: "Volunteers regularly"
	}
];
