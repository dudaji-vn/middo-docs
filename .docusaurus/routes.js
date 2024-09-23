import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0d3'),
    routes: [
      {
        path: '/next',
        component: ComponentCreator('/next', '98e'),
        routes: [
          {
            path: '/next',
            component: ComponentCreator('/next', '248'),
            routes: [
              {
                path: '/next/',
                component: ComponentCreator('/next/', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/conversation',
                component: ComponentCreator('/next/category/conversation', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/extension',
                component: ComponentCreator('/next/category/extension', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/middo-bots',
                component: ComponentCreator('/next/category/middo-bots', '0d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/station',
                component: ComponentCreator('/next/category/station', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/converation-list',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/converation-list', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/discussion',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/discussion', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/input-message-box',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/input-message-box', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/message-box',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/message-box', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/message-item',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/message-item', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/middo-call-maximize-mode',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/middo-call-maximize-mode', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/how-to-use-conversation/middo-call-minimize-mode',
                component: ComponentCreator('/next/conversation/how-to-use-conversation/middo-call-minimize-mode', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/conversation/what-is-conversation',
                component: ComponentCreator('/next/conversation/what-is-conversation', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/extension/how-to-use-extension/how-to-embed-conversation-to-your-website',
                component: ComponentCreator('/next/extension/how-to-use-extension/how-to-embed-conversation-to-your-website', 'b9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/extension/how-to-use-extension/how-to-manage-your-script-conversation',
                component: ComponentCreator('/next/extension/how-to-use-extension/how-to-manage-your-script-conversation', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/extension/what-is-extension',
                component: ComponentCreator('/next/extension/what-is-extension', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/how-to-use-station/create-new-station',
                component: ComponentCreator('/next/station/how-to-use-station/create-new-station', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/how-to-use-station/invite-members',
                component: ComponentCreator('/next/station/how-to-use-station/invite-members', 'e61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/how-to-use-station/manage-station',
                component: ComponentCreator('/next/station/how-to-use-station/manage-station', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/middo-bots/information-bot',
                component: ComponentCreator('/next/station/middo-bots/information-bot', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/middo-bots/notification-bot',
                component: ComponentCreator('/next/station/middo-bots/notification-bot', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/middo-bots/setup-infobot',
                component: ComponentCreator('/next/station/middo-bots/setup-infobot', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/middo-bots/summary-bot',
                component: ComponentCreator('/next/station/middo-bots/summary-bot', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/station/what-is-station',
                component: ComponentCreator('/next/station/what-is-station', '5f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/translation/how-to-use-translation/advance-features',
                component: ComponentCreator('/next/translation/how-to-use-translation/advance-features', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/translation/how-to-use-translation/source',
                component: ComponentCreator('/next/translation/how-to-use-translation/source', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/translation/how-to-use-translation/target',
                component: ComponentCreator('/next/translation/how-to-use-translation/target', '794'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/translation/what-is-translation',
                component: ComponentCreator('/next/translation/what-is-translation', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/why-i-can-not-reply-to-a-conversation',
                component: ComponentCreator('/next/why-i-can-not-reply-to-a-conversation', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/',
        component: ComponentCreator('/', '0cd'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1a6'),
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
                component: ComponentCreator('/conversation/how-to-use-conversation/converation-list', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/discussion',
                component: ComponentCreator('/conversation/how-to-use-conversation/discussion', '402'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/input-message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/input-message-box', 'd29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-box',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-box', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/message-item',
                component: ComponentCreator('/conversation/how-to-use-conversation/message-item', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-maximize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-maximize-mode', '1b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/how-to-use-conversation/middo-call-minimize-mode',
                component: ComponentCreator('/conversation/how-to-use-conversation/middo-call-minimize-mode', '0e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/conversation/what-is-conversation',
                component: ComponentCreator('/conversation/what-is-conversation', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-embed-conversation-to-your-website',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-embed-conversation-to-your-website', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/how-to-use-extension/how-to-manage-your-script-conversation',
                component: ComponentCreator('/extension/how-to-use-extension/how-to-manage-your-script-conversation', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extension/what-is-extension',
                component: ComponentCreator('/extension/what-is-extension', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/create-new-station',
                component: ComponentCreator('/station/how-to-use-station/create-new-station', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/invite-members',
                component: ComponentCreator('/station/how-to-use-station/invite-members', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/how-to-use-station/manage-station',
                component: ComponentCreator('/station/how-to-use-station/manage-station', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/information-bot',
                component: ComponentCreator('/station/middo-bots/information-bot', '207'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/notification-bot',
                component: ComponentCreator('/station/middo-bots/notification-bot', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/setup-infobot',
                component: ComponentCreator('/station/middo-bots/setup-infobot', '0cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/middo-bots/summary-bot',
                component: ComponentCreator('/station/middo-bots/summary-bot', 'a24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/station/what-is-station',
                component: ComponentCreator('/station/what-is-station', '00a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/advance-features',
                component: ComponentCreator('/translation/how-to-use-translation/advance-features', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/source',
                component: ComponentCreator('/translation/how-to-use-translation/source', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/how-to-use-translation/target',
                component: ComponentCreator('/translation/how-to-use-translation/target', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/translation/what-is-translation',
                component: ComponentCreator('/translation/what-is-translation', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/why-i-can-not-reply-to-a-conversation',
                component: ComponentCreator('/why-i-can-not-reply-to-a-conversation', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '397'),
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
