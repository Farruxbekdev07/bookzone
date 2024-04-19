export interface ITabsData {
  index: number;
  label: string;
  data?: Object | any;
}
export interface IStatisticsData {
  image?: File | string | any;
  title?: string;
  progress?: string | number;
}
export interface IContainerData {
  children: JSX.Element | any;
}
export interface INavBarData {
  value: string | number;
  index: number;
  path: string | any;
}
export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export interface IAudioBookCard {
  image?: string | any;
  name: string;
  author?: string;
  time?: number | string;
  isActive?: boolean;
}
export interface IRoute {
  path: string;
  component: JSX.Element;
  key?: string;
}
export interface IBookData {
  image?: File | string | any;
  title: string;
  author?: string;
  rate?: number;
  views?: number;
}
export interface IAuthorData {
  image?: File | string | any;
  fullName?: string;
  dateOfBirth?: number | string | any;
  dateOfDied?: number | string | any;
  books?: number;
  audioBooks?: number;
}
