import {
  plainToClass,
  instanceToPlain,
  ClassTransformOptions,
} from 'class-transformer';

type Class<T = any> = { new (...args: any[]): T };

export const mapper = (
  clazz: Class,
  data: any,
  options?: ClassTransformOptions,
) => plainToClass(clazz, data, options);

export const toPlain = (clazz: Class | any) => instanceToPlain(clazz);
