import { Injectable } from '@nestjs/common';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StrategyDocument } from './schemas/strategy.schema';
import { Model } from 'mongoose';

@Injectable()
export class StrategyService {
  constructor(
    @InjectModel('Strategy')
    private readonly strategyModel: Model<StrategyDocument>,
  ) {}

  async create(createStrategyDto: CreateStrategyDto) {
    const newStrategy = new this.strategyModel(createStrategyDto);

    const result = await newStrategy.save();

    return result;
  }

  findAll() {
    return `This action returns all strategy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} strategy`;
  }

  update(id: number, updateStrategyDto: UpdateStrategyDto) {
    return `This action updates a #${id} strategy`;
  }

  remove(id: number) {
    return `This action removes a #${id} strategy`;
  }
}
