import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ColumnsController } from './columns/columns.controller';
import { CardsController } from './cards/cards.controller';
import { CommentsController } from './comments/comments.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CardsService } from './cards/cards.service';
import { CommentsService } from './comments/comments.service';
import { CommentsModule } from './comments/comments.module';
import { CardsModule } from './cards/cards.module';
import { ColumnsModule } from './columns/columns.module';
import { ColumnsService } from './columns/columns.service';
import * as configuration from './config/configuration';
import { TypeOrmConfigService } from './common/services/typeorm-config.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration.configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    AuthModule,
    UsersModule,
    CommentsModule,
    CardsModule,
    ColumnsModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ColumnsController,
    CardsController,
    CommentsController,
    AuthController,
  ],
  providers: [
    AppService,
    AuthService,
    UsersService,
    CardsService,
    CommentsService,
    ColumnsService,
  ],
})
export class AppModule {}
