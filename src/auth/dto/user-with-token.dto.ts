import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../../user/dto/user.dto';

export class UserWithTokenDto {
  @ApiProperty({ type: UserDto, description: 'The user object' })
  user: UserDto;
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' })
  token: string;

  constructor(userDto: UserDto, token: string) {
    this.user = userDto;
    this.token = token;
  }
}
