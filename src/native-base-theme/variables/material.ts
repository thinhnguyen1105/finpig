import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'material';
const isIphoneX =
  platform === 'ios' && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: 0,

  // Button
  btnFontFamily: 'Roboto',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  get btnPrimaryBg(): string {
    return this.brandPrimary;
  },
  get btnPrimaryColor(): string {
    return this.inverseTextColor;
  },
  get btnInfoBg(): string {
    return this.brandInfo;
  },
  get btnInfoColor(): string {
    return this.inverseTextColor;
  },
  get btnSuccessBg(): string {
    return this.brandSuccess;
  },
  get btnSuccessColor(): string {
    return this.inverseTextColor;
  },
  get btnDangerBg(): string {
    return this.brandDanger;
  },
  get btnDangerColor(): string {
    return this.inverseTextColor;
  },
  get btnWarningBg(): string {
    return this.brandWarning;
  },
  get btnWarningColor(): string {
    return this.inverseTextColor;
  },
  get btnTextSize(): number {
    return this.fontSizeBase - 1;
  },
  get btnTextSizeLarge(): number {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall(): number {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge(): number {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge(): number {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall(): number {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Color
  brandPrimary: '#3F51B5',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#f4f4f4',

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: 16,
  fontFamily: 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1(): number {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2(): number {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3(): number {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: '#bfc6ea',
  tabBarTextSize: 11,
  activeTab: '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: '#3F51B5',

  // Header
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: '#3F51B5',
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 40 : 50,
  toolbarBtnTextColor: '#fff',
  toolbarDefaultBorder: '#3F51B5',
  iosStatusbar: 'light-content',
  get statusBarColor(): string {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader(): string {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: 28,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor(): string {
    return this.textColor;
  },
  get inputColorPlaceholder(): string {
    return '#575757';
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 12,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: '#3F51B5',

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: 24,
  get radioColor(): string {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: '#3F51B5',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#3F51B5',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: '#3F51B5',
  topTabBarTextColor: '#b3c7f9',
  topTabBarActiveTextColor: '#fff',
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,
  get defaultTextColor(): string {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'Roboto',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: '#FFF',
  titleFontColor: '#FFF',

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
