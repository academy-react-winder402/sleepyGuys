interface RouteObject {
    id: number;
    route: string;
    title: string;
}

export function urlToRouteObjects(url: string): RouteObject[] {
    const segments = url.split('/');
    const routeObjects: RouteObject[] = [];

    let currentRoute = '';
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        currentRoute += (i > 0 ? '/' : '') + segment;
        const routeObject: RouteObject = {
            id: i + 1,
            route: currentRoute,
            title: segment
        };
        routeObjects.push(routeObject);
    }

    return routeObjects;
}