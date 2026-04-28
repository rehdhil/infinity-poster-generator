export type PosterKind =
  | 'open-categories'
  | 'feature-online'
  | 'power-team'
  | 'networking'
  | 'education'
  | 'event-general'
  | 'event-speaker';

export interface OpenCategoriesData {
  categories: string[];
  growthCoordinatorName: string;
  growthCoordinatorPhone: string;
  meetingDate: string;
  time: string;
}

export interface SpeakerProfile {
  headshotUrl: string;
  name: string;
  business: string;
  category: string;
  topic: string;
}

export interface FeatureOnlineData {
  date: string;
  time: string;
  speakerOne: SpeakerProfile;
  speakerTwo: SpeakerProfile;
}

export interface TeamMember {
  headshotUrl: string;
  name: string;
}

export interface PowerTeamData {
  date: string;
  time: string;
  teamName: string;
  members: TeamMember[];
}

export interface HostProfile {
  headshotUrl: string;
  name: string;
}

export interface NetworkingData {
  date: string;
  time: string;
  topic: string;
  hostOne: HostProfile;
  hostTwo: HostProfile;
}

export interface EducationData {
  date: string;
  time: string;
  speakerName: string;
  speakerRole: string;
  headshotUrl: string;
  topic: string;
}

export interface EventGeneralData {
  categoryLabel: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  venueImageUrl?: string;
}

export interface EventSpeakerData {
  eventTypeLabel: string;
  speakerName: string;
  designation: string;
  headshotUrl: string;
  talkTitle: string;
  date: string;
  time: string;
  venue: string;
  venueImageUrl?: string;
}

export interface ChapterMember {
  name: string;
  business: string;
  category: string;
}
