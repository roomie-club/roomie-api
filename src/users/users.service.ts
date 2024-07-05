import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserDto.password);
    const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      returnDocument: 'after',
    });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return `${salt}:${hashedPassword}`;
  }

  async findUserByEmail(email:string):Promise<User|undefined>{
    return  this.userModel.findOne({email}).exec();
  }

}
