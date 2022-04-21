import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, Transform, Type } from 'class-transformer';
import { mapper } from '../../../shared/utils/mapper';
import { PlaceDTO } from './place.dto';

@ObjectType('ZipCode')
export class ZipCodeDTO {
  @Expose()
  @Transform(({ obj, value }) => obj?.['post code'] || value || null)
  @Field()
  postalCode: string;

  @Expose()
  @Field()
  country: string;

  @Expose()
  @Transform(({ obj, value }) => obj?.['country abbreviation'] || value || null)
  @Field()
  countryAbbreviation: string;

  @Expose()
  @Type(() => PlaceDTO)
  @Field(() => [PlaceDTO])
  places: PlaceDTO[];

  static toDTO(raw: any): ZipCodeDTO {
    return mapper(ZipCodeDTO, raw, { excludeExtraneousValues: true });
  }
}
