import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import SideBarItems from '../../StaticData/json/GlobalSearch'

const state = {
  horizontalMenu: false,
  miniSidebarMenu: false,
  lang: { title: 'English', value: 'en', image: require('../../assets/images/small/flag-01.png') },
  langOption: [
    { title: 'English', value: 'en', image: require('../../assets/images/small/flag-01.png') }
  ],
  colors: [
    { primary: '#0dd6b8', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#4e37b2', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#02d871', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#309cf3', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#ff00ff', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#fb1f4c', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#00ced1', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#f35f3b', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#fde117', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#ff0000', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#88028c', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#ce9252', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#f9ae02', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#1e7fe4', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#006400', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#fa7c04', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#81bf02', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#99a7ca', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#3d2a26', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' },
    { primary: '#a0746b', primaryLight: '#fbfcff', bodyBgLight: '#fbfcff', bodyBgDark: '#030508' }
  ],
  authUser: {
    auth: false,
    authType: false,
    user: {}
  },
  users: [
    {
      id: 'sh46s546sdg564sdffs4hsd6fh',
      name: 'Admin Demo',
      mobileNo: null,
      email: 'admin@demo.com',
      profileImage: null,
      password: 'admin123'
    }
  ],
  globalSearch: SideBarItems,
  bookmark: [
    {
      title: 'Chat',
      link: { 'name': 'app.chat' },
      is_icon_class: true,
      icon: 'ri-message-line'
    },
    {
      title: 'Todo',
      link: { name: 'app.todo' },
      is_icon_class: true,
      icon: 'ri-chat-check-line'
    },
    {
      title: 'Inbox',
      link: { 'name': 'app.email' },
      is_icon_class: true,
      icon: 'ri-inbox-line'
    }

  ],
  activePage: {
    name: 'Dashboard',
    breadCrumb: [
      {
        html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
        to: { name: 'shop.home' }
      },
      {
        text: '',
        href: '#'
      }
    ]
  },
  layoutMode: {
    dark: false,
    rtl: false,
    sidebar: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
