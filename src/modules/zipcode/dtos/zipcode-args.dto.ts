import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ZipCodeArgsDTO {
  @Field()
  country: string;

  @Field()
  postalCode: string;
}
