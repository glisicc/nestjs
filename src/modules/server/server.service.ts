import { Injectable } from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServerDocument } from './schema/server.schema';

@Injectable()
export class ServerService {
  constructor(
    @InjectModel('Server') private readonly serverModel: Model<ServerDocument>,
  ) {}
  async create(createServerDto: CreateServerDto) {
    const newServer = new this.serverModel(createServerDto);

    const result = await newServer.save();

    return result;
  }

  findAll() {
    return `This action returns all server`;
  }

  findOne(id: number) {
    return `This action returns a #${id} server`;
  }

  update(id: number, updateServerDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return `This action removes a #${id} server`;
  }
}
