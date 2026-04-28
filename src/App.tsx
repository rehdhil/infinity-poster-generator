import { useRef, useState } from 'react';
import type { PosterKind } from './types';
import { DEFAULTS } from './data/defaults';
import { POSTER_DIMENSIONS } from './brand';
import { PosterFrame } from './components/PosterFrame';
import { TemplatePicker } from './components/TemplatePicker';
import { DownloadButton } from './components/DownloadButton';

import { OpenCategoriesPoster } from './components/posters/OpenCategoriesPoster';
import { FeatureOnlinePoster } from './components/posters/FeatureOnlinePoster';
import { PowerTeamPoster } from './components/posters/PowerTeamPoster';
import { NetworkingPoster } from './components/posters/NetworkingPoster';
import { EducationPoster } from './components/posters/EducationPoster';
import { EventGeneralPoster } from './components/posters/EventGeneralPoster';
import { EventSpeakerPoster } from './components/posters/EventSpeakerPoster';
import { ThemePoster } from './components/posters/ThemePoster';

import { OpenCategoriesForm } from './components/forms/OpenCategoriesForm';
import { FeatureOnlineForm } from './components/forms/FeatureOnlineForm';
import { PowerTeamForm } from './components/forms/PowerTeamForm';
import { NetworkingForm } from './components/forms/NetworkingForm';
import { EducationForm } from './components/forms/EducationForm';
import { EventGeneralForm } from './components/forms/EventGeneralForm';
import { EventSpeakerForm } from './components/forms/EventSpeakerForm';
import { ThemeForm } from './components/forms/ThemeForm';

const FILENAMES: Record<PosterKind, string> = {
  'open-categories': 'bni-open-categories',
  'feature-online': 'bni-feature-online',
  'power-team': 'bni-power-team',
  'networking': 'bni-networking',
  'education': 'bni-education',
  'event-general': 'bni-event-general',
  'event-speaker': 'bni-event-speaker',
  'theme': 'bni-30sec-theme',
};

export default function App() {
  const [kind, setKind] = useState<PosterKind>('open-categories');
  const targetRef = useRef<HTMLDivElement>(null);

  const [openCategories, setOpenCategories] = useState(DEFAULTS.openCategories);
  const [featureOnline, setFeatureOnline] = useState(DEFAULTS.featureOnline);
  const [powerTeam, setPowerTeam] = useState(DEFAULTS.powerTeam);
  const [networking, setNetworking] = useState(DEFAULTS.networking);
  const [education, setEducation] = useState(DEFAULTS.education);
  const [eventGeneral, setEventGeneral] = useState(DEFAULTS.eventGeneral);
  const [eventSpeaker, setEventSpeaker] = useState(DEFAULTS.eventSpeaker);
  const [theme, setTheme] = useState(DEFAULTS.theme);

  const dimensions = POSTER_DIMENSIONS[kind];

  const renderPoster = () => {
    switch (kind) {
      case 'open-categories': return <OpenCategoriesPoster data={openCategories} />;
      case 'feature-online': return <FeatureOnlinePoster data={featureOnline} />;
      case 'power-team': return <PowerTeamPoster data={powerTeam} />;
      case 'networking': return <NetworkingPoster data={networking} />;
      case 'education': return <EducationPoster data={education} />;
      case 'event-general': return <EventGeneralPoster data={eventGeneral} />;
      case 'event-speaker': return <EventSpeakerPoster data={eventSpeaker} />;
      case 'theme': return <ThemePoster data={theme} />;
    }
  };

  const renderForm = () => {
    switch (kind) {
      case 'open-categories': return <OpenCategoriesForm data={openCategories} onChange={setOpenCategories} />;
      case 'feature-online': return <FeatureOnlineForm data={featureOnline} onChange={setFeatureOnline} />;
      case 'power-team': return <PowerTeamForm data={powerTeam} onChange={setPowerTeam} />;
      case 'networking': return <NetworkingForm data={networking} onChange={setNetworking} />;
      case 'education': return <EducationForm data={education} onChange={setEducation} />;
      case 'event-general': return <EventGeneralForm data={eventGeneral} onChange={setEventGeneral} />;
      case 'event-speaker': return <EventSpeakerForm data={eventSpeaker} onChange={setEventSpeaker} />;
      case 'theme': return <ThemeForm data={theme} onChange={setTheme} />;
    }
  };

  return (
    <div className="min-h-dvh px-4 pb-10 pt-5 sm:px-6 lg:p-10">
      <header className="mb-4 lg:mb-6">
        <h1 className="font-display text-3xl sm:text-4xl tracking-wider leading-none">
          BNI Infinity Poster Generator
        </h1>
        <p className="text-white/60 text-sm mt-1">
          Pick a template, fill the form, download the poster.
        </p>
      </header>

      <TemplatePicker active={kind} onChange={setKind} />

      <div className="mt-6 lg:mt-8 grid gap-6 lg:gap-8 lg:grid-cols-[400px_1fr]">
        {/* Preview — first on mobile (visible immediately), right column on desktop */}
        <div className="order-1 lg:order-2">
          <div className="flex justify-center">
            <PosterFrame
              ref={targetRef}
              width={dimensions.width}
              height={dimensions.height}
              maxPreviewWidth={432}
            >
              {renderPoster()}
            </PosterFrame>
          </div>
        </div>

        {/* Form */}
        <div className="order-2 lg:order-1 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
          {renderForm()}
          <div className="mt-6">
            <DownloadButton
              targetRef={targetRef}
              filename={FILENAMES[kind]}
              dimensions={dimensions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
