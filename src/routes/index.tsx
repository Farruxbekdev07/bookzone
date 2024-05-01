/* eslint-disable @typescript-eslint/no-unused-vars */
import lazyWithPreload from "react-lazy-with-preload";
import paths from "../constants/paths";
import { IRoute } from "../interfaces";

const SignIn = lazyWithPreload(() => import("../pages/Signin"));
const SignUp = lazyWithPreload(() => import("../pages/Signup"));
const Author = lazyWithPreload(() => import("../pages/Author/index"));
const AuthorCreate = lazyWithPreload(
  () => import("../pages/Author/Create/index")
);
const AuthorDetails = lazyWithPreload(
  () => import("../pages/Author/Details/index")
);
const Books = lazyWithPreload(() => import("../pages/Books/index"));
const BooksCreate = lazyWithPreload(
  () => import("../pages/Books/Create/index")
);
const BooksDetails = lazyWithPreload(
  () => import("../pages/Books/Details/index")
);
const User = lazyWithPreload(() => import("../pages/User/index"));
const Profile = lazyWithPreload(() => import("../pages/User/Profile/index"));
const Security = lazyWithPreload(() => import("../pages/User/Security/index"));
const Settings = lazyWithPreload(() => import("../pages/User/Settings/index"));

const {
  BOOKS,
  PROFILE,
  LOG_IN,
  REGISTER,
  AUTHOR,
  AUTHOR__DETAILS,
  BOOKS__DETAILS,
  CREATE__AUTHOR,
  CREATE__BOOK,
  SECURITY,
  SETTINGS,
  USER,
} = paths;

SignIn.preload();
SignUp.preload();

export const routes: IRoute[] = [
  {
    path: LOG_IN,
    key: "signin",
    component: <SignIn />,
  },
  {
    path: REGISTER,
    key: "signup",
    component: <SignUp />,
  },
  {
    path: "/",
    key: "user",
    component: <User />,
  },
  {
    path: USER,
    key: "user",
    component: <User />,
  },
  {
    path: PROFILE,
    key: "user-profile",
    component: <Profile />,
  },
  {
    path: SECURITY,
    key: "user-security",
    component: <Security />,
  },
  {
    path: SETTINGS,
    key: "user-settings",
    component: <Settings />,
  },
  {
    path: AUTHOR,
    key: "author",
    component: <Author />,
  },
  {
    path: AUTHOR__DETAILS,
    key: "author-details",
    component: <AuthorDetails />,
  },
  {
    path: CREATE__AUTHOR,
    key: "author-create",
    component: <AuthorCreate />,
  },
  {
    path: BOOKS,
    key: "book",
    component: <Books />,
  },
  {
    path: BOOKS__DETAILS,
    key: "book-details",
    component: <BooksDetails />,
  },
  {
    path: CREATE__BOOK,
    key: "book-create",
    component: <BooksCreate />,
  },
];
