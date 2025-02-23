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

## 3주차 문제
CI/CD 단계 정의 및 적용하기

`지시사항`
```
1. 과제 개요
- 본 과제는 3주차 학습 내용을 바탕으로, 특정 문제 상황을 정의하고, 해당 문제를 해결하기 위해 필요한 CI/CD 단계를 정의 및 적용하는 것입니다.
- 학습자들은 실무에서 발생할 수 있는 문제 상황을 가정하고, 이를 해결하기 위해 CI/CD 파이프라인을 설계하고 구현합니다.

2. 문제 상황 정의
- 웹 애플리케이션이 지속적인 기능 업데이트와 버그 수정으로 인해 배포 주기가 매우 짧아졌습니다. 매번 수동으로 배포를 진행하던 중, 배포 과정에서 실수가 발생하여 사용자에게 장애가 발생했습니다. 이를 해결하기 위해 자동화된 CI/CD 파이프라인을 구축하여 안정적이고 신속한 배포를 진행해야 합니다.

3. 과제 내용
- CI/CD 단계 정의:
  - 코드 푸시 및 빌드: 개발자가 코드를 푸시하면 자동으로 빌드가 시작됩니다.
    - 툴: GitLab CI/CD, Jenkins, CircleCI 등
  - 유닛 테스트: 빌드가 성공하면 유닛 테스트가 자동으로 실행됩니다.
    - 툴: Jest, Mocha, JUnit 등
  - 통합 테스트: 유닛 테스트가 성공하면 통합 테스트가 자동으로 실행됩니다.
    - 툴: Selenium, Cypress 등
  - 코드 품질 검사: 코드의 품질을 검사하여 코드 규칙을 준수했는지 확인합니다.
     - 툴: ESLint, SonarQube 등
  - 배포: 모든 테스트와 코드 품질 검사가 성공하면 프로덕션 환경에 자동으로 배포됩니다.
    - 툴: Docker, Kubernetes, AWS CodeDeploy 등
  - 모니터링 및 피드백: 배포 후 애플리케이션의 상태를 모니터링하고, 피드백을 수집합니다.
    - 툴: Prometheus, Grafana, ELK Stack 등
- CI/CD 적용:
  - 각 단계에 필요한 설정 파일을 작성하고, CI/CD 툴을 설정하여 파이프라인을 구축합니다.
  - 예시: GitLab CI/CD를 사용하는 경우 .gitlab-ci.yml 파일을 작성하여 각 단계의 스크립트를 정의합니다.
- CI/CD 파이프라인 구축 및 실행:
  - 정의한 CI/CD 파이프라인을 실제로 구축하고, 애플리케이션에 적용하여 자동화된 배포를 진행합니다.
  - 파이프라인 실행 결과를 캡처하여 제출합니다.
```