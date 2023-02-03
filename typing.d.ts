interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updateAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: string;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  githubLink: string;
}
export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
  companyUrl: string;
}

export interface Social extends SanityBody {
  _type: 'socials';
  title: string;
  url: string;
}
export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}
