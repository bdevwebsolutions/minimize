import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UrlsModule } from './urls/urls.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.DATABASE_LINK ||
        'mongodb+srv://BDEVBjarne:Jackandjones2110@minimize.zqggi.mongodb.net/minimize?retryWrites=true&w=majority',
    ),
    UrlsModule,
  ],
})
export class AppModule {}
