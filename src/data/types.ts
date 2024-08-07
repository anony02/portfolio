export interface LinkType {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectType {
  title: string;
  description: string;
  skills?: string[];
  links?: LinkType[];
}
