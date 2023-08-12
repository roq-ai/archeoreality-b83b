import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TourInterface {
  id?: string;
  user_id?: string;
  trailer_link?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TourGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  trailer_link?: string;
}
