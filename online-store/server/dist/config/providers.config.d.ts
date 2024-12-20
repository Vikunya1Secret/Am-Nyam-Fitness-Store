import { ConfigService } from '@nestjs/config';
import { TypeOptions } from '@/auth/provider/provider.constants';
export declare const getProvidersConfig: (configService: ConfigService) => Promise<TypeOptions>;
