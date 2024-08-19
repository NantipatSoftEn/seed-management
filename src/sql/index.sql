-- สร้างตาราง User
CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    ProfilePicture VARCHAR(255),
    NickName VARCHAR(50),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE NOT NULL,
    Birthday DATE,
    Personality VARCHAR(50),
    Address VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Occupation VARCHAR(50),
    Interests TEXT
);

-- สร้างตาราง Settings
CREATE TABLE Settings (
    SettingID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Language VARCHAR(50),
    Timezone VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- สร้างตาราง SocialAccounts
CREATE TABLE SocialAccounts (
    AccountID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    PlatformName VARCHAR(50),
    URL VARCHAR(255),
    Status ENUM('Connected', 'Disconnected'),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- สร้างตาราง PasswordInformation
CREATE TABLE PasswordInformation (
    PasswordID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    CurrentPassword VARCHAR(255) NOT NULL,
    NewPassword VARCHAR(255) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- สร้างตาราง ReligiousInfo
CREATE TABLE ReligiousInfo (
    ReligiousInfoID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ReligiousAffiliation VARCHAR(100),
    DonationAmount DECIMAL(10, 2),
    OtherDetails TEXT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);
