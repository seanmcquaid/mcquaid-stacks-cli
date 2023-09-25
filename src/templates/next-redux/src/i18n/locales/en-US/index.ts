/* eslint "sort-keys": ["warn", "asc", {"caseSensitive": false, "natural": false, "minKeys": 2}] */

const enUSLocale = {
  App: {
    appName: 'Tech Talk Pro',
    companyName: '© {{year}} SeanMcQuaidCode',
  },
  ConfigurePage: {
    goToNextPage: 'Go to next page',
    minutes: ' {{numberOfMinutes}} minutes',
    subtitle:
      'Before we get into the nitty gritty, provide some basic info about the topic and how long you would like the talk to be!',
    title: 'Configure Your New Talk',
  },
  CreateAbstractPage: {
    goToNextPage: 'Happy with the abstract? Go to the next page!',
    load: 'Load',
    reload: 'Reload',
    subtitle: "Now that you have a topic, let's create an abstract for it!",
    title: 'Create Abstract',
    tryAgain: 'Unhappy with the results? Try again!',
  },
  CreateSlidesPage: {
    goToNextPage: 'Happy with the slides? Go to the next page!',
    load: 'Load',
    reload: 'Reload',
    subtitle:
      "Now that you have all of the content you will need, let's create some slides!",
    title: 'Create Slides',
    tryAgain: 'Unhappy with the results? Try again!',
  },
  DashboardPage: {
    talksCardInfo: 'Check out your current talks or create a new one here!',
    talksCardTitle: 'Talks',
    title: 'Dashboard',
  },
  HomePage: {
    signIn: 'Sign In',
    subtitle:
      'The easiest way for you to prepare to apply to your first tech conference!',
  },
  NotFoundPage: {
    goHome: 'Go Home',
    title: 'Page Not Found',
  },
  SelectTopicPage: {
    load: 'Load Topics',
    reload: 'Reload',
    selectThisTopic: 'Select This Topic',
    subtitle:
      'Based on your selections from earlier, we are going to generate some topic options for you. Click the button below to see!',
    title: 'Time to figure out your topic!',
    tryAgain: 'Unhappy with the results? Try again!',
  },
  TalksPage: {
    createNewTalk: 'Create New Talk',
    createNewTalkInfo:
      'Go through our flow and create a new talk to submit to conferences!',
    title: 'Talks',
  },
} as const;

export default enUSLocale;
