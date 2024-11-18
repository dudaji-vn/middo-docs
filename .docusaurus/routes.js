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
    component: ComponentCreator('/', '842'),
    routes: [
      {
        path: '/0.6',
        component: ComponentCreator('/0.6', 'a91'),
        routes: [
          {
            path: '/0.6',
            component: ComponentCreator('/0.6', '4fe'),
            routes: [
              {
                path: '/0.6/',
                component: ComponentCreator('/0.6/', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/conversation',
                component: ComponentCreator('/0.6/category/conversation', '522'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/extension',
                component: ComponentCreator('/0.6/category/extension', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/get-started',
                component: ComponentCreator('/0.6/category/get-started', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/how-to-use-conversation',
                component: ComponentCreator('/0.6/category/how-to-use-conversation', 'b13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/how-to-use-extension',
                component: ComponentCreator('/0.6/category/how-to-use-extension', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/how-to-use-station',
                component: ComponentCreator('/0.6/category/how-to-use-station', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/how-to-use-translation',
                component: ComponentCreator('/0.6/category/how-to-use-translation', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/middo-bots',
                component: ComponentCreator('/0.6/category/middo-bots', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/station',
                component: ComponentCreator('/0.6/category/station', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/category/translation',
                component: ComponentCreator('/0.6/category/translation', '853'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/converation-list',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/converation-list', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/discussion',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/discussion', 'ace'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/input-message-box',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/input-message-box', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/message-box',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/message-box', '8dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/message-item',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/message-item', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/middo-call-maximize-mode',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/middo-call-maximize-mode', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/how-to-use-conversation/middo-call-minimize-mode',
                component: ComponentCreator('/0.6/conversation/how-to-use-conversation/middo-call-minimize-mode', 'd68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/conversation/what-is-conversation',
                component: ComponentCreator('/0.6/conversation/what-is-conversation', 'cd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/extension/how-to-use-extension/how-to-embed-conversation-to-your-website',
                component: ComponentCreator('/0.6/extension/how-to-use-extension/how-to-embed-conversation-to-your-website', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/extension/how-to-use-extension/how-to-manage-your-script-conversation',
                component: ComponentCreator('/0.6/extension/how-to-use-extension/how-to-manage-your-script-conversation', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/extension/what-is-extension',
                component: ComponentCreator('/0.6/extension/what-is-extension', '048'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/get-started/create-your-station',
                component: ComponentCreator('/0.6/get-started/create-your-station', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/get-started/manage-account',
                component: ComponentCreator('/0.6/get-started/manage-account', '391'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/get-started/sign-up',
                component: ComponentCreator('/0.6/get-started/sign-up', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/get-started/start-communicating',
                component: ComponentCreator('/0.6/get-started/start-communicating', '6fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/how-to-use-station/create-new-station',
                component: ComponentCreator('/0.6/station/how-to-use-station/create-new-station', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/how-to-use-station/invite-members',
                component: ComponentCreator('/0.6/station/how-to-use-station/invite-members', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/how-to-use-station/manage-station',
                component: ComponentCreator('/0.6/station/how-to-use-station/manage-station', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/middo-bots/information-bot',
                component: ComponentCreator('/0.6/station/middo-bots/information-bot', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/middo-bots/notification-bot',
                component: ComponentCreator('/0.6/station/middo-bots/notification-bot', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/middo-bots/setup-infobot',
                component: ComponentCreator('/0.6/station/middo-bots/setup-infobot', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/middo-bots/summary-bot',
                component: ComponentCreator('/0.6/station/middo-bots/summary-bot', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/station/what-is-station',
                component: ComponentCreator('/0.6/station/what-is-station', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/translation/how-to-use-translation/advance-features',
                component: ComponentCreator('/0.6/translation/how-to-use-translation/advance-features', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/translation/how-to-use-translation/source',
                component: ComponentCreator('/0.6/translation/how-to-use-translation/source', '496'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/translation/how-to-use-translation/target',
                component: ComponentCreator('/0.6/translation/how-to-use-translation/target', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/translation/what-is-translation',
                component: ComponentCreator('/0.6/translation/what-is-translation', '992'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/0.6/why-i-can-not-reply-to-a-conversation',
                component: ComponentCreator('/0.6/why-i-can-not-reply-to-a-conversation', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/',
        component: ComponentCreator('/', '905'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f10'),
            routes: [
              {
                path: '/category/conversation',
                component: ComponentCreator('/category/conversation', 'ed7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/extension',
                component: ComponentCreator('/category/extension', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/get-started',
                component: ComponentCreator('/category/get-started', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/how-to-use-conversation',
                component: ComponentCreator('/category/how-to-use-conversation', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/how-to-use-extension',
                component: ComponentCreator('/category/how-to-use-extension', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/how-to-use-station',
                component: ComponentCreator('/category/how-to-use-station', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/how-to-use-translation',
                component: ComponentCreator('/category/how-to-use-translation', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/middo-bots',
                component: ComponentCreator('/category/middo-bots', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/station',
                component: ComponentCreator('/category/station', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/translation',
                component: ComponentCreator('/category/translation', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/converation-list',
                component: ComponentCreator('/conversation/how-to-use-conversation/converation-list', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/discussion',
                component: ComponentCreator('/conversation/how-to-use-conversation/discussion', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/input-message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/input-message-box', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-box', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-item',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-item', 'c48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-maximize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-maximize-mode', 'e1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-minimize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-minimize-mode', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/what-is-conversation',
                component: ComponentCreator('/conversation/what-is-conversation', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-embed-conversation-to-your-website',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-embed-conversation-to-your-website', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-manage-your-script-conversation',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-manage-your-script-conversation', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/what-is-extension',
                component: ComponentCreator('/extension/what-is-extension', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/get-started/create-your-station',
                component: ComponentCreator('/get-started/create-your-station', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/get-started/manage-account',
                component: ComponentCreator('/get-started/manage-account', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/get-started/sign-up',
                component: ComponentCreator('/get-started/sign-up', 'd16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/get-started/start-communicating',
                component: ComponentCreator('/get-started/start-communicating', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/create-new-station',
                component: ComponentCreator('/station/how-to-use-station/create-new-station', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/invite-members',
                component: ComponentCreator('/station/how-to-use-station/invite-members', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/manage-station',
                component: ComponentCreator('/station/how-to-use-station/manage-station', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/information-bot',
                component: ComponentCreator('/station/middo-bots/information-bot', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/notification-bot',
                component: ComponentCreator('/station/middo-bots/notification-bot', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/setup-infobot',
                component: ComponentCreator('/station/middo-bots/setup-infobot', '72c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/summary-bot',
                component: ComponentCreator('/station/middo-bots/summary-bot', 'c1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/what-is-station',
                component: ComponentCreator('/station/what-is-station', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/advance-features',
                component: ComponentCreator('/translation/how-to-use-translation/advance-features', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/source',
                component: ComponentCreator('/translation/how-to-use-translation/source', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/target',
                component: ComponentCreator('/translation/how-to-use-translation/target', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/what-is-translation',
                component: ComponentCreator('/translation/what-is-translation', '974'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/what-s-new',
                component: ComponentCreator('/what-s-new', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/why-i-can-not-reply-to-a-conversation',
                component: ComponentCreator('/why-i-can-not-reply-to-a-conversation', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '3fd'),
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
