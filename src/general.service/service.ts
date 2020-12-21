import { NotFoundException } from "@nestjs/common";

export class GeneralServiceClass<T> {
    constructor(  private repository ) {}

    async get(condition): Promise<T[]> {
      return this.repository.find({ where: condition })
    }
  
    async getById( id: number, condition): Promise<T> {
      const found = await this.repository.findOne({ where: { id, ...condition } });
      if (!found) 
        throw new NotFoundException(`registro con el id: "${id}" no fue encontrado`);
      return found;
    }
    
    async delete(id: number, condition): Promise<void> {
      const result = await this.repository.delete({ id, ...condition});
      if (result.affected === 0) 
        throw new NotFoundException(`registro con el id: "${id}" no fue encontrado`);
    }

    async create( createDto: object): Promise<T> {
      return this.repository.createRecord(createDto);
    }
  
  }
  