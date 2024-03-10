export interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  email: string;
  bannerUrl: string;
  avatarUrl: string;
  githubUrl: string;
  gitlabUrl: string;
  inserted_at: string;
  updated_at: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  ownerId: string;
  inserted_at: string;
  updated_at: string;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  isDefault: boolean;
  isPrivate: boolean;
  communityId: string;
  memberCount: number;
  inserted_at: string;
  updated_at: string;
}

export type CommunityPermissions = {
  isAdmin: boolean;
  isMember: boolean;
  isBlocked: boolean;
  isMod: boolean;
};

export type Thread = {
  id: string;
  name: string;
  inserted_at: string;
  updated_at: string;
};
