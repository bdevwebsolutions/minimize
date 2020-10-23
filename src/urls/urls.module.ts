import { UrlSchema } from './urls.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Url', schema: UrlSchema}])],
  controllers: [UrlsController],
  providers: [UrlsService]
})
export class UrlsModule {}
