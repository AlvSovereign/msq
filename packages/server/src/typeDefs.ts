import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @isAuthenticated on FIELD_DEFINITION

  enum AccountType {
    BASIC
    PREMIUM
    SUPER
  }

  enum Role {
    ARTIST
    FAN
  }

  enum CollectionType {
    SINGLE
    EP
    ALBUM
    MIX
  }

  enum SocialType {
    FACEBOOK
    TWITTER
    INSTAGRAM
    TIKTOK
    SOUNDCLOUD
    SPOTIFY
  }

  enum DanceGenre {
    KIZOMBA
    URBAN_KIZ
    GHETTO_ZOUK
    AFROBEATS
    SALSA
    BACHATA
    SWING
    NEW_STYLE_HUSTLE
    BRAZILIAN_ZOUK
  }

  union CollectionEntry = Track | Mix

  type Settings {
    id: ID!
    userId: ID!
    emailNotifications: Boolean!
    pushNotifications: Boolean!
  }

  type SocialLinks {
    type: SocialType!
    url: String!
  }

  type Collection {
    id: ID!
    createdAt: String!
    title: String!
    artists: [Artist!]!
    collectionType: CollectionType!
    tracks: [CollectionEntry!]!
    label: [String!]!
    collectionImage: String
    createdBy: Artist
    yearPublished: String!
    credits: String
  }

  type Artist {
    _id: String
    id: ID!
    createdAt: String!
    name: String!
    avatar: String
    releases: [Collection]
    owner: User!
    fans: [User!]
    countries: [String!]
    biography: String
    tag: String
    socialLinks: [SocialLinks!]
    website: String
    galleryImages: [String!]
  }

  type Mix {
    id: ID!
    createdAt: String!
    createdBy: [Artist!]
    producedBy: [Artist!]
    trackImage: String
    filename: String!
    title: String!
    likes: Int
    length: String!
    label: String
    plays: Int
    tracks: [Track]
    trackGenre: [DanceGenre]
  }

  type Track {
    id: ID!
    createdAt: String!
    createdBy: [Artist!]
    performedBy: [Artist!]
    producedBy: [Artist!]
    artists: [Artist!]
    trackImage: String
    filename: String!
    title: String!
    likes: Int
    length: String!
    label: String
    plays: Int
    trackGenre: [DanceGenre]
    credits: String
  }

  type Playlist {
    id: ID!
    createdAt: String!
    isPrivate: Boolean!
    tracks: [Track!]!
    playlistImage: String
    createdBy: User!
    followers: [User!]
    trackGenre: DanceGenre
    title: String!
    description: String
  }

  type User {
    _id: ID
    id: ID!
    email: String!
    name: String!
    createdAt: String!
    isVerified: Boolean!
    isRegistered: Boolean!
    accountType: AccountType!
    role: Role!
    avatar: String
    alias: String
    artist: Artist
    token: String
    playlists: [Playlist!]
    collectionsSaved: [Collection!]
    following: [Artist!]
    friends: [User!]
    likedSongs: [CollectionEntry!]
    countries: [String!]
    settings: Settings
  }

  input NewUserInput {
    email: String!
    name: String
    password: String
    picture: String
    artist: String
  }

  input SigninUserInput {
    email: String!
    password: String!
  }

  input SocialSigninUserInput {
    email: String!
    name: String!
    avatar: String
  }

  input SocialLinksInput {
    type: SocialType!
    url: String!
  }

  input NewArtistInput {
    name: String!
    avatar: String
    country: String!
    biography: String
    tag: String
    socialLinks: [SocialLinksInput!]
    website: String
    galleryImages: [String!]
  }

  input ArtistInput {
    _id: ID!
    name: String
    avatar: String
    # releases: [Collection]
    countries: [String]
    biography: String
    tag: String
    # socialLinks: [SocialLinks]
    website: String
    galleryImages: [String]
  }

  input UpdatedUserInput {
    _id: ID!
    email: String
    name: String
    artist: ArtistInput
    avatar: String
    alias: String
    # playlists: [Playlist!]
    # collectionsSaved: [Collection!]
    # following: [Artist!]
    # friends: [User!]
    # likedSongs: [CollectionEntry!]
    # country: [String!]
    # settings: Settings
  }

  type Query {
    me: User! @isAuthenticated
    artist(input: ArtistInput!): Artist!
  }

  type Mutation {
    artist(input: NewArtistInput!): Artist! @isAuthenticated
    me(input: NewUserInput!): User!
    signin(input: SigninUserInput!): User!
    socialSignin(input: SocialSigninUserInput!): User!
    updateMe(input: UpdatedUserInput!): User
  }
`;

export default typeDefs;

export interface IUser {
  _id: String;
  id: String;
  email: String;
  name: String;
  createdAt: String;
  isVerified: Boolean;
  isRegistered: Boolean;
  accountType: EAccountType;
  role: ERole;
  avatar: String;
  alias: String;
  token: String;
  artist: Artist;
  // playlists: [Playlist!]
  // collectionsSaved: [Collection!]
  // following: [Artist!]
  // friends: [User!]
  // likedSongs: [CollectionEntry!]
  // country: [String!]
  // settings: Settings
}

export interface Artist {
  [key: string]: any;
}

export enum EAccountType {
  BASIC,
  PREMIUM,
  SUPER,
}

export enum ERole {
  ARTIST,
  FAN,
}
