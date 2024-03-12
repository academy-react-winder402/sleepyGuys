interface Route {
  name: string;
  href: string;
  icon: string;
}

interface NavbarInPhoneProps {
  mainRoutes: Route[];
}

export type { NavbarInPhoneProps };
