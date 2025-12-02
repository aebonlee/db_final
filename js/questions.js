// 데이터베이스 문제 데이터베이스
const questions = [
    // 객관식 문제 (1-30)
    {
        id: 1,
        type: 'multiple',
        question: '데이터베이스를 사용하는 경우의 장점이 아닌 것은?',
        options: ['데이터 중복의 최소화', '데이터의 공유', '데이터 무결성 유지', '전산화 비용 증가'],
        answer: 3,
        explanation: '데이터베이스 도입 시 장점은 중복 최소화, 공유, 일관성·무결성 유지, 독립성 확보 등이고, 전산화 비용 증가는 오히려 단점에 해당합니다.',
        guide: {
            title: '데이터베이스의 장점',
            content: `
                <h4>📊 데이터베이스 시스템의 주요 장점</h4>
                <p>데이터베이스 시스템은 기존의 파일 시스템의 한계를 극복하기 위해 개발되었습니다.</p>
                
                <h5>🔹 주요 장점들</h5>
                <ul>
                    <li><strong>데이터 중복 최소화</strong> - 동일한 데이터의 반복 저장 방지</li>
                    <li><strong>데이터 공유</strong> - 여러 사용자가 동시에 데이터 접근</li>
                    <li><strong>데이터 무결성 유지</strong> - 데이터의 정확성과 일관성 보장</li>
                    <li><strong>데이터 독립성</strong> - 응용프로그램과 데이터 구조의 분리</li>
                    <li><strong>데이터 보안</strong> - 접근 권한 제어 및 보안 강화</li>
                </ul>
                
                <h5>⚠️ 단점들</h5>
                <ul>
                    <li>초기 도입 비용이 높음</li>
                    <li>복잡한 시스템 관리</li>
                    <li>전문 인력 필요</li>
                </ul>
            `
        }
    },
    {
        id: 2,
        type: 'multiple',
        question: 'DBMS의 필수 기능이 아닌 것은?',
        options: ['정의 기능', '조작 기능', '제어 기능', '계산 기능'],
        answer: 3,
        explanation: 'DBMS는 데이터를 구조적으로 정의(DDL), 조작(DML), 제어(DCL) 하는 기능이 핵심입니다. 계산 기능은 응용 프로그램 차원의 역할입니다.',
        guide: {
            title: 'DBMS의 3대 기능',
            content: `
                <h4>⚙️ DBMS의 핵심 기능들</h4>
                <p>데이터베이스 관리 시스템(DBMS)은 다음 3가지 핵심 기능을 제공합니다.</p>
                
                <h5>🔹 정의 기능 (Definition)</h5>
                <ul>
                    <li>DDL(Data Definition Language) 사용</li>
                    <li>데이터베이스 구조 정의</li>
                    <li>스키마, 테이블, 인덱스 생성</li>
                </ul>
                
                <h5>🔹 조작 기능 (Manipulation)</h5>
                <ul>
                    <li>DML(Data Manipulation Language) 사용</li>
                    <li>데이터 삽입, 수정, 삭제, 검색</li>
                    <li>SELECT, INSERT, UPDATE, DELETE</li>
                </ul>
                
                <h5>🔹 제어 기능 (Control)</h5>
                <ul>
                    <li>DCL(Data Control Language) 사용</li>
                    <li>데이터 무결성, 보안, 회복, 동시성 제어</li>
                    <li>GRANT, REVOKE, COMMIT, ROLLBACK</li>
                </ul>
            `
        }
    },
    {
        id: 3,
        type: 'multiple',
        question: '스키마 3단계 구조가 아닌 것은?',
        options: ['외부 스키마', '개념 스키마', '내부 스키마', '구조 스키마'],
        answer: 3,
        explanation: '스키마는 외부(사용자 관점), 개념(전체 논리), 내부(물리) 스키마의 3단계 구조로 나뉩니다. 구조 스키마라는 용어는 쓰지 않습니다.',
        guide: {
            title: '스키마 3단계 구조',
            content: `
                <h4>📐 데이터베이스 스키마의 3단계 구조</h4>
                <p>데이터베이스 시스템은 데이터 독립성을 위해 3단계 스키마 구조를 채택합니다.</p>
                
                <h5>🔹 외부 스키마 (External Schema)</h5>
                <ul>
                    <li>사용자 관점에서 본 데이터베이스 구조</li>
                    <li>개별 사용자가 필요한 부분만 정의</li>
                    <li>뷰(View)를 통해 구현</li>
                </ul>
                
                <h5>🔹 개념 스키마 (Conceptual Schema)</h5>
                <ul>
                    <li>전체 데이터베이스의 논리적 구조</li>
                    <li>기관 전체의 데이터 관점</li>
                    <li>개체, 속성, 관계 정의</li>
                </ul>
                
                <h5>🔹 내부 스키마 (Internal Schema)</h5>
                <ul>
                    <li>물리적 저장 구조</li>
                    <li>파일 구조, 인덱스, 접근 경로</li>
                    <li>실제 저장 방법 정의</li>
                </ul>
                
                <h5>✨ 데이터 독립성</h5>
                <p>논리적 독립성: 개념 스키마 변경이 외부 스키마에 영향 없음</p>
                <p>물리적 독립성: 내부 스키마 변경이 개념 스키마에 영향 없음</p>
            `
        }
    },
    {
        id: 4,
        type: 'multiple',
        question: '릴레이션의 속성 값이 취할 수 있는 값들의 집합은?',
        options: ['튜플', '필드', '도메인', '차수'],
        answer: 2,
        explanation: '도메인(Domain)은 한 속성이 가질 수 있는 값들의 범위(집합)를 의미합니다. 예: 성별 속성의 도메인은 {남, 여}.',
        guide: {
            title: '관계형 데이터베이스 용어',
            content: `
                <h4>📚 관계형 데이터베이스 기본 용어</h4>
                
                <h5>🔹 도메인 (Domain)</h5>
                <ul>
                    <li>속성이 가질 수 있는 값들의 집합</li>
                    <li>예: 성별 도메인 = {남, 여}</li>
                    <li>예: 성적 도메인 = {A, B, C, D, F}</li>
                </ul>
                
                <h5>🔹 튜플 (Tuple)</h5>
                <ul>
                    <li>릴레이션의 행(Row)</li>
                    <li>하나의 레코드를 의미</li>
                </ul>
                
                <h5>🔹 속성 (Attribute)</h5>
                <ul>
                    <li>릴레이션의 열(Column)</li>
                    <li>필드(Field)와 같은 의미</li>
                </ul>
                
                <h5>🔹 차수 (Degree)</h5>
                <ul>
                    <li>릴레이션의 속성 개수</li>
                </ul>
                
                <h5>🔹 기수 (Cardinality)</h5>
                <ul>
                    <li>릴레이션의 튜플 개수</li>
                </ul>
            `
        }
    },
    {
        id: 5,
        type: 'multiple',
        question: '기본키의 특징으로 옳지 않은 것은?',
        options: ['중복될 수 없다', 'NULL을 허용하지 않는다', '유일성과 최소성을 가진다', '여러 개 정의할 수 있다'],
        answer: 3,
        explanation: '한 테이블에는 기본키는 1개만 존재합니다. 중복 불가, NULL 불가, 유일성·최소성을 만족해야 한다는 점은 모두 맞습니다.',
        guide: {
            title: '기본키(Primary Key)',
            content: `
                <h4>🔑 기본키의 특징과 조건</h4>
                
                <h5>🔹 기본키의 필수 조건</h5>
                <ul>
                    <li><strong>유일성(Uniqueness)</strong> - 중복 값 불가</li>
                    <li><strong>최소성(Minimality)</strong> - 최소한의 속성으로 구성</li>
                    <li><strong>개체 무결성</strong> - NULL 값 불가</li>
                    <li><strong>불변성</strong> - 값이 자주 변경되지 않음</li>
                </ul>
                
                <h5>🔹 기본키 제약사항</h5>
                <ul>
                    <li>한 테이블에 최대 1개만 존재</li>
                    <li>복합키 가능 (여러 속성 조합)</li>
                    <li>자동으로 인덱스 생성</li>
                </ul>
                
                <h5>🔹 관련 키 개념들</h5>
                <ul>
                    <li><strong>후보키</strong> - 기본키가 될 수 있는 모든 키</li>
                    <li><strong>대체키</strong> - 기본키로 선택되지 않은 후보키</li>
                    <li><strong>외래키</strong> - 다른 테이블의 기본키를 참조</li>
                </ul>
            `
        }
    },
    {
        id: 6,
        type: 'multiple',
        question: '후보키 중에서 기본키로 선택되지 않은 키를 무엇이라 하는가?',
        options: ['슈퍼키', '대체키', '외래키', '부분키'],
        answer: 1,
        explanation: '후보키들 중 하나가 기본키로 선정되고, 나머지 후보키들을 대체키(Alternate Key) 라고 부릅니다.',
    },
    {
        id: 7,
        type: 'multiple',
        question: '외래키(FK)에 대한 설명으로 옳은 것은?',
        options: ['NULL을 절대 가질 수 없다', '다른 테이블의 기본키를 참조한다', '유일성만 만족하면 된다', '기본키가 아닌 속성을 의미한다'],
        answer: 1,
        explanation: '외래키는 다른 릴레이션의 기본키를 참조하는 속성입니다. 경우에 따라 NULL을 가질 수 있으며, 유일성은 필수 조건이 아닙니다(중복 허용 가능).',
    },
    {
        id: 8,
        type: 'multiple',
        question: '데이터 독립성 중 논리적 독립성의 의미는?',
        options: ['내부 구조 변경 시 응용프로그램 영향 없음', '논리 구조 변경 시 응용프로그램 영향 없음', '저장 장치 변경 가능', '뷰 변경 가능'],
        answer: 1,
        explanation: '논리적 독립성은 개념 스키마(논리 구조) 변경이 있어도 응용프로그램(외부 스키마)에 영향을 주지 않는 것을 말합니다.',
    },
    {
        id: 9,
        type: 'multiple',
        question: '정규화의 목적이 아닌 것은?',
        options: ['이상 현상 제거', '데이터 중복 최소화', '저장공간 증가', '데이터 일관성 유지'],
        answer: 2,
        explanation: '정규화는 중복 감소, 이상(삽입·삭제·갱신) 현상 제거, 일관성과 무결성 향상이 목적입니다. 저장공간은 보통 줄어들지 늘어나지 않습니다.',
    },
    {
        id: 10,
        type: 'multiple',
        question: '제1정규형의 조건은?',
        options: ['기본키가 완전 함수 종속', '원자 값이어야 함', '이행 종속 제거', '모든 결정자가 후보키'],
        answer: 1,
        explanation: '제1정규형(1NF)은 모든 속성이 원자 값(더 이상 분해되지 않는 값) 을 가져야 합니다. 복합값·반복 속성을 허용하지 않습니다.',
    },
    {
        id: 11,
        type: 'multiple',
        question: '제2정규형의 조건은?',
        options: ['원자성', '부분 함수 종속 제거', '다치 종속 제거', '이행 종속 제거'],
        answer: 1,
        explanation: '제2정규형(2NF)은 1NF를 만족하면서 기본키가 복합키일 때, 기본키의 일부에만 종속되는 속성(부분 함수 종속)을 제거한 상태입니다.',
    },
    {
        id: 12,
        type: 'multiple',
        question: '제3정규형은 어떤 종속을 제거해야 하는가?',
        options: ['부분 함수 종속', '이행적 함수 종속', '다치 종속', '조인 종속'],
        answer: 1,
        explanation: '제3정규형(3NF)은 2NF를 만족하면서 일반 속성 간의 이행 함수 종속(X→Y, Y→Z ⇒ X→Z) 를 제거한 정규형입니다.',
    },
    {
        id: 13,
        type: 'multiple',
        question: '트랜잭션의 ACID 중 일관성이 의미하는 것은?',
        options: ['트랜잭션이 모두 수행되거나 취소', '데이터의 무결성 유지', '다른 트랜잭션 간 간섭 없음', '영구적으로 저장됨'],
        answer: 1,
        explanation: '일관성(Consistency)은 트랜잭션 수행 전·후에 DB가 정의된 무결성 제약 조건을 항상 만족하는 상태를 말합니다.',
    },
    {
        id: 14,
        type: 'multiple',
        question: 'COMMIT의 기능은?',
        options: ['트랜잭션 취소', '변경 내용 확정', '이전 상태로 되돌림', '백업 수행'],
        answer: 1,
        explanation: 'COMMIT은 트랜잭션을 정상 종료하고, 지금까지의 변경 내용을 데이터베이스에 영구 반영하는 명령입니다.',
    },
    {
        id: 15,
        type: 'multiple',
        question: 'ROLLBACK의 기능은?',
        options: ['작업 취소 및 이전상태 복구', '작업 영구 반영', '인덱스 생성', '제약 조건 생성'],
        answer: 0,
        explanation: 'ROLLBACK은 트랜잭션 내의 변경 작업을 모두 취소하고 트랜잭션 시작 전 상태로 복구하는 명령입니다.',
    },
    {
        id: 16,
        type: 'multiple',
        question: 'SELECT 문에서 중복 제거는 어떤 키워드인가?',
        options: ['DISTINCT', 'UNIQUE', 'REMOVE', 'CLEAN'],
        answer: 0,
        explanation: 'SELECT 문의 결과에서 중복 튜플을 제거할 때 DISTINCT 키워드를 사용합니다.',
    },
    {
        id: 17,
        type: 'multiple',
        question: 'WHERE 절의 역할은?',
        options: ['정렬', '조건 검색', '그룹화', '중복 제거'],
        answer: 1,
        explanation: 'WHERE 절은 SELECT에서 조건을 지정하여 필요한 튜플만 필터링할 때 사용합니다.',
    },
    {
        id: 18,
        type: 'multiple',
        question: 'GROUP BY 절을 사용할 때 주로 함께 사용하는, 그룹에 대한 조건 절은?',
        options: ['ORDER BY', 'WHERE', 'HAVING', 'DISTINCT'],
        answer: 2,
        explanation: 'GROUP BY로 그룹을 만든 후, 그룹 단위에 조건을 걸 때 HAVING 절을 사용합니다.',
    },
    {
        id: 19,
        type: 'multiple',
        question: 'ORDER BY에서 기본 정렬은?',
        options: ['ASC', 'DESC', 'RANDOM', 'NONE'],
        answer: 0,
        explanation: 'ORDER BY는 기본값이 ASC(오름차순) 이며, 내림차순은 DESC를 명시해야 합니다.',
    },
    {
        id: 20,
        type: 'multiple',
        question: '다음 중 DDL이 아닌 것은?',
        options: ['CREATE', 'ALTER', 'INSERT', 'DROP'],
        answer: 2,
        explanation: 'DDL은 테이블/뷰 구조를 정의·변경하는 CREATE, ALTER, DROP 등이며, INSERT는 DML(데이터 조작어)입니다.',
    },
    {
        id: 21,
        type: 'multiple',
        question: '다음 중 DML에 해당하는 것은?',
        options: ['GRANT', 'UPDATE', 'CREATE', 'ALTER'],
        answer: 1,
        explanation: 'DML은 SELECT, INSERT, UPDATE, DELETE 와 같이 데이터를 조작하는 명령어입니다.',
    },
    {
        id: 22,
        type: 'multiple',
        question: '데이터 무결성 제약 조건이 아닌 것은?',
        options: ['도메인 무결성', '개체 무결성', '참조 무결성', '논리 무결성'],
        answer: 3,
        explanation: '대표적인 무결성은 개체(기본키), 도메인(속성 범위), 참조(외래키) 무결성입니다. 논리 무결성이라는 용어는 일반적으로 사용하지 않습니다.',
    },
    {
        id: 23,
        type: 'multiple',
        question: '개체 무결성에서 기본키가 가질 수 없는 값은?',
        options: ['문자열', '숫자', 'NULL', '0'],
        answer: 2,
        explanation: '개체 무결성 규칙에 따라 기본키를 구성하는 속성은 NULL이나 중복 값을 가질 수 없습니다.',
    },
    {
        id: 24,
        type: 'multiple',
        question: '참조 무결성이 위배되는 경우는?',
        options: ['참조하는 PK가 존재하지 않음', 'PK가 변경됨', 'NULL 값 존재', '데이터가 중복됨'],
        answer: 0,
        explanation: '참조 무결성은 외래키 값이 NULL 또는 참조 릴레이션의 기본키 값 중 하나여야 함을 뜻합니다.',
    },
    {
        id: 25,
        type: 'multiple',
        question: '뷰(View)의 특징으로 틀린 것은?',
        options: ['가상 테이블', '독자적인 저장 공간을 가진다', '데이터 보안 제공', 'ALTER 불가'],
        answer: 1,
        explanation: '뷰는 기본 테이블 위에 논리적으로 정의된 가상 테이블이며, 별도의 물리 저장공간을 갖지 않습니다.',
    },
    {
        id: 26,
        type: 'multiple',
        question: '로킹(Locking)의 목적은?',
        options: ['저장공간 절약', '병행 제어', '중복성 증가', '속성 증가'],
        answer: 1,
        explanation: '로킹은 동시에 여러 트랜잭션이 수행될 때 같은 데이터에 대한 동시 접근을 제어하여 일관성과 무결성을 보장하는 병행 제어 기법입니다.',
    },
    {
        id: 27,
        type: 'multiple',
        question: '관계대수에서 SELECT(σ)의 기능은?',
        options: ['속성 추출', '조건에 맞는 튜플 선택', '조인', '나누기'],
        answer: 1,
        explanation: 'σ(Select)는 조건식을 만족하는 튜플(행)만 선택하는 수평 연산입니다.',
    },
    {
        id: 28,
        type: 'multiple',
        question: '조인(Join) 연산은 두 릴레이션을 어떻게 하는 연산인가?',
        options: ['나눔', '합침', '조건 검색', '정렬'],
        answer: 1,
        explanation: '조인은 두 개의 릴레이션을 공통 속성 등을 기준으로 결합하여 하나의 새로운 릴레이션을 생성하는 연산입니다.',
    },
    {
        id: 29,
        type: 'multiple',
        question: '트랜잭션 종료 시 로그를 기반으로 다시 수행하여 데이터베이스를 복구하는 것은?',
        options: ['UNDO', 'REDO', 'ROLLBACK', 'COMMIT'],
        answer: 1,
        explanation: 'REDO는 트랜잭션의 시작과 완료 기록이 있는 경우, 로그를 이용해 작업을 다시 수행하여 복구하는 기법입니다.',
    },
    {
        id: 30,
        type: 'multiple',
        question: '외래키는 어떤 테이블의 기본키를 참조하는가?',
        options: ['자기 테이블', '다른 테이블', '임의의 테이블', '시스템 테이블'],
        answer: 1,
        explanation: '외래키(FK)는 다른 릴레이션의 기본키(PK)를 참조하며, 이 관계를 통해 테이블 간 참조 무결성이 유지됩니다.',
    },
    
    // 단답식 문제 (31-50)
    {
        id: 31,
        type: 'short',
        question: '\'행\'을 의미하는 릴레이션 용어는?',
        answer: '튜플',
        keywords: ['튜플', 'tuple', 'Tuple'],
        explanation: '릴레이션에서 한 줄(레코드)에 해당하는 단위를 튜플이라고 합니다.',
    },
    {
        id: 32,
        type: 'short',
        question: '\'열\'을 의미하는 릴레이션 용어는?',
        answer: '속성',
        keywords: ['속성', 'attribute', 'Attribute', '애트리뷰트'],
        explanation: '릴레이션의 세로 방향, 각 컬럼을 속성(Attribute) 이라고 하며, 필드와 같은 의미입니다.',
    },
    {
        id: 33,
        type: 'short',
        question: '한 테이블에서 속성의 개수를 의미하는 용어는?',
        answer: '차수',
        keywords: ['차수', 'degree', 'Degree'],
        explanation: '릴레이션에서 열(속성)의 개수를 차수라고 부릅니다.',
    },
    {
        id: 34,
        type: 'short',
        question: '한 테이블에서 튜플의 개수를 의미하는 용어는?',
        answer: '기수',
        keywords: ['기수', 'cardinality', 'Cardinality', '카디널리티'],
        explanation: '릴레이션에서 행(튜플)의 개수를 기수(카디널리티)라고 합니다.',
    },
    {
        id: 35,
        type: 'short',
        question: '기본키로 선정되지 않은 후보키를 무엇이라 하는가?',
        answer: '대체키',
        keywords: ['대체키', 'alternate key', 'Alternate Key', '얼터네이트키'],
        explanation: '후보키 중 기본키로 채택되지 않은 나머지 키들을 대체키라고 부릅니다.',
    },
    {
        id: 36,
        type: 'short',
        question: '다른 테이블의 PK를 참조하는 속성은?',
        answer: '외래키',
        keywords: ['외래키', 'foreign key', 'Foreign Key', 'FK'],
        explanation: '외래키는 테이블 간 관계를 연결하기 위해 다른 릴레이션의 기본키를 참조하는 속성입니다.',
    },
    {
        id: 37,
        type: 'short',
        question: '모든 속성이 원자값이어야 함을 의미하는 정규형은?',
        answer: '제1정규형',
        keywords: ['제1정규형', '1NF', '1정규형', '첫번째정규형'],
        explanation: '제1정규형은 각 속성이 더 이상 나눌 수 없는 원자 값만을 가지도록 하는 정규형입니다.',
    },
    {
        id: 38,
        type: 'short',
        question: '부분 함수 종속을 제거한 정규형은?',
        answer: '제2정규형',
        keywords: ['제2정규형', '2NF', '2정규형', '두번째정규형'],
        explanation: '복합키의 일부에만 종속하는 속성이 없도록 한 것이 2NF입니다.',
    },
    {
        id: 39,
        type: 'short',
        question: '이행 함수 종속을 제거한 정규형은?',
        answer: '제3정규형',
        keywords: ['제3정규형', '3NF', '3정규형', '세번째정규형'],
        explanation: '일반 속성 간에 X→Y, Y→Z로 이어지는 이행 종속을 제거한 상태가 3NF입니다.',
    },
    {
        id: 40,
        type: 'short',
        question: '트랜잭션이 완전히 실행되거나 전혀 실행되지 않는 성질은?',
        answer: '원자성',
        keywords: ['원자성', 'atomicity', 'Atomicity'],
        explanation: '원자성은 트랜잭션을 더 이상 쪼갤 수 없는 단위로 보아 모두 수행되거나 전혀 수행되지 않도록 보장하는 특성입니다.',
    },
    {
        id: 41,
        type: 'short',
        question: '트랜잭션 완료 시 데이터가 영구적으로 저장되는 성질은?',
        answer: '영속성',
        keywords: ['영속성', 'durability', 'Durability', '지속성'],
        explanation: '영속성은 COMMIT 이후 트랜잭션의 결과가 시스템 고장 이후에도 보존되도록 하는 특성입니다.',
    },
    {
        id: 42,
        type: 'short',
        question: '트랜잭션 간 서로 간섭을 허용하지 않는 성질은?',
        answer: '고립성',
        keywords: ['고립성', 'isolation', 'Isolation', '격리성'],
        explanation: '고립성은 여러 트랜잭션이 동시에 수행되더라도 서로의 중간 결과를 보거나 영향을 주지 못하게 하는 성질입니다.',
    },
    {
        id: 43,
        type: 'short',
        question: '조건에 맞는 데이터를 검색하는 SQL 명령어는?',
        answer: 'SELECT',
        keywords: ['SELECT', 'select', 'Select'],
        explanation: 'SELECT는 테이블에서 원하는 컬럼과 튜플을 조회(검색) 하는 DML 명령어입니다.',
    },
    {
        id: 44,
        type: 'short',
        question: '새로운 튜플을 삽입하는 SQL 명령어는?',
        answer: 'INSERT',
        keywords: ['INSERT', 'insert', 'Insert'],
        explanation: 'INSERT는 테이블에 새로운 행(튜플)을 추가할 때 사용하는 명령어입니다.',
    },
    {
        id: 45,
        type: 'short',
        question: '기존 튜플을 수정하는 SQL 명령어는?',
        answer: 'UPDATE',
        keywords: ['UPDATE', 'update', 'Update'],
        explanation: 'UPDATE는 테이블에 이미 존재하는 데이터의 값을 변경(갱신) 할 때 사용합니다.',
    },
    {
        id: 46,
        type: 'short',
        question: '튜플을 삭제하는 SQL 명령어는?',
        answer: 'DELETE',
        keywords: ['DELETE', 'delete', 'Delete'],
        explanation: 'DELETE는 조건에 맞는 튜플을 삭제하는 DML입니다.',
    },
    {
        id: 47,
        type: 'short',
        question: '데이터 정의어(DDL) 중 테이블 생성 명령어는?',
        answer: 'CREATE',
        keywords: ['CREATE', 'create', 'Create'],
        explanation: 'CREATE는 테이블, 뷰, 데이터베이스 등의 객체를 새로 생성할 때 사용하는 DDL입니다.',
    },
    {
        id: 48,
        type: 'short',
        question: '권한을 사용자에게 부여하는 명령어는?',
        answer: 'GRANT',
        keywords: ['GRANT', 'grant', 'Grant'],
        explanation: 'GRANT는 특정 사용자에게 SELECT, INSERT 등의 권한을 부여하는 DCL입니다.',
    },
    {
        id: 49,
        type: 'short',
        question: '권한을 회수하는 명령어는?',
        answer: 'REVOKE',
        keywords: ['REVOKE', 'revoke', 'Revoke'],
        explanation: 'REVOKE는 이전에 GRANT로 부여한 권한을 취소(회수) 하는 명령어입니다.',
    },
    {
        id: 50,
        type: 'short',
        question: '트랜잭션의 변경 내용을 취소하는 명령어는?',
        answer: 'ROLLBACK',
        keywords: ['ROLLBACK', 'rollback', 'Rollback'],
        explanation: 'ROLLBACK은 트랜잭션 내에서 이루어진 변경 사항을 모두 되돌리고, 이전 상태로 복구합니다.',
    }
];