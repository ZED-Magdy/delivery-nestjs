import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserDto {
  @ApiProperty({ example: 1, description: 'The id of the user' })
  id: number;
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
  })
  name: string | null;
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'The email of the user',
  })
  email: string;
  @ApiProperty({
    example: 'customer',
    description: 'The role of the user',
  })
  role: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
  }
}
