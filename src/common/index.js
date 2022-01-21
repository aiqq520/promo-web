export const navigateConfig = [
  {
    name: 'HOME',
    path: '/index'
  },
  {
    name: 'CONTACT US',
    path: '/contact',
  },
  {
    name: 'ABOUT US',
    path: '/about',
    children: [
      {
        name: 'company process',
        path: '/process'
      }
    ]
  },
  {
    name: 'TUTORIAL',
    path: '/tutorial'
  }
]
