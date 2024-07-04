import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name)private userModel:Model<User>) {}

  async create(createUserDto: CreateUserDto):Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // return this.userModel.updateOne({}, updateUserDto);
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {returnDocument: 'after'});
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
