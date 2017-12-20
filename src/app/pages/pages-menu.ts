import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    link: '/pages/reports',
    children: [
      {
        title: 'Sales',
        link: '/pages/reports/sales',
        children: [
          {
            title: 'Sales By Summary',
            link: '/pages/reports/sales/summary'
          },
          {
            title: 'Sales By Item',
            link: '/pages/reports/sales/item'
          },
          {
            title: 'Sales By Category',
            link: '/pages/reports/sales/category'
          },
          {
            title: 'Sales By Employee',
            link: '/pages/reports/sales/employee'
          },
          {
            title: 'Sales By Payment Type',
            link: '/pages/reports/sales/payment'
          },

        ]
      },
      {
        title: 'Push Notification',
        link: '/pages/reports/grid',
      }
    ],
  },
  {
    title: 'Items',
    icon: 'nb-compose',
    children: [
      {
        title: 'Item List',
        link: '/pages/items/list',
      },
      {
        title: 'Categories',
        link: '/pages/items/categories',
      },
      {
        title: 'Discount',
        link: '/pages/items/discount',
      },
    ],
  },
  {
    title: 'Employee',
    icon: 'ion-document-text',
    children: [
      {
        title: 'Employee List',
        link: '/pages/employee/list',
      }
    ],
  },
  {
    title: 'Customers',
    icon: 'nb-person',
    children: [
      {
        title: 'Customer Base',
        link: '/pages/customer/base',
      }
    ],
  },
  {
    title: 'Feedbacks',
    icon: 'ion-heart',
     link: 'pages/feedback'
  },
  {
    title: 'Settings',
    icon: 'ion-gear-b',
    link: 'pages/settings'
  },
];
