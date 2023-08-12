import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HistoryInterface {
  id?: string;
  content_manager_id?: string;
  content?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_manager_id?: string;
  content?: string;
}
