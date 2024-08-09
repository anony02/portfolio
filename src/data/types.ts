export interface LinkType {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface DetailType {
  background: string;
  features: string[];
  developmentProcess: string;
  roleAndContribution: string;
  result: string;
  improvements: string;
}

export interface ProjectType {
  title: string;
  description: string;
  period: string;
  participants: string;
  skills: string[];
  links: LinkType[];
  details: DetailType;
}
