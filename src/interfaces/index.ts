export interface ITabsData {
  index: number;
  label: string;
  data?: Object | any;
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
export interface IRoute {
  path: string;
  component: JSX.Element;
  key?: string;
}
export interface IBookData {
  _id?: string;
  image?: File | string | any;
  title: string;
  author?: Object[] | any;
  rate?: number;
  views?: number;
  pages?: number | string;
  description?: string;
  comments?: Object[] | any;
  year?: number | string;
  category?: string;
  country?: string;
  createdAt?: string | any;
  isFeatured?: boolean;
  isPublished?: boolean;
  language?: string | any;
  link?: string;
}
export interface IAuthorData {
  _id?: string;
  image?: File | string | any;
  firstName?: string;
  lastName?: string;
  date_of_birth?: number | string | any;
  date_of_death?: number | string | any;
  role?: string | any;
}
export interface IUserData {
  image?: File | string | any;
  firstName: string;
  lastName?: string;
  date_of_birth?: number | string | any;
  phone: number | string;
  password: number | string;
  email: string;
  address: string;
  lang?: string;
}
