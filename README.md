# 🎓 데이터베이스 문제 출제 시스템

<div align="center">

![Version](https://img.shields.io/badge/version-v1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS3](https://img.shields.io/badge/CSS3-Grid%20%26%20Flexbox-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange.svg)

**데이터베이스 기초 이론 종합 평가 시스템** 🚀

*Interactive Database Problem Solving System*

[🔗 라이브 데모](https://aebonlee.github.io/db_final/) | [📚 문서](./Dev_md/) | [🐛 이슈 신고](https://github.com/aebonlee/db_final/issues)

</div>

---

## 🔄 v1.0 주요 기능

### 🔧 **핵심 기능**
- ✅ **정확한 채점 시스템**: 데이터베이스 이론 기반 정답 검증
- ✅ **키워드 기반 채점**: 단답형 문제의 유연한 답안 인정
- ✅ **상세한 해설**: 각 문제별 개념 설명 및 학습 가이드

### 🔒 **보안 강화**
- 🛡️ **데이터 암호화**: localStorage 데이터 암호화 및 무결성 검증
- ⏱️ **타이머 보호**: 실시간 타이머 조작 감지 및 방지
- 🚫 **부정행위 방지**: 개발자 도구 감지, 복사/붙여넣기 차단
- 🔐 **체크섬 검증**: 데이터 무결성 실시간 모니터링

### 📊 **평가 시스템**
- 정확한 점수 계산 (정답당 2점)
- 키워드 기반 단답형 채점
- 대소문자 구분 없는 유연한 채점
- 부분 일치 허용 시스템

---

## 🌟 프로젝트 소개

데이터베이스 문제 출제 시스템은 **데이터베이스 기초 이론에 대한 정확한 평가와 효과적인 학습을 동시에 제공하는** 교육 플랫폼입니다.

### 🎯 **평가와 학습의 균형**
- **정확한 평가**: 데이터베이스 이론 기반의 공정한 채점
- **50개 문제**: 객관식 30문항, 단답식 20문항
- **즉시 피드백**: 문제별 상세 해설과 개념 설명
- **진도 추적**: 실시간 점수 및 진행률 표시

## ✨ 주요 기능

### 📝 **평가 시스템**
- **객관식 30문제**: 4지선다형, 정확한 답안 선택 필요
- **단답형 20문제**: 키워드 매칭, 대소문자 구분 없음
- **채점 기준**:
  - S 등급: 100점 (완벽)
  - A 등급: 90-99점 (우수)
  - B 등급: 80-89점 (양호)
  - C 등급: 70-79점 (합격)
  - D 등급: 70점 미만 (재학습 필요)

### 🧠 **학습 지원**
- **실시간 학습 가이드**: 각 문제별 관련 개념 설명
- **오답 피드백**: 틀린 문제에 대한 상세 해설
- **개념 설명**: 데이터베이스 이론 체계적 설명
- **예시 제공**: 실제 활용 가능한 예제 제공

### 🔒 **보안 기능**
```javascript
// 보안 기능 예시
- 데이터 암호화: Base64 + 난독화
- 타이머 무결성: 실시간 검증
- 개발자 도구 감지: 주기적 모니터링
- 체크섬 검증: SHA-like 해싱
```

### 💾 **데이터 관리**
- **자동 저장**: 10초마다 자동 저장
- **세션 복구**: 브라우저 새로고침 시 진도 유지
- **암호화 저장**: 보안 강화된 localStorage 활용

---

## 🚀 빠른 시작

### 1️⃣ **즉시 체험** (권장)
```
🌐 https://aebonlee.github.io/db_final/
```
> GitHub Pages에서 즉시 체험 가능! 설치 불필요

### 2️⃣ **로컬 설치**
```bash
# 1. 저장소 클론
git clone https://github.com/aebonlee/db_final.git

# 2. 디렉토리 이동  
cd db_final

# 3. 브라우저에서 실행
open index.html  # macOS
start index.html # Windows
```

---

## 📁 프로젝트 구조

```
db_final/
├── 📄 index.html              # 메인 페이지 (사용자 정보 입력)
├── 📄 exam.html               # 시험 진행 페이지
├── 📄 result.html             # 결과 및 해설 페이지
├── 📂 js/
│   ├── 📄 main.js            # 메인 페이지 로직
│   ├── 📄 exam.js            # 시험 진행 로직
│   ├── 📄 result.js          # 결과 처리 및 채점
│   ├── 📄 questions.js       # 데이터베이스 문제 데이터
│   └── 📄 security.js        # 보안 유틸리티
├── 📂 css/
│   └── 📄 styles.css         # 통합 스타일시트
└── 📂 Dev_md/                # 개발 문서
```

---

## 📊 문제 구성

### 데이터베이스 기초 (30개 객관식 문제)
- 데이터베이스 시스템 개요
- DBMS의 기능과 구조
- 스키마와 데이터 독립성
- 관계형 데이터베이스 모델
- 키(Key)의 종류와 특성
- 정규화 이론 (1NF, 2NF, 3NF)
- 트랜잭션과 ACID 특성
- SQL 명령어 (DDL, DML, DCL)
- 무결성 제약조건
- 뷰(View)와 인덱스
- 병행 제어와 로킹
- 데이터베이스 복구

### 용어 및 개념 (20개 단답식 문제)
- 관계형 모델 용어
- 키의 종류
- 정규형 개념
- 트랜잭션 속성
- SQL 명령어
- 데이터베이스 객체
- 무결성 개념

---

## 🛡️ 보안 및 무결성

### 구현된 보안 기능
1. **데이터 암호화**: 모든 저장 데이터 암호화
2. **타이머 검증**: 실시간 시간 조작 감지
3. **복사 방지**: 시험 중 복사/붙여넣기 차단
4. **개발자 도구 감지**: 콘솔 접근 모니터링
5. **체크섬 검증**: 데이터 무결성 확인

---

## 🎓 학습 효과

- ✨ **즉각적 피드백**: 실시간 점수 확인
- 📈 **진도 시각화**: 진행률 바와 문제 네비게이션
- 💡 **상세 해설**: 모든 문제에 대한 설명 제공
- 🎯 **목표 지향적**: 명확한 등급 시스템
- 📚 **체계적 학습**: 데이터베이스 이론 체계적 정리

---

## 📚 문제 출처 및 참고 자료

본 시스템의 문제는 다음을 기반으로 구성되었습니다:
- 정보처리기사 실기 데이터베이스 문제
- 데이터베이스 핵심 요약 자료
- 정보처리기사 이론서 및 문제집
- 대학 데이터베이스 교육과정 표준

---

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

## 📞 문의

프로젝트 관련 문의나 버그 리포트는 [GitHub Issues](https://github.com/aebonlee/db_final/issues)를 통해 제출해 주세요.

---

<div align="center">
Made with ❤️ for Database Education
<br>
© 2025 Database Problem Solving System
</div>