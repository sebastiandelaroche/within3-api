import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exception {
  @Field()
  message: string;

  @Field()
  code: string;
}
