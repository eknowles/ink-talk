export interface INavItem {
  name: string;
  children?: INavItem[];
}

export const NAV: INavItem[] = [
  {
    name: 'Component Library', children: [
      { name: 'Table' },
    ]
  },
  {
    name: 'Jira', children: [
      { name: 'Notifications' },
      { name: 'Board' },
      { name: 'Backlog' },
      { name: 'Issues' },
      { name: 'Versions' },
      { name: 'Projects' },
    ]
  },
  {
    name: 'GitHub', children: [
      { name: 'Notifications' },
      { name: 'Pull Requests' },
      { name: 'Open Issues' },
      {
        name: 'Organisation', children: [
          { name: 'Members' },
          { name: 'Outside Collaborators' },
        ]
      },
    ]
  },
  {
    name: 'Azure DevOps', children: [
      { name: 'Pipelines' },
      { name: 'Releases' },
      { name: 'Environments' },
    ]
  },
  {
    name: 'Gmail', children: [
      { name: 'Inbox' },
      { name: 'Sent' },
      { name: 'Spam' },
    ]
  },
  {
    name: 'Calendar', children: [
      { name: 'Today' },
      { name: 'This Week' },
      { name: 'This Month' },
    ]
  },
  {
    name: 'Meetup', children: [
      { name: 'Upcoming Events' },
    ]
  },
];
