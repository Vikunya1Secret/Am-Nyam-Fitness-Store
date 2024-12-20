import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findProfile(userId: string): Promise<{
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
    updateProfile(userId: string, dto: UpdateUserDto): Promise<{
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
