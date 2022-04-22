import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({ example: 'qwerty@mail.ru', description: 'user email' })
    readonly email:string
    @ApiProperty({ example: '12345qwerty@#', description: 'user pasword' })
    readonly password:string
}