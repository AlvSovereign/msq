interface IUser {
  id: String;
  email: String;
  name: String;
  createdAt: String;
  verified: Boolean;
  accountType: EAccountType;
  role: ERole;
  avatar: String;
  alias: String;
  token: String;
  // playlists: [Playlist!]
  // collectionsSaved: [Collection!]
  // following: [Artist!]
  // friends: [User!]
  // likedSongs: [CollectionEntry!]
  // country: [String!]
  // settings: Settings
}

enum EAccountType {
  BASIC,
  PREMIUM,
  SUPER,
}

enum ERole {
  ARTIST,
  FAN,
}

export { EAccountType, ERole, IUser };
