import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/library/prisma/prisma.module';
// import { S3Module } from '@/third-party-module/aws/s3/s3.module';
// import { S3Helper } from '@/modules/shared/helpers/s3.helper';

@Global()
@Module({
  imports: [ConfigModule, PrismaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class SharedModule {}
