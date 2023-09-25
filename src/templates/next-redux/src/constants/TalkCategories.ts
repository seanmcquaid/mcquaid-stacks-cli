import { z } from 'zod';

const talkCategoiesOptions = [
  'Artificial Intelligence',
  'Blockchain',
  'Cloud Computing',
  'Cyber Security',
  'Data Science',
  'DevOps',
  'Internet of Things',
  'Machine Learning',
  'Mobile Development',
  'Programming Languages',
  'Quantum Computing',
  'Software Architecture',
  'Software Engineering',
  'Web Development',
  'Android Development',
  'iOS Development',
  'Backend Development',
  'Leadership',
] as const;

const TalkCategories = z.enum(talkCategoiesOptions);

export default TalkCategories;
