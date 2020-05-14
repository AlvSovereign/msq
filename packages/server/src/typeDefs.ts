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

  enum ReleaseType {
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

  union ReleaseEntry = Track | Mix
  # union PerformedByEntry = Artist | String
  # union ProducedByEntry = Artist | String

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

  type Release {
    _id: ID!
    id: ID!
    createdAt: String!
    title: String!
    performedBy: [Artist!]!
    owner: Artist!
    releaseType: ReleaseType!
    tracks: [Track!]!
    label: [String!]!
    coverImage: String
    producedBy: [Artist!]!
    publishDate: String!
    credits: String
  }

  type Mix {
    _id: ID!
    id: ID!
    createdAt: String!
    producedBy: [Artist!]
    coverImage: String
    filename: String!
    title: String!
    likes: Int
    length: String!
    label: String
    plays: Int
    tracks: [Track]
    genre: [DanceGenre]
  }

  type Track {
    _id: ID!
    id: ID!
    createdAt: String!
    title: String!
    performedBy: [String!]
    producedBy: [String!]
    coverImage: String
    filename: String!
    likes: Int
    length: String!
    label: String
    plays: Int
    genre: [DanceGenre]
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
    genre: DanceGenre
    title: String!
    description: String
  }

  type Artist {
    _id: String
    id: ID!
    createdAt: String!
    name: String!
    avatar: String
    releases: [Release]
    owner: User!
    fans: [User!]
    countries: [String!]
    biography: String
    tag: String
    socialLinks: [SocialLinks!]
    website: String
    galleryImages: [String!]
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
    releasesSaved: [Release!]
    following: [Artist!]
    friends: [User!]
    likedSongs: [ReleaseEntry!]
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

  input NewTrackOrMixInput {
    filename: String!
    title: String!
    performedBy: [ArtistInput!]!
    producedBy: [ArtistInput!]!
    coverImage: String
    label: String
    length: String!
    genre: [DanceGenre!]
    credits: String
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
    releases: [ID!]
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
    # releasesSaved: [Release!]
    # following: [Artist!]
    # friends: [User!]
    # likedSongs: [ReleaseEntry!]
    # country: [String!]
    # settings: Settings
  }

  input NewReleaseInput {
    title: String!
    artists: [ArtistInput!]!
    releaseType: ReleaseType!
    tracks: [NewTrackOrMixInput!]
    label: [String]!
    coverImage: String
    producedBy: [ArtistInput!]!
    performedBy: [ArtistInput!]!
    publishDate: String!
    owner: ArtistInput!
    credits: String
  }

  type Query {
    me: User! @isAuthenticated
    artist(input: ArtistInput!): Artist!
  }

  type Mutation {
    artist(input: NewArtistInput!): Artist! @isAuthenticated
    updateArtist(input: ArtistInput!): Artist! @isAuthenticated
    createRelease(input: NewReleaseInput!): Release!
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
  // releasesSaved: [Release!]
  // following: [Artist!]
  // friends: [User!]
  // likedSongs: [ReleaseEntry!]
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
