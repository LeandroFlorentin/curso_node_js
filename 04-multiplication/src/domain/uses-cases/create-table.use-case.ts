export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /*
     *DI - Dependency Injection
     */
  }
  execute({ base, limit = 10 }: CreateTableOptions): string {
    let text = "";
    for (let i = 1; i < limit + 1; i++) {
      text += `${base} x ${i} = ${base * i}`;
      if (i < limit) text += "\n";
    }
    return text;
  }
}
