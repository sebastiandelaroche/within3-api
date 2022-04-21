import { Injectable } from '@nestjs/common';
import { isEmptyOrNil } from '@kerthin/utils';
import { ZipCodeArgsDTO } from '../dtos/zipcode-args.dto';
import { ZipCodeDTO } from '../dtos/zipcode.dto';
import { ZipCodeGateway } from '../gateways/zipcode.gateway';
import { Exception } from '../../../shared/exceptions';

@Injectable()
export class ZipCodeService {
  constructor(private readonly zipCodeGateway: ZipCodeGateway) {}

  async findZipCode(args: ZipCodeArgsDTO): Promise<ZipCodeDTO> {
    const zipCode = await this.zipCodeGateway.fetchZipCode(args);

    if (isEmptyOrNil(zipCode)) {
      throw new Exception('Zip Code Not Found', 'ZIP_CODE_NOT_FOUND');
    }

    return ZipCodeDTO.toDTO(zipCode);
  }
}
