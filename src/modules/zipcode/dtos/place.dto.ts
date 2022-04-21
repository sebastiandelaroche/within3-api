import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, Transform } from 'class-transformer';

@ObjectType('Place')
export class PlaceDTO {
  @Expose()
  @Transform(({ obj, value }) => obj?.['place name'] || value || null)
  @Field({ nullable: true })
  placeName: string;

  @Expose()
  @Field({ nullable: true })
  longitude: string;

  @Expose()
  @Field({ nullable: true })
  state: string;

  @Expose()
  @Transform(({ obj, value }) => obj?.['state abbreviation'] || value || null)
  @Field({ nullable: true })
  stateAbbreviation: string;

  @Expose()
  @Field({ nullable: true })
  latitude: string;
}
