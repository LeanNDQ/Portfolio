export type Extensible<T> = T & Record<string, unknown>;

export type IconDefinition = Extensible<{
  name: string;
  viewBox: string;
  path: string;
}>;

export type CtaLink = Extensible<{
  label: string;
  href: string;
  download?: boolean;
  external?: boolean;
}>;

export type SocialLink = Extensible<{
  label: string;
  href: string;
  icon: IconDefinition;
}>;

export type HeroContent = Extensible<{
  name: string;
  role: string;
  summary: string;
  image?: {
    src: string;
    alt: string;
  };
  ctaPrimary: CtaLink;
  ctaSecondary: CtaLink;
  socials: SocialLink[];
}>;

export type AboutItem = Extensible<{
  title: string;
  description: string;
}>;

export type TechTone = 'violet' | 'cyan' | 'rose' | 'amber' | 'emerald' | 'sky';

export type TechItem = Extensible<{
  name: string;
  abbr: string;
  tone: TechTone;
}>;

export type TechCategory = Extensible<{
  title: string;
  items: TechItem[];
}>;

export type ProjectStatus = 'Terminado' | 'En progreso' | 'Investigando' | (string & {});

export type Project = Extensible<{
  title: string;
  description: string;
  status: ProjectStatus;
  tag: string;
  timeline: string;
}>;

export type ContactItem = Extensible<{
  label: string;
  value: string;
  href: string;
  icon: IconDefinition;
}>;

export type SeoData = Extensible<{
  title: string;
  description: string;
}>;

export type NavItem = Extensible<{
  label: string;
  href: string;
}>;

export type SiteData = {
  seo: SeoData;
  nav: NavItem[];
  hero: HeroContent;
  about: {
    title: string;
    subtitle: string;
    items: AboutItem[];
  };
  tech: {
    title: string;
    subtitle: string;
    carousel?: {
      name?: string;
      src?: string;
    }[];
    categories: TechCategory[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    items: ContactItem[];
  };
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export type SiteDataInput = DeepPartial<SiteData>;
