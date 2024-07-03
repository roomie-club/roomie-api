import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';
@Controller('dogs')
export class DogsController {
    constructor (private dogService: DogsService) {}

    @Get()
    getHello(): string {
      return "Dogs";
    }

    @Get("/more")
    getMoreDogs(): string {
      return "Dogs Dogs Dogs";
    }

    @Get("/many/more")
    manyMoreDogs() : string[] {
        return this.dogService.soManyDogs();
    }
    

}
