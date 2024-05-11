interface itemType {
  id: number;
  title: string;
  route: string;
}

interface breadcrumbType {
  items: itemType[];
}

export type { breadcrumbType };
