/**
 * @usercase
 * 입력받은 문자열에서 가장 많이 사용된 문자를 반환한다.
 */

import { describe, it, expect } from 'vitest';
import { findMostFrequentChar } from '../../utils/findMostFrequentChar';

describe('findMostFrequentChar - 가장 많이 사용된 문자를 찾아서 반환한다.', () => {
  it('문자열이 비어있으면 빈 문자열을 반환한다.', () => {
    const inputVal = '';
    const result = findMostFrequentChar(inputVal);
    expect(result).toBe('');
  });

  it('가장 많이 사용된 문자가 하나이면 해당 문자를 반환한다.', () => {});

  it('가장 많이 사용된 문자가 여러개이면 하나만 반환한다.', () => {});
});
