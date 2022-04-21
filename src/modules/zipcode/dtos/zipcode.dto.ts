import { Field, ObjectType } from '@nestjs/graphql';
import { Expose, Transform, Type } from 'class-transformer';
import { v4 } from 'uuid';
import { mapper } from '../../../shared/utils/mapper';
import { PlaceDTO } from './place.dto';

@ObjectType('ZipCode')
export class ZipCodeDTO {
  @Expose()
  @Transform(() => v4())
  @Field({ nullable: true })
  key: string;

  @Expose()
  @Transform(() => new Date())
  @Field({ nullable: true })
  timestamp: Date;

  @Expose()
  @Transform(({ obj, value }) => obj?.['post code'] || value || null)
  @Field({ nullable: true })
  postalCode: string;

  @Expose()
  @Field({ nullable: true })
  country: string;

  @Expose()
  @Transform(({ obj, value }) => obj?.['country abbreviation'] || value || null)
  @Field({ nullable: true })
  countryAbbreviation: string;

  @Expose()
  @Type(() => PlaceDTO)
  @Field(() => [PlaceDTO], { nullable: true })
  places: PlaceDTO[];

  static toDTO(raw: any): ZipCodeDTO {
    return mapper(ZipCodeDTO, raw, { excludeExtraneousValues: true });
  }
}
