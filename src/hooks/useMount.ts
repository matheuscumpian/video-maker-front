import { EffectCallback, useEffect } from 'react';

const useMount = (effect: EffectCallback): void => {
  useEffect(effect, []);
};

export { useMount };
