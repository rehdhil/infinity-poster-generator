import type {
  OpenCategoriesData,
  FeatureOnlineData,
  PowerTeamData,
  NetworkingData,
  EducationData,
  EventGeneralData,
  EventSpeakerData,
  ThemeData,
} from '../types';

const empty = (n: number): string[] => Array.from({ length: n }, () => '');

const emptySpeaker = () => ({
  headshotUrl: '',
  name: '',
  business: '',
  category: '',
});

const emptyMember = () => ({ headshotUrl: '', name: '' });
const emptyHost = () => ({ headshotUrl: '', name: '' });

export const DEFAULT_TIME = '7:30 AM';

export const EVENTS_COORDINATORS = [
  { name: 'Athira Bindhu', phone: '+91 7356 770 318' },
  { name: 'Noby Mon M Jacob', phone: '+91 4842 322 888' },
  { name: 'Nabeela Sait', phone: '+91 9746 422 244' },
] as const;

export const DEFAULTS = {
  openCategories: {
    categories: empty(12),
    growthCoordinatorName: 'P S Sudheer',
    growthCoordinatorPhone: '+91 8891 064 567',
    meetingDate: '',
    time: DEFAULT_TIME,
  } satisfies OpenCategoriesData,

  featureOnline: {
    date: '',
    time: DEFAULT_TIME,
    speakerOne: emptySpeaker(),
    speakerTwo: emptySpeaker(),
  } satisfies FeatureOnlineData,

  powerTeam: {
    date: '',
    time: DEFAULT_TIME,
    teamName: 'HOSPITALITY',
    members: [emptyMember()],
  } satisfies PowerTeamData,

  networking: {
    date: '',
    time: DEFAULT_TIME,
    topic: '',
    hostOne: { ...emptyHost(), name: "Gerald D'Souza" },
    hostTwo: { ...emptyHost(), name: 'Jagannath Dhamodaran' },
  } satisfies NetworkingData,

  education: {
    date: '',
    time: DEFAULT_TIME,
    speakerName: 'Lijo Isac',
    speakerRole: 'Education Coordinator',
    headshotUrl: '',
    topic: '',
  } satisfies EducationData,

  eventGeneral: {
    categoryLabel: 'CHAPTER EVENT',
    title: '',
    date: '',
    time: '7:00 PM',
    venue: '',
    description: '',
  } satisfies EventGeneralData,

  eventSpeaker: {
    eventTypeLabel: 'GUEST SPEAKER',
    speakerOne: { name: '', designation: '', headshotUrl: '' },
    talkTitle: '',
    date: '',
    time: '7:00 PM',
    venue: '',
  } satisfies EventSpeakerData,

  theme: {
    meetingDate: '',
    time: DEFAULT_TIME,
    theme: '',
    description: '',
    coordinatorName: 'Shinju Lawrence',
    coordinatorPhone: '+91 9074 869 201',
  } satisfies ThemeData,
};
