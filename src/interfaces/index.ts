export interface ITabsData {
  index: number;
  label: string;
  data: IBookData[];
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
  value: any;
  index: number;
  url: string;
}
export interface ITabPanelProps {
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
  key: string;
}
export interface IBookData {
  image: File | string | any;
  title: string;
  author: string;
  rate: number;
  views: number;
}
