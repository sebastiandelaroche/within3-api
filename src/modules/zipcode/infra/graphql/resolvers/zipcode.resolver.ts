import { Args, createUnionType, Query, Resolver } from '@nestjs/graphql';
import { UseInterceptors } from '@nestjs/common';
import { ZipCodeArgsDTO } from '../../../dtos/zipcode-args.dto';
import { ZipCodeDTO } from '../../../dtos/zipcode.dto';
import { ZipCodeService } from '../../../services/zipcode.service';
import { Exception } from '../../../../../shared/infra/graphql';
import { ValidationInterceptor } from '../../../../../shared/infra/graphql/ValidationInterceptor';

// TODO: Add this in another file
export const ZipCodeResult = createUnionType({
  name: 'ZipCodeResult',
  types: () => [ZipCodeDTO, Exception] as const,
  resolveType(value) {
    if (value.postalCode) return ZipCodeDTO;
    if (value.message || value.code) return Exception;
    return ZipCodeDTO;
  },
});

@Resolver()
export class ZipCodeResolver {
  constructor(private readonly zipCodeService: ZipCodeService) {}

  @UseInterceptors(ValidationInterceptor)
  @Query(() => ZipCodeResult)
  zipcode(@Args() args: ZipCodeArgsDTO): Promise<ZipCodeDTO> {
    return this.zipCodeService.findZipCode(args);
  }
}
