import {Module} from '@nestjs/common';
import {BackendRepositoriesModule} from "@acme-security/backend-repositories";

@Module({
  imports: [
    BackendRepositoriesModule
  ],
})
export class BackendServicesModule {}
