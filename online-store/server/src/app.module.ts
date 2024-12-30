import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module'
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module'
import { ProviderModule } from './auth/provider/provider.module'
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module'
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util'
import { MailModule } from './libs/mail/mail.module'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'
import { ColorModule } from './color/color.module';
import { CategoryModule } from './category/category.module';
import { FileModule } from './file/file.module';
import { OrderModule } from './order/order.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { ReviewModule } from './review/review.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule,
		MailModule,
		EmailConfirmationModule,
		PasswordRecoveryModule,
		TwoFactorAuthModule,
		ColorModule,
		CategoryModule,
		FileModule,
		OrderModule,
		StatisticsModule,
		ProductModule,
		StoreModule,
		ReviewModule
	]
})
export class AppModule {}