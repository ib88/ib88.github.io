import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '154'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'fcc'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ee7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c80'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'eea'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e97'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'dc9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2ca'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b94'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '7c4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ec0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e9e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'be3'),
    routes: [
      {
        path: '/docs/category/csv-files',
        component: ComponentCreator('/docs/category/csv-files', 'f1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/developers',
        component: ComponentCreator('/docs/category/developers', 'a30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/templates',
        component: ComponentCreator('/docs/category/templates', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSV Files/Download files',
        component: ComponentCreator('/docs/CSV Files/Download files', '27a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSV Files/Manually enter data',
        component: ComponentCreator('/docs/CSV Files/Manually enter data', '08a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSV Files/Upload files',
        component: ComponentCreator('/docs/CSV Files/Upload files', '02e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/CSV Files/validate file',
        component: ComponentCreator('/docs/CSV Files/validate file', '172'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/create-api',
        component: ComponentCreator('/docs/Developers/create-api', 'b09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/create-template',
        component: ComponentCreator('/docs/Developers/create-template', 'c7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/delete-file',
        component: ComponentCreator('/docs/Developers/delete-file', '5ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/delete-template',
        component: ComponentCreator('/docs/Developers/delete-template', 'afe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/download-files',
        component: ComponentCreator('/docs/Developers/download-files', '676'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/edit-template',
        component: ComponentCreator('/docs/Developers/edit-template', 'dea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/list-files',
        component: ComponentCreator('/docs/Developers/list-files', '0e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/list-templates',
        component: ComponentCreator('/docs/Developers/list-templates', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/list-webhooks',
        component: ComponentCreator('/docs/Developers/list-webhooks', 'a4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/upload-file',
        component: ComponentCreator('/docs/Developers/upload-file', 'ef2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/validate-files',
        component: ComponentCreator('/docs/Developers/validate-files', 'e9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/view-file',
        component: ComponentCreator('/docs/Developers/view-file', '9c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Developers/webhooks',
        component: ComponentCreator('/docs/Developers/webhooks', 'ada'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro3',
        component: ComponentCreator('/docs/intro3', '264'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Templates/create',
        component: ComponentCreator('/docs/Templates/create', '08a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Templates/delete',
        component: ComponentCreator('/docs/Templates/delete', 'f86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Templates/edit',
        component: ComponentCreator('/docs/Templates/edit', 'e4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '75a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
