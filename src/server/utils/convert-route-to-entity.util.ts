const mapping: Record<string, string> = {
  articles: 'article',
  events: 'event',
  histories: 'history',
  organizations: 'organization',
  tickets: 'ticket',
  tours: 'tour',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
