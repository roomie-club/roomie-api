import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {

    soManyDogs() {
        return ["Dogs", "Dogs", "Dogs", "Dogs","Dogs", "Dogs","Dogs", "Dogs","Dogs", "Dogs"];
    }

}


