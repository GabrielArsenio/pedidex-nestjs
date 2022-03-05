import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './configs/winston.config';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoItemModule } from './pedido-item/pedido-item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    WinstonModule.forRoot(winstonConfig),
    UsersModule,
    AuthModule,
    ClienteModule,
    ProdutoModule,
    PedidoItemModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    }
  ],
})
export class AppModule { }
