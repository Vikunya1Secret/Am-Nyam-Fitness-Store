import { AuthMethod } from '@prisma/__generated__';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findById(id: string): Promise<{
        accounts: {
            id: string;
            provider: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            refreshToken: string | null;
            accessToken: string | null;
            expiresAt: number;
        }[];
    } & {
        id: string;
        picture: string | null;
        email: string;
        displayName: string;
        role: import("@prisma/__generated__").$Enums.UserRole;
        isTwoFactorEnabled: boolean;
        password: string;
        isVerified: boolean;
        method: import("@prisma/__generated__").$Enums.AuthMethod;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        accounts: {
            id: string;
            provider: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            refreshToken: string | null;
            accessToken: string | null;
            expiresAt: number;
        }[];
    } & {
        id: string;
        picture: string | null;
        email: string;
        displayName: string;
        role: import("@prisma/__generated__").$Enums.UserRole;
        isTwoFactorEnabled: boolean;
        password: string;
        isVerified: boolean;
        method: import("@prisma/__generated__").$Enums.AuthMethod;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(email: string, password: string, displayName: string, picture: string, method: AuthMethod, isVerified: boolean): Promise<{
        accounts: {
            id: string;
            provider: string;
            type: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            refreshToken: string | null;
            accessToken: string | null;
            expiresAt: number;
        }[];
    } & {
        id: string;
        picture: string | null;
        email: string;
        displayName: string;
        role: import("@prisma/__generated__").$Enums.UserRole;
        isTwoFactorEnabled: boolean;
        password: string;
        isVerified: boolean;
        method: import("@prisma/__generated__").$Enums.AuthMethod;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(userId: string, dto: UpdateUserDto): Promise<{
        id: string;
        picture: string | null;
        email: string;
        displayName: string;
        role: import("@prisma/__generated__").$Enums.UserRole;
        isTwoFactorEnabled: boolean;
        password: string;
        isVerified: boolean;
        method: import("@prisma/__generated__").$Enums.AuthMethod;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
