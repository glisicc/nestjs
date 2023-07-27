import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatusDocument } from './schemas/status.schema';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel('Status') private readonly statusModel: Model<StatusDocument>,
  ) {}

  async create(createStatusDto: CreateStatusDto) {
    const newStatus = new this.statusModel(createStatusDto);

    const result = await newStatus.save();

    return result;
  }

  findAll() {
    return `This action returns all status`;
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
