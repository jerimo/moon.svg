import type { CreateMoonFunc } from './types';
import { getMoonPhases } from '../utils/moon';

const createMoon: CreateMoonFunc = async (date: string, size: string) => {
  const { k, isWaxing } = await getMoonPhases(
    date ? new Date(date as string) : undefined,
  );

  // TODO: 해당 테마 내용 작성
  return '';
};

export default createMoon;