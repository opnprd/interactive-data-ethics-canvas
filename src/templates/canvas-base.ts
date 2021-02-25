import type { BlobState } from '../types';
import { Group } from "../types";

export const baseLayout: BlobState[] = [
  {
    id: 'sources',
    group: Group.KNOW,
    title: 'Data Sources',
    description: 'Name/describe your project’s key data sources, whether you’re collecting data yourself or accessing via third parties.',
    editor: 'Basic',
    row: 0,
    column: 0,
  },
  {
    group: Group.KNOW,
    id: 'rights',
    title: 'Rights around data sources',
    description: 'Where did you get the data from? Is it produced by an organisation or collected directly from individuals?',
    editor: 'Basic',
    row: 0,
    column: 1,
  },
  {
    group: Group.KNOW,
    id: 'limitations',
    title: 'Limitations in data sources',
    description: 'Are there limitations that could influence your project’s outcomes?',
    editor: 'List',
    row: 0,
    column: 2,
  },
  {
    group: Group.KNOW,
    id: 'ethical-legislative',
    title: 'Ethical and legislative context',
    description: 'What existing ethical codes apply to your sector or project? What legislation, policies, or other regulation shape how you use data?',
    editor: 'List',
    row: 0,
    column: 3,
  },
  {
    group: Group.EXPLORE,
    id: 'reasons',
    title: 'Your reason for using data',
    description: 'What is your primary purpose for collecting and using data in this project?',
    editor: 'Basic',
    row: 1,
    column: 0,
  },
  {
    group: Group.EXPLORE,
    id: 'positive-effects',
    title: 'Positive effects on people',
    description: 'Which individuals, groups, demographics or organisations will be positively affected by this project? How?',
    editor: 'Basic',
    row: 1,
    column: 1,
  },
  {
    group: Group.EXPLORE,
    id: 'negative-effects',
    title: 'Negative effects on people',
    description: 'Who could be negatively affected by this project?',
    editor: 'Basic',
    row: 1,
    column: 2,
  },
  {
    group: Group.EXPLORE,
    id: 'mitigations',
    title: 'Minimising negative effects',
    description: 'What steps can you take to minimise harm?',
    editor: 'Basic',
    row: 1,
    column: 3,
  },
  {
    group: Group.PLAN,
    id: 'engaging',
    title: 'Engaging with people',
    description: 'How can people engage with you about the project?',
    editor: 'Basic',
    row: 2,
    column: 0,
  },
  {
    group: Group.PLAN,
    id: 'communicating',
    title: 'Communicating your purpose',
    description: 'Do people understand your purpose – especially people whom the data is about or who are impacted by its use?',
    editor: 'Basic',
    row: 2,
    column: 1,
  },
  {
    group: Group.PLAN,
    id: 'openness',
    title: 'Openness and transparency',
    description: 'How open can you be about this project? Could you publish your methodology, metadata, datasets, code or impact measurements?',
    editor: 'Basic',
    row: 2,
    column: 2,
  },
  {
    group: Group.PLAN,
    id: 'sharing',
    title: 'Sharing data with others',
    description: 'Are you going to be sharing data with other organisations? If so, who?',
    editor: 'Basic',
    row: 2,
    column: 3,
  },
  {
    group: Group.INTEGRATE,
    id: 'implementation',
    title: 'Ongoing implementation',
    description: 'Are you routinely building in thoughts, ideas and considerations of people affected by your project? How?',
    editor: 'Basic',
    row: 0,
    column: 4,
  },
  {
    group: Group.INTEGRATE,
    id: 'review',
    title: 'Reviews and iterations',
    description: 'How will ongoing data ethics issues be measured, monitored, discussed and actioned?',
    editor: 'Basic',
    row: 1,
    column: 4,
  },
  {
    group: Group.INTEGRATE,
    id: 'actions',
    title: 'Your actions',
    description: 'What actions will you take before moving forward with this project? Which should take priority?',
    editor: 'Basic',
    row: 2,
    column: 4,
  },
];
