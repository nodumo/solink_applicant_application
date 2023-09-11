import {MikroOrmModule} from "@mikro-orm/nestjs";
import {Module} from '@nestjs/common';

@Module({
  imports: [
    MikroOrmModule.forFeature([])
  ],
  exports: [],
})
export class BackendRepositoriesModule {}
