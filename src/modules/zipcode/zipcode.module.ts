import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ZipCodeResolver } from './infra/graphql/resolvers/zipcode.resolver';
import { ZipCodeService } from './services/zipcode.service';
import { ZipCodeGateway } from './gateways/zipcode.gateway';

@Module({
  imports: [HttpModule],
  providers: [ZipCodeResolver, ZipCodeService, ZipCodeGateway],
})
export class ZipCodeModule {}
