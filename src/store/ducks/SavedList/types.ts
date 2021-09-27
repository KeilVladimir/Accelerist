export const enum ActionTypes {
  SET_SAVED_LIST = 'SET_SAVED_LIST',
  GET_SAVED_LIST_REQUEST = 'GET_SAVED_LIST_REQUEST',
  LOADER = 'LOADER',
  ERROR = 'ERROR',
}

export interface SavedListItem {
  id: string;
  name: string;
  filters: {
    q: string;
    scope: string;
    gender: string;
    location: string[];
    ageRanges: string[];
    csrFocusIds: number[];
    ethnicities: string[];
  };
  prospectsAvailable: number;
  createdAt: string;
  updatedAt: string;
  lastAuthor: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: null;
    isReceivingNotifications: boolean;
    avatarKey: null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
}

export interface SavedListMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}

export interface SavedList {
  items: SavedListItem[];
  meta?: SavedListMeta;
  loader: boolean;
  error: string;
}
