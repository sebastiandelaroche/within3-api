import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, Transform } from 'class-transformer';

@ObjectType('Place')
export class PlaceDTO {
  @Expose()
  @Transform(({ obj, value }) => obj?.['place name'] || value || null)
  @Field()
  placeName: string;

  @Expose()
  @Field()
  longitude: string;

  @Expose()
  @Field()
  state: string;

  @Expose()
  @Transform(({ obj, value }) => obj?.['state abbreviation'] || value || null)
  @Field()
  stateAbbreviation: string;

  @Expose()
  @Field()
  latitude: string;
}
