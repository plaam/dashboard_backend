import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'discord_id' })
  discordId: string;

  @Column()
  username: string;

  @Column()
  discriminator: string;

  @Column({ nullable: true })
  avatar: string;
}
