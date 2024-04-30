interface itemType {
  title: string;
  route: string;
}

interface breadcrumbType {
  items: itemType[];
}

export type { breadcrumbType };
