import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  user_id?: string;
  discount_code?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  discount_code?: string;
}
