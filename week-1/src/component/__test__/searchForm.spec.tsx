/**
 * 1. 과제 개요
 * 본 과제는 1주차 학습 내용을 바탕으로, 검색 컴포넌트를 단위(Unit) 테스트, 통합(Integration) 테스트, 스냅샷(Snapshot) 테스트까지 진행하는 것입니다.
 * 학습자들은 TDD(Test-Driven Development) 기법을 활용하여 테스트 코드를 작성하고, 이를 통해 검색 컴포넌트의 동작을 검증합니다.
 *
 * 2. 과제 내용
 * 1) 단위(Unit) 테스트:
 * 검색 컴포넌트의 각 개별 기능을 테스트합니다.
 * 입력 필드와 버튼의 렌더링, 사용자 입력 처리, 검색 결과 표시 등을 단위 테스트로 검증합니다.
 * 테스트 케이스 작성 예시:
 * 검색어 입력 필드가 제대로 렌더링 되는지 테스트
 * 검색 버튼 클릭 시 이벤트 핸들러가 호출되는지 테스트
 * 검색어 입력 후 검색 결과가 올바르게 표시되는지 테스트
 *
 * 2) 통합(Integration) 테스트:
 * 검색 컴포넌트와 다른 컴포넌트 또는 모듈 간의 상호작용을 테스트합니다.
 * API 호출과 검색 결과 표시, 상태 변화 등을 통합 테스트로 검증합니다.
 * 테스트 케이스 작성 예시:
 * API 호출이 성공적으로 이루어지고, 검색 결과가 화면에 표시되는지 테스트
 * 검색 컴포넌트와 결과 표시 컴포넌트 간의 데이터 전달이 올바르게 이루어지는지 테스트
 *
 * 3) 스냅샷(Snapshot) 테스트:
 * 검색 컴포넌트의 렌더링 결과를 스냅샷으로 저장하고, 이후 변경된 사항을 자동으로 비교합니다.
 * 컴포넌트의 UI 변경을 감지하고, 예기치 않은 변경이 발생했는지 확인합니다.
 * 테스트 케이스 작성 예시:
 * 검색 컴포넌트의 초기 렌더링 결과를 스냅샷으로 저장
 * 검색어 입력 후 렌더링 결과를 스냅샷으로 저장
 * 검색 결과 표시 후 렌더링 결과를 스냅샷으로 저장
 */

/**
 * @userStory
 * 유저는 검색어를 입력후 '검색'버튼을 클릭하여 리스트를 조회할 수 있다.
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../searchForm';

describe('SearchForm Rendering', () => {
  it('입력 필드와 버튼이 렌더링 되었다.', () => {
    // Given
    const { getByTestId } = render(<SearchForm />);

    // When
    const inputField = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    // Then
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
