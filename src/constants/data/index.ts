import { IAuthorData, IBookData, ITabsData } from "../../interfaces";
import { Author1, Author2, Author3, Book1, Author4 } from "../../assets";

export const readBooks: IBookData[] = [
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: Book1,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
];
const unreadBooks: IBookData[] = [
  {
    image: Book1,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
  {
    image: Book1,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
  {
    image: Book1,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
];
export const books: IBookData[] = [
  {
    image: Book1,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
  {
    image: Book1,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
  {
    image: Book1,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
];
const writers: IBookData[] = [
  {
    image: Book1,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
  {
    image: Book1,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
  {
    image: Book1,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
];
export const audioBookData = [
  {
    image: Book1,
    title: "Ikki eshik orasi",
    progress: 25,
  },
  {
    image: Book1,
    title: "Ikki eshik orasi",
    progress: 50,
  },
  {
    image: Book1,
    title: "Ikki eshik orasi",
    progress: 75,
  },
  {
    image: Book1,
    title: "Ikki eshik orasi",
    progress: 100,
  },
];
export const userTabData: ITabsData[] = [
  {
    index: 0,
    label: "O'qilganlar",
    data: readBooks,
  },
  {
    index: 1,
    label: "O'qishni xohlayman",
    data: unreadBooks,
  },
  {
    index: 2,
    label: "O'qilmoqda",
    data: books,
  },
  {
    index: 3,
    label: "Adiblar",
    data: writers,
  },
];
export const bookTabData: ITabsData[] = [
  {
    index: 0,
    label: "Temuriylar davri",
    data: readBooks,
  },
  {
    index: 1,
    label: "Jadid adabiyoti",
    data: unreadBooks,
  },
  {
    index: 2,
    label: "Sovet davri",
    data: books,
  },
  {
    index: 3,
    label: "Mustaqillik davri",
    data: writers,
  },
];
const temuriylar: IAuthorData[] = [
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Nusrat Rahmat",
    image: Author4,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Nusrat Rahmat",
    image: Author4,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Nusrat Rahmat",
    image: Author4,
  },
];
const jadidlar: IAuthorData[] = [
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulla Avloniy",
    image: Author1,
  },
];
const sovet: IAuthorData[] = [
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Abdulhamid Cho'lpon",
    image: Author3,
  },
];
const mustaqillik: IAuthorData[] = [
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
  {
    audioBooks: 13,
    books: 34,
    dateOfBirth: 1878,
    dateOfDied: 1934,
    fullName: "Mahmudxo'ja Behbudiy",
    image: Author2,
  },
];
export const authorTabData: ITabsData[] = [
  {
    index: 0,
    label: "Temuriylar davri",
    data: jadidlar,
  },
  {
    index: 1,
    label: "Jadid adabiyoti",
    data: temuriylar,
  },
  {
    index: 2,
    label: "Sovet davri",
    data: sovet,
  },
  {
    index: 3,
    label: "Mustaqillik davri",
    data: mustaqillik,
  },
];
