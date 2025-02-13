# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 1주차 문제
검색 컴포넌트를 단위, 통합, 스냅샷 테스트까지 진행하기


`지시사항`
```
1. 과제 개요
본 과제는 1주차 학습 내용을 바탕으로, 검색 컴포넌트를 단위(Unit) 테스트, 통합(Integration) 테스트, 스냅샷(Snapshot) 테스트까지 진행하는 것입니다.
학습자들은 TDD(Test-Driven Development) 기법을 활용하여 테스트 코드를 작성하고, 이를 통해 검색 컴포넌트의 동작을 검증합니다.

2. 과제 내용
1) 단위(Unit) 테스트:
검색 컴포넌트의 각 개별 기능을 테스트합니다.
입력 필드와 버튼의 렌더링, 사용자 입력 처리, 검색 결과 표시 등을 단위 테스트로 검증합니다.
테스트 케이스 작성 예시:
검색어 입력 필드가 제대로 렌더링 되는지 테스트
검색 버튼 클릭 시 이벤트 핸들러가 호출되는지 테스트
검색어 입력 후 검색 결과가 올바르게 표시되는지 테스트

2) 통합(Integration) 테스트:
검색 컴포넌트와 다른 컴포넌트 또는 모듈 간의 상호작용을 테스트합니다.
API 호출과 검색 결과 표시, 상태 변화 등을 통합 테스트로 검증합니다.
테스트 케이스 작성 예시:
API 호출이 성공적으로 이루어지고, 검색 결과가 화면에 표시되는지 테스트
검색 컴포넌트와 결과 표시 컴포넌트 간의 데이터 전달이 올바르게 이루어지는지 테스트

3) 스냅샷(Snapshot) 테스트:
검색 컴포넌트의 렌더링 결과를 스냅샷으로 저장하고, 이후 변경된 사항을 자동으로 비교합니다.
컴포넌트의 UI 변경을 감지하고, 예기치 않은 변경이 발생했는지 확인합니다.
테스트 케이스 작성 예시:
검색 컴포넌트의 초기 렌더링 결과를 스냅샷으로 저장
검색어 입력 후 렌더링 결과를 스냅샷으로 저장
검색 결과 표시 후 렌더링 결과를 스냅샷으로 저장
```