export const enum ActionTypes {
  SET_SAVED_LIST = 'SET_SAVED_LIST',
  GET_SAVED_LIST_REQUEST = 'GET_SAVED_LIST_REQUEST',
  SET_SAVED_LIST_ID = 'SET_SAVED_LIST_ID',
  GET_SAVED_LIST_REQUEST_ID = 'GET_SAVED_LIST_REQUEST_ID',
  LOADER = 'LOADER',
  ERROR = 'ERROR',
  EXCEL_REQUEST = 'EXCEL_REQUEST',
  EXCEL = 'EXCEL',
  SAVE = 'SAVE',
  UPDATE_REQUEST = 'UPDATE_REQUEST',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export interface SavedListItem {
  id: string;
  name: string;
  filters?: {
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

export interface File {
  name: string;
  file: string;
}

export interface SavedList {
  items: SavedListItem[];
  meta?: SavedListMeta;
  isLoader: boolean;
  error: string;
  actualList: SavedListItem;
  file: File;
}
