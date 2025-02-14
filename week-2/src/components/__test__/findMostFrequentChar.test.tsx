/**
 * @usercase
 * 입력받은 문자열에서 가장 많이 사용된 문자를 반환한다.
 */

import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import InputComp from '../findMostFrequentChar';

describe('findMostFrequentChar - 가장 많이 사용된 문자를 찾아서 반환한다.', () => {
  const {getByTestId} = render(<InputComp />);
  const inputElement = getByTestId('input');
  const mostFrequentCharElement = getByTestId('most-frequent-char');

  it('문자열이 비어있면 빈 문자열을 반환한다.', () => {
    const inputVal = '';
    fireEvent.change(inputElement, { target: { value: inputVal } });
    expect(mostFrequentCharElement.textContent).toBe('');
  });

  it('가장 많이 사용된 문자가 하나이면 해당 문자를 반환한다.', () => {
    const inputVal = 'abca';
    fireEvent.change(inputElement, { target: { value: inputVal } });
    expect(mostFrequentCharElement.textContent).toBe('a');
  });

  it('가장 많이 사용된 문자가 여러개이면 하나만 반환한다.', () => {
    const inputVal = 'aabb';
    fireEvent.change(inputElement, { target: { value: inputVal } });
    expect(mostFrequentCharElement.textContent === 'a' || mostFrequentCharElement.textContent === 'b').toBeTruthy();
  });
});
