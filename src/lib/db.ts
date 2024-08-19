import sqlite from 'better-sqlite3'
export const db = sqlite(':memory:')

db.exec(`CREATE TABLE IF NOT EXISTS User (
			UserID INTEGER PRIMARY KEY AUTOINCREMENT,
			ProfilePicture TEXT,
			NickName TEXT,
			FirstName TEXT,
			LastName TEXT,
			Email TEXT UNIQUE NOT NULL,
			Birthday DATE,
			Personality TEXT,
			Address TEXT,
			PhoneNumber TEXT,
			Job TEXT,
			Interests TEXT
	);
`);

db.exec(`CREATE TABLE IF NOT EXISTS Settings (
			SettingID INTEGER PRIMARY KEY AUTOINCREMENT,
			UserID INTEGER,
			Language TEXT,
			Timezone TEXT,
			FOREIGN KEY (UserID) REFERENCES User(UserID)
	);
`);


db.exec(`CREATE TABLE IF NOT EXISTS SocialAccounts (
			AccountID INTEGER PRIMARY KEY AUTOINCREMENT,
			UserID INTEGER,
			PlatformName TEXT,
			URL TEXT,
			FOREIGN KEY (UserID) REFERENCES User(UserID)
	);
`);

db.exec(`CREATE TABLE IF NOT EXISTS ReligiousInfo (
			ReligiousInfoID INTEGER PRIMARY KEY AUTOINCREMENT,
			UserID INTEGER,
			PreviousChurch TEXT,
			Age DECIMAL(10, 2),
			Remark TEXT,
			FOREIGN KEY (UserID) REFERENCES User(UserID)
	);
`);

console.log('Tables created successfully.');
