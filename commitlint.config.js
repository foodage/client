module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'fix', // 오류 수정
        'feat', // 기능 추가
        'add', // 파일 추가
        'style', //스타일 관련 작업
        'update', // 업데이트(동작하는 코드 변경)
        'remove', // 코드 제거 (주석 등 불필요한 코드 제거시)
        'delete', // 파일 삭제
        'refactor', // 리팩토링(동작하는 코드 개선)
        'deps', // 의존성 추가
        'docs', // 문서 작성 및 수정
        'hotfix', // 긴급 수정
        'settings', // 프로젝트 세팅 관련
        'etc', //기타 위에 해당되지 않는 작업
      ],
    ],
  },
};
