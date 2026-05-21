import { SIMULATED_DELAYS } from './catalog';

export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function withMinimumDelay(task, ms = SIMULATED_DELAYS.DEFAULT) {
  const [result] = await Promise.all([task(), wait(ms)]);
  return result;
}
