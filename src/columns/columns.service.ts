import { Injectable } from '@nestjs/common';

interface Column {
  name: string;
}

@Injectable()
export class ColumnsService {
  createColumn(column: Column) {}

  deleteColumn(id: number) {}

  getColumns() {}

  getCurrentColumn(id: number) {}
}
