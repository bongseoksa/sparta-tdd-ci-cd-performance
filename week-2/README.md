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

## 2주차 문제
함수 TDD로 구현해보기

`지시사항`
```
1. 과제 개요
본 과제는 2주차 학습 내용을 바탕으로, 함수 하나를 선택하여 TDD(Test-Driven Development) 기법을 활용해 구현하는 것입니다.
학습자들은 TDD의 사이클(테스트 작성, 코드 작성, 리팩토링)을 따라가며 함수를 구현하고, 이를 통해 TDD의 기본 원칙을 체득합니다.

2. 과제 내용
1) 함수 정의:
구현할 함수는 문자열에서 가장 많이 등장한 문자를 찾아내는 함수입니다.
함수명: findMostFrequentChar
입력: 문자열 (예: "test")
출력: 가장 많이 등장한 문자 (예: "t")

2) 테스트 케이스 작성:
먼저, 함수의 동작을 검증할 테스트 케이스를 작성합니다.
다양한 입력에 대해 예상되는 출력을 명확히 정의하고, 이를 테스트합니다.
테스트 케이스 작성 예시:
빈 문자열 입력 시: findMostFrequentChar("") -> ""
단일 문자 입력 시: findMostFrequentChar("a") -> "a"
여러 문자가 동일하게 등장 시: findMostFrequentChar("abac") -> "a"
가장 많이 등장하는 문자가 여러 개일 때: findMostFrequentChar("aabb") -> "a" 또는 "b"

3) 코드 작성:
작성한 테스트 케이스를 통과하도록 함수 findMostFrequentChar를 구현합니다.
초기에는 가장 간단한 방법으로 테스트를 통과시키고, 점진적으로 리팩토링하여 최적의 코드를 작성합니다.
TDD 사이클을 반복하여 함수를 완성합니다.

4) 리팩토링:
모든 테스트 케이스를 통과하는 코드를 작성한 후, 코드의 가독성과 성능을 향상시키기 위해 리팩토링을 진행합니다.
리팩토링 후에도 모든 테스트 케이스가 통과하는지 확인합니다.
```