import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

import { ZipCodeModule } from './modules/zipcode/zipcode.module';

const graphql = GraphQLModule.forRoot({
  sortSchema: true,
  autoSchemaFile: join(process.cwd(), 'schema.graphql'),
  driver: ApolloDriver,
});

@Module({
  imports: [graphql, ZipCodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
