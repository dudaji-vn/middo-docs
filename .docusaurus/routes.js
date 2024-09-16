import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c53'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'aad'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b26'),
            routes: [
              {
                path: '/conversation/how-to-use-conversation/converation-list',
                component: ComponentCreator('/conversation/how-to-use-conversation/converation-list', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/discussion',
                component: ComponentCreator('/conversation/how-to-use-conversation/discussion', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/input-message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/input-message-box', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-box', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-item',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-item', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-maximize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-maximize-mode', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-minimize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-minimize-mode', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/what-is-conversation',
                component: ComponentCreator('/conversation/what-is-conversation', 'e98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-embed-conversation-to-your-website',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-embed-conversation-to-your-website', '40d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-manage-your-script-conversation',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-manage-your-script-conversation', 'ebc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/what-is-extension',
                component: ComponentCreator('/extension/what-is-extension', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/create-new-station',
                component: ComponentCreator('/station/how-to-use-station/create-new-station', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/invite-members',
                component: ComponentCreator('/station/how-to-use-station/invite-members', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/manage-station',
                component: ComponentCreator('/station/how-to-use-station/manage-station', '505'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/information-bot',
                component: ComponentCreator('/station/middo-bots/information-bot', 'a23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/notification-bot',
                component: ComponentCreator('/station/middo-bots/notification-bot', '207'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/setup-infobot',
                component: ComponentCreator('/station/middo-bots/setup-infobot', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/summary-bot',
                component: ComponentCreator('/station/middo-bots/summary-bot', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/what-is-station',
                component: ComponentCreator('/station/what-is-station', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/advance-features',
                component: ComponentCreator('/translation/how-to-use-translation/advance-features', 'f3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/source',
                component: ComponentCreator('/translation/how-to-use-translation/source', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/target',
                component: ComponentCreator('/translation/how-to-use-translation/target', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/what-is-translation',
                component: ComponentCreator('/translation/what-is-translation', '840'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/why-i-can-not-reply-to-a-conversation',
                component: ComponentCreator('/why-i-can-not-reply-to-a-conversation', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
