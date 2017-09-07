  import { PhoneCarrier } from './phoneCarrier.model';
  import {Role} from './role.model';
  import {UserNotification} from './userNotification.model';

  export class User {
            public id : string;
            public email : string;
            public emailConfirmed : boolean;
            public passwordHash : string;
            public securityStamp : string;
            public phoneNumber : string;
            public phoneNumberConfirmed : boolean;
            public twoFactorEnabled : boolean;
            public lockoutEndDateUtc : string;
            public lockoutEnabled : boolean;
            public accessFailedCount : number;
            public userName : string;
            public firstName : string;
            public lastName : string;
            public manager : User;
            public phoneCarrier : PhoneCarrier;
            public isActive : boolean;
            public roles : Role[];
            public userNotifications : UserNotification[];

            constructor(id: string, email: string, emailConfirmed: boolean,passwordHash: string, securityStamp: string, 
            phoneNumber: string, phoneNumberConfirmed: boolean, twoFactorEnabled: boolean, lockoutEndDateUtc: string, lockoutEnabled: boolean,
            accessFailedCount: number, userName: string, firstName: string, lastName: string,  manager: User, phoneCarrier: PhoneCarrier, 
            isActive: boolean, roles: Role[], userNotifications: UserNotification[]) {
                this.id = id;
                this.email = email;
                this.emailConfirmed = emailConfirmed;
                this.passwordHash = passwordHash;
                this.securityStamp = securityStamp;
                this.phoneNumber = phoneNumber;
                this.phoneNumberConfirmed = phoneNumberConfirmed;
                this.twoFactorEnabled = twoFactorEnabled;
                this.lockoutEndDateUtc = lockoutEndDateUtc;
                this.lockoutEnabled = lockoutEnabled;
                this.accessFailedCount = accessFailedCount;
                this.userName = userName;
                this.firstName = firstName;
                this.lastName = lastName;
                this.manager = manager;
                this.phoneCarrier = phoneCarrier;
                this.isActive = isActive;
                this.roles = roles;
                this.userNotifications = userNotifications;
                        }
        }  