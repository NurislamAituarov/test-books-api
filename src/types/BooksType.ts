interface Object {
  thumbnail: string;
  smallThumbnail: string;
}

interface IVolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: string;
  industryIdentifiers: string;
  readingModes: object;
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: boolean;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: object;
  imageLinks: Object;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  description: string;
}

export interface IBooks {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
  saleInfo: object;
  access: object;
  searchInfo: object;
}

export interface IData {
  items: IBooks[];
  kind: string;
  totalItems: number;
}

export interface BookItemProps {
  category: string;
  title: string;
  date: string;
  authors: string[];
  img: string;
  id: string;
}
