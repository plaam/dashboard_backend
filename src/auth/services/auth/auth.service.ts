import { Injectable } from '@nestjs/common';
import { IAuth } from './auth';
import { UserDetails } from '../../../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService implements IAuth {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async validateUser(details: UserDetails) {
    const { discordId } = details;
    const user = await this.userRepo.findOne({ discordId });
    if (user) {
      await this.userRepo.update({ discordId }, details);
      console.log('Updated');
      return user;
    }
    return this.createUser(details);
  }

  createUser(details: UserDetails) {
    const user = this.userRepo.create(details);
    return this.userRepo.save(user);
  }

  findUser(discordId: string): Promise<User | undefined> {
    return this.userRepo.findOne({ discordId });
  }
}
