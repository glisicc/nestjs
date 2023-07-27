import { Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountDocument } from '../account/schemas/account.schema';

@Injectable()
export class ActionService {
  constructor(
    @InjectModel('Action') private readonly actionModel: Model<AccountDocument>,
  ) {}

  async create(createActionDto: CreateActionDto) {
    const newAction = new this.actionModel(createActionDto);

    const result = await newAction.save();

    return result;
  }

  findAll() {
    return `This action returns all action`;
  }

  findOne(id: number) {
    return `This action returns a #${id} action`;
  }

  update(id: number, updateActionDto: UpdateActionDto) {
    return `This action updates a #${id} action`;
  }

  remove(id: number) {
    return `This action removes a #${id} action`;
  }
}
