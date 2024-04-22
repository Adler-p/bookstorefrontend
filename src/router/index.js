import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
const VerticleLayout = () => import('../layouts/VerticleLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')
/* Dashboards View */
// const Dashboard2 = () => import('../views/Dashboards/Dashboard2')
const Home = () => import('../views/Shop/home')
const Category = () => import('../views/Shop/category')
const Bookpage = () => import('../views/Shop/bookpage')
const Bookpdf = () => import('../views/Shop/bookpdf')
const Checkout = () => import('../views/Shop/checkout')
const Wishlist = () => import('../views/Shop/wishlist')
const Address = () => import('../views/Shop/address')
const Payment = () => import('../views/Shop/payment')
// admin view
const Dashboard = () => import('../views/Admin/dashboard')
const Categorylist = () => import('../views/Admin/categorylist')
const Book = () => import('../views/Admin/books')
const Author = () => import('../views/Admin/author')
const AddCategory = () => import('../views/Admin/addcategory')
const AddBook = () => import('../views/Admin/addbook')
const EditBook = () => import('../views/Admin/editbook')
const AddAuthor = () => import('../views/Admin/addauthor')
/* UIElements View */
const UiAlerts = () => import('../views/UiElements/UiAlerts.vue')
const UiButtons = () => import('../views/UiElements/UiButtons.vue')
const UiBadges = () => import('../views/UiElements/UiBadges.vue')
const UiBreadcrumb = () => import('../views/UiElements/UiBreadcrumb.vue')
const UiColors = () => import('../views/UiElements/UiColors.vue')
const UiTypography = () => import('../views/UiElements/UiTypography.vue')
const UiCards = () => import('../views/UiElements/UiCards.vue')
const UiCarousel = () => import('../views/UiElements/UiCarousel.vue')
const UiEmbedVideo = () => import('../views/UiElements/UiEmbedVideo.vue')
const UiGrid = () => import('../views/UiElements/UiGrid.vue')
const UiModal = () => import('../views/UiElements/UiModal.vue')
const UiListGroup = () => import('../views/UiElements/UiListGroup.vue')
const UiImages = () => import('../views/UiElements/UiImages.vue')
const UiMediaObject = () => import('../views/UiElements/UiMediaObject.vue')
const UiTooltips = () => import('../views/UiElements/UiTooltips.vue')
const UiPopovers = () => import('../views/UiElements/UiPopovers.vue')
const UiNotifications = () => import('../views/UiElements/UiNotifications.vue')
const UiTabs = () => import('../views/UiElements/UiTabs.vue')
const UiPagination = () => import('../views/UiElements/UiPagination.vue')
const UiProgressBars = () => import('../views/UiElements/UiProgressBars.vue')
/* Authentic View */
const SignIn = () => import('../views/AuthPages/Default/SignIn')
const SignUp = () => import('../views/AuthPages/Default/SignUp')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')
/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')
// const Pricing = () => import('../views/Pages/Pricing')
const Pricing1 = () => import('../views/Pages/Pricing1')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Invoice = () => import('../views/Pages/Invoice')
/* Apps Views */
const Calendar = () => import('../views/Apps/Calendar/Calendar')
/* Icon Views */
const IconDripicons = () => import('../views/Icons/IconDripicons')
const IconFontawesome5 = () => import('../views/Icons/IconFontawesome5')
const IconLineAwesome = () => import('../views/Icons/IconLineAwesome')
const IconRemixicon = () => import('../views/Icons/IconRemixicon')
const IconUnicons = () => import('../views/Icons/IconUnicons')
/* Tables Views */
const TablesBasic = () => import('../views/Tables/TablesBasic')
const EditableTable = () => import('../views/Tables/EditableTable')
/* Charts View */
const ApexCharts = () => import(/* webpackPrefetch: true */ /* webpackChunkName: "ApexChart" */ '../views/Charts/ApexCharts')
const AmCharts = () => import(/* webpackPrefetch: true */ /* webpackChunkName: "AmCharts" */'../views/Charts/AmCharts')
const MorrisCharts = () => import(/* webpackPrefetch: true */ /* webpackChunkName: "MorrisCharts" */'../views/Charts/MorrisCharts')
const HighCharts = () => import(/* webpackPrefetch: true */ /* webpackChunkName: "HighCharts" */'../views/Charts/HighCharts')
/* Google Map */
const GoogleMaps = () => import('../views/Maps/GoogleMaps')
/* Form View */
const FormLayout = () => import('../views/Forms/FormLayout')
const FormValidates = () => import('../views/Forms/FormValidates')
const FormSwitches = () => import('../views/Forms/FormSwitches')
const FormRadios = () => import('../views/Forms/FormRadios')
const FormCheckboxes = () => import('../views/Forms/FormCheckboxes')
/* User View */
const Profile = () => import('../views/User/Profile')
const ProfileEdit = () => import('../views/User/ProfileEdit')
const AddUser = () => import('../views/User/AddUser')
const UserList = () => import('../views/User/UserList')
/* Apps View */
/* Plugins Views */
const DatepickerDemo = () => import('../views/Plugins/DatepickerDemo')
const SelectDemo = () => import('../views/Plugins/SelectDemo')
const DragDropDemo = () => import('../views/Plugins/DragDropDemo')
const AppTreeView = () => import('../views/Plugins/AppTreeView')

/* Settings */
const AccountSettings = () => import('../views/Settings/AccountSettings')
const PrivacySettings = () => import('../views/Settings/PrivacySettings')
const PrivacyPolicy = () => import('../views/Settings/PrivacyPolicy')
const TermsOfService = () => import('../views/Settings/TermsOfService')
Vue.use(VueRouter)

const childRoutes = (prop) => [
  {
    path: '/home',
    name: prop + '.home',
    meta: { auth: true, name: 'Home Page' },
    component: Home
  },
  {
    path: 'category-page',
    name: prop + '.category',
    meta: { auth: true, name: 'Category Page' },
    component: Category
  },
  {
    path: 'book-page',
    name: prop + '.book',
    meta: { auth: true, name: 'Book Page' },
    component: Bookpage
  },
  {
    path: 'book-pdf',
    name: prop + '.bookPdf',
    meta: { auth: true, name: 'Book PDF' },
    component: Bookpdf
  },
  {
    path: 'checkout',
    name: prop + '.checkout',
    meta: { auth: true, name: 'Checkout' },
    component: Checkout
  },
  {
    path: 'wishlist',
    name: prop + '.wishlist',
    meta: { auth: true, name: 'Wishlist' },
    component: Wishlist
  },
  {
    path: 'checkout-address',
    name: 'address',
    component: Address,
    meta: { auth: true, name: 'Address' }
  },
  {
    path: '/checkout-payment',
    name: 'payment',
    component: Payment,
    meta: { auth: true, name: 'payment' }
  },
  {
    path: '/account-setting',
    name: 'account-setting',
    component: AccountSettings,
    meta: { auth: true, name: 'Account Settings' }
  },
  {
    path: '/privacy-setting',
    name: 'privacy-setting',
    component: PrivacySettings,
    meta: { auth: true, name: 'Privacy Settings' }
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
    meta: { auth: true, name: 'Privacy Policy' }
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: TermsOfService,
    meta: { auth: true, name: 'Terms Of Service' }
  }
]
const adminchildRoutes = (prop) => [
  {
    path: 'dashboard',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'Dashboard' },
    component: Dashboard
  },
  {
    path: 'category-list',
    name: prop + '.categorylist',
    meta: { auth: true, name: 'Category List' },
    component: Categorylist
  },
  {
    path: 'author',
    name: prop + '.author',
    meta: { auth: true, name: 'Author' },
    component: Author
  },
  {
    path: 'books',
    name: prop + '.book',
    meta: { auth: true, name: 'Books' },
    component: Book
  },
  {
    path: '/add-category',
    name: 'addcategory',
    component: AddCategory,
    meta: { auth: true, name: 'Addcategory' }
  },
  {
    path: '/add-book',
    name: 'addbook',
    component: AddBook,
    meta: { auth: true, name: 'Addbook' }
  },
  {
    path: '/edit-book/:id',
    name: 'editbook',
    component: EditBook,
    meta: { auth: true, name: 'EditBook' }
  },
  {
    path: '/add-author',
    name: 'addauthor',
    component: AddAuthor,
    meta: { auth: true, name: 'Addauthor' }
  }
]
const coreChildRoute = (prop) => [
  {
    path: 'ui-colors',
    name: prop + '.color',
    meta: { auth: true, name: 'Colors' },
    component: UiColors
  },
  {
    path: 'ui-typography',
    name: prop + '.typography',
    meta: { auth: true, name: 'Typography' },
    component: UiTypography
  },
  {
    path: 'ui-alerts',
    name: prop + '.alert',
    meta: { auth: true, name: 'Alert' },
    component: UiAlerts
  },
  {
    path: 'ui-buttons',
    name: prop + '.button',
    meta: { auth: true, name: 'Button' },
    component: UiButtons
  },
  {
    path: 'ui-breadcrumb',
    name: prop + '.breadcrumb',
    meta: { auth: true, name: 'Breadcrumb' },
    component: UiBreadcrumb
  },
  {
    path: 'ui-badges',
    name: prop + '.badges',
    meta: { auth: true, name: 'Badges' },
    component: UiBadges
  },
  {
    path: 'ui-cards',
    name: prop + '.cards',
    meta: { auth: true, name: 'Card' },
    component: UiCards
  },
  {
    path: 'ui-carousel',
    name: prop + '.carousel',
    meta: { auth: true, name: 'Carousel' },
    component: UiCarousel
  },
  {
    path: 'ui-grid',
    name: prop + '.grid',
    meta: { auth: true, name: 'Grid' },
    component: UiGrid
  },
  {
    path: 'ui-embed-video',
    name: prop + '.embed-video',
    meta: { auth: true, name: 'Embed Video' },
    component: UiEmbedVideo
  },
  {
    path: 'ui-modal',
    name: prop + '.modal',
    meta: { auth: true, name: 'Model' },
    component: UiModal
  },
  {
    path: 'ui-listgroup',
    name: prop + '.listgroup',
    meta: { auth: true, name: 'List Group' },
    component: UiListGroup
  },
  {
    path: 'ui-images',
    name: prop + '.images',
    meta: { auth: true, name: 'Image' },
    component: UiImages
  },
  {
    path: 'ui-media-object',
    name: prop + '.media-object',
    meta: { auth: true, name: 'Media Object' },
    component: UiMediaObject
  },
  {
    path: 'ui-pagination',
    name: prop + '.pagination',
    meta: { auth: true, name: 'Paginations' },
    component: UiPagination
  },
  {
    path: 'ui-progressbars',
    name: prop + '.progressbars',
    meta: { auth: true, name: 'Progressbar' },
    component: UiProgressBars
  },
  {
    path: 'ui-tooltips',
    name: prop + '.tooltips',
    meta: { auth: true, name: 'Tooltip' },
    component: UiTooltips
  },
  {
    path: 'ui-popovers',
    name: prop + '.popovers',
    meta: { auth: true, name: 'Popover' },
    component: UiPopovers
  },
  {
    path: 'ui-notifications',
    name: prop + '.notifications',
    meta: { auth: true, name: 'Notification' },
    component: UiNotifications
  },
  {
    path: 'ui-tabs',
    name: prop + '.tabs',
    meta: { auth: true, name: 'Tabs' },
    component: UiTabs
  }
]
const formChildRoute = (prop) => [
  {
    path: 'form-layout',
    name: prop + '.layout',
    meta: { auth: true, name: 'Layout' },
    component: FormLayout
  },
  {
    path: 'form-validate',
    name: prop + '.validate',
    meta: { auth: true, name: 'Validate' },
    component: FormValidates
  },
  {
    path: 'form-switches',
    name: prop + '.switch',
    meta: { auth: true, name: 'Switch' },
    component: FormSwitches
  },
  {
    path: 'form-radios',
    name: prop + '.radio',
    meta: { auth: true, name: 'Radio' },
    component: FormRadios
  },
  {
    path: 'form-checkboxes',
    name: prop + '.checkbox',
    meta: { auth: true, name: 'Checkbox' },
    component: FormCheckboxes
  }
]

const tableChildRoute = (prop) => [
  {
    path: 'tables-basic',
    name: prop + '.basic',
    meta: { auth: true, name: 'Basic' },
    component: TablesBasic
  },
  {
    path: 'editable',
    name: prop + '.editable',
    meta: { auth: true, name: 'Editable' },
    component: EditableTable
  }
]

const iconChildRoute = (prop) => [
  {
    path: 'dripicons',
    name: prop + '.dripicons',
    meta: { auth: true, name: 'Dripicons' },
    component: IconDripicons
  },
  {
    path: 'fontawesome-5',
    name: prop + '.fontawesome-5',
    meta: { auth: true, name: 'Font Awsome' },
    component: IconFontawesome5
  },
  {
    path: 'lineawesome',
    name: prop + '.lineawesome',
    meta: { auth: true, name: 'Line Awsome' },
    component: IconLineAwesome
  },
  {
    path: 'remixicon',
    name: prop + '.remixicon',
    meta: { auth: true, name: 'Remixicon' },
    component: IconRemixicon
  },
  {
    path: 'unicons',
    name: prop + '.unicons',
    meta: { auth: true, name: 'Unicon' },
    component: IconUnicons
  }
]

const chartChildRoutes = (prop) => [
  {
    path: 'apex-charts',
    name: prop + '.apex',
    meta: { auth: true, name: 'Apex Chart' },
    component: ApexCharts
  },
  {
    path: 'am-charts',
    name: prop + '.am',
    meta: { auth: true, name: 'Am Chart' },
    component: AmCharts
  },
  {
    path: 'high-charts',
    name: prop + '.high',
    meta: { auth: true, name: 'High Chart' },
    component: HighCharts
  },
  {
    path: 'morris-charts',
    name: prop + '.morris',
    meta: { auth: true, name: 'Morris Chart' },
    component: MorrisCharts
  }
]

const appChildRoute = (prop) => [
  {
    path: 'calendar',
    name: prop + '.calendar',
    meta: { auth: true, name: 'Calendar' },
    component: Calendar
  },
  {
    path: 'treeview',
    name: prop + '.treeview',
    meta: { auth: true, name: 'Tree View' },
    component: AppTreeView
  }
]

const authChildRoutes = (prop) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { auth: true },
    component: SignUp
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { auth: true },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { auth: true },
    component: ConfirmMail1
  }
]

const mapChildRoute = (prop) => [
  {
    path: 'google-maps',
    name: prop + '.google',
    meta: { auth: true, name: 'Google map' },
    component: GoogleMaps
  }
]

const defaultlayout = (prop) => [
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'pricing',
    name: prop + '.pricing',
    meta: { auth: true, name: 'Pricing' },
    component: Pricing1
  },
  // {
  //   path: 'pricing-1',
  //   name: prop + '.pricing1',
  //   meta: { auth: true, name: 'Pricing 1' },
  //   component: Pricing
  // },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: FAQ
  }
]

const pagesChildRoutes = (prop) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true },
    component: Maintenance
  }
]
const userChildRoute = (prop) => [
  {
    path: 'profile',
    name: prop + '.profile',
    meta: { auth: true, name: 'Profile' },
    component: Profile
  },
  {
    path: 'profile-edit',
    name: prop + '.edit',
    meta: { auth: true, name: 'Edit Profile' },
    component: ProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { auth: true, name: 'Add User' },
    component: AddUser
  },
  {
    path: 'user-list',
    name: prop + '.list',
    meta: { auth: true, name: 'User List' },
    component: UserList
  }
]

const pluginsChildRoute = (prop) => [
  {
    path: 'datepicker',
    name: prop + '.datepicker',
    meta: { auth: true, name: 'Datepicker' },
    component: DatepickerDemo
  },
  {
    path: 'select',
    name: prop + '.select',
    meta: { auth: true, name: 'Select' },
    component: SelectDemo
  },
  {
    path: 'draggable',
    name: prop + '.draggable',
    meta: { auth: true, name: 'Draggable' },
    component: DragDropDemo
  }
]
const routes = [
  {
    path: '/',
    component: VerticleLayout,
    meta: { auth: true },
    children: childRoutes('shop')
  },
  {
    path: '/admin',
    name: 'admin',
    component: VerticleLayout,
    meta: { auth: true },
    children: adminchildRoutes('admin')
  },
  {
    path: '/core',
    name: 'core',
    component: VerticleLayout,
    meta: { auth: true },
    children: coreChildRoute('core')
  },
  {
    path: '/table',
    name: 'table',
    component: VerticleLayout,
    meta: { auth: true },
    children: tableChildRoute('table')
  },
  {
    path: '/chart',
    name: 'chart',
    component: VerticleLayout,
    meta: { auth: true },
    children: chartChildRoutes('chart')
  },
  {
    path: '/icon',
    name: 'icon',
    component: VerticleLayout,
    meta: { auth: true },
    children: iconChildRoute('icon')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: VerticleLayout,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/app',
    name: 'app',
    component: VerticleLayout,
    meta: { auth: true },
    children: appChildRoute('app')
  },
  {
    path: '/user',
    name: 'user',
    component: VerticleLayout,
    meta: { auth: true },
    children: userChildRoute('user')
  },
  {
    path: '/map',
    name: 'map',
    component: VerticleLayout,
    meta: { auth: true },
    children: mapChildRoute('map')
  },
  {
    path: '/form',
    name: 'form',
    component: VerticleLayout,
    meta: { auth: true },
    children: formChildRoute('form')
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: VerticleLayout,
    meta: { auth: true },
    children: pluginsChildRoute('plugins')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})
export default router
