import { UserDetails } from '../../../utils/types';

export interface IAuth {
  validateUser(details: UserDetails);
  createUser(details: UserDetails);
  findUser(discordId: string);
}
