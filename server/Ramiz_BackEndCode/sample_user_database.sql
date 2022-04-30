
CREATE SCHEMA `grouply`;
CREATE TABLE `grouply`.`User` (
  `user_ID` INT NOT NULL UNIQUE,
  `user_name` VARCHAR(30) NOT NULL,
  `user_age` INT NOT NULL,
  `user_nickname` VARCHAR(30) NOT NULL,
  `user_favGame` VARCHAR(30),
  `user_email` VARCHAR(45) NOT NULL,
  `user_passwordHash` VARCHAR(20) NOT NULL,
  `user_joinedDate` VARCHAR(11) NOT NULL,
  `user_lastActive` DATETIME NOT NULL,
  PRIMARY KEY (`user_ID`));
CREATE TABLE `grouply`.`games` (
  `game_id` INT NOT NULL UNIQUE,
  `game_name` VARCHAR(30) NOT NULL,
  `game_genre` VARCHAR(20) NOT NULL,
  `game_platform` VARCHAR(20) NOT NULL,
  `game_developer` VARCHAR(45) NOT NULL,
  `game_releaseDate` YEAR NOT NULL,
  `game_multiplayer` TINYINT NOT NULL,
  `game_campaign` TINYINT NOT NULL,
  `game_coop` TINYINT NOT NULL,
  PRIMARY KEY (`game_id`));
CREATE TABLE `grouply`.`groups` (
  `group_ID` INT NOT NULL UNIQUE,
  `group_name` VARCHAR(30) NOT NULL,
  `group_about` VARCHAR(100) NOT NULL,
  `group_member_count` INT NOT NULL,
  `group_language` VARCHAR(20) NOT NULL,
  `group_created` DATETIME NOT NULL,
  PRIMARY KEY (`group_ID`));
CREATE TABLE `grouply`.`UserPlays` (
  `user_ID` INT NOT NULL,
  `game_ID` INT NOT NULL,
  FOREIGN KEY (`user_ID`) REFERENCES grouply.User(user_ID),
  FOREIGN KEY (`game_ID`) REFERENCES grouply.games(game_ID));
CREATE TABLE `grouply`.`memberOfGroup` (
  `user_ID` INT NOT NULL,
  `group_ID` INT NOT NULL,
  FOREIGN KEY (`user_ID`) REFERENCES grouply.User(user_ID),
  FOREIGN KEY (`group_ID`) REFERENCES grouply.groups(group_ID));
CREATE TABLE `grouply`.`friendsWith` (
	`user_ID` INT NOT NULL,
	`friend_ID` INT NOT NULL,
  FOREIGN KEY (`user_ID`) REFERENCES grouply.User(user_ID),
  FOREIGN KEY (`friend_ID`) REFERENCES grouply.User(user_ID));

INSERT INTO grouply.User 
	(user_ID, 
    user_name, 
    user_age,
    user_nickname,
    user_favGame,
    user_email,
    user_passwordHash,
    user_joinedDate,
    user_lastActive) 
    VALUES
    (2748028,
    'Vlad',
    55,
    'shorty179',
    'hentaiUni',
    'deezNuts@gmail.com',
    'kqci73hcqu',
    '04/20/2022',
    NOW());
