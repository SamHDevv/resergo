import { join } from 'path';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CompanyEntity } from '../entities/company.entity';
import { ReserveEntity } from '../entities/reserve.entity';
import { RoleEntity } from '../entities/role.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [UserEntity],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];