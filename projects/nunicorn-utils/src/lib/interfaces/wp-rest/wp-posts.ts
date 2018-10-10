export interface PostObject {
  id: number;
  date: string;
  date_gmt: string;
  guid: Content;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Content;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: any[];
  _links: Links;
}

export interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  author: Author[];
  replies: Author[];
  'version-history': Self[];
  'wp:attachment': Self[];
  'wp:term': Term[];
  curies: CompactURI[];
}

export interface CompactURI {
  name: string;
  href: string;
  templated: boolean;
}

export interface Term {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Self {
  href: string;
}

export interface Content {
  rendered: string;
  protected?: boolean;
}
