//APP_STATE
export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean
}
export interface appState {
  appData: any,
  loading: boolean;
  error: null | string;
  currentPage: string;
  currentUser: User;
  regularLoad: boolean;
}
export type appAction = fetchAppAction | setCurrentUserAction | setRegularLoadAction

export enum appActionTypes {
  GET_DATA = 'GET_DATA',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_REGULAR_LOAD = 'SET_REGULAR_LOAD'
}
interface fetchAppAction {
  type: appActionTypes.GET_DATA;
  data: any[];
}
interface setCurrentUserAction {
  type: appActionTypes.SET_CURRENT_USER;
  data: User;
}
interface setRegularLoadAction {
  type: appActionTypes.SET_REGULAR_LOAD;
}

