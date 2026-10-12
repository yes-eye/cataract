# 예스안과의원 공식 웹사이트 프로젝트

목동 예스안과의원(https://xn--220bq3dq4h3sb520a.com / 목동백내장.com)의 공식 웹사이트 정적(Static) 웹사이트 프로젝트입니다.  
의료법 제56조(의료광고의 금지 등)를 엄격히 준수하고, 웹 접근성 표준(WCAG 2.1 AA)과 한국형 SEO(네이버 서치어드바이저, 구글 서치콘솔 등)에 최적화하여 제작되었습니다.

---

## 1. 프로젝트 개요

- **병원명:** 예스안과의원 (대표자: 박진환)
- **대표전화:** 02-6956-1112
- **소재지:** 서울특별시 양천구 등촌로 32 목동태영프라자 (4층 수술센터 / 5층 외래검사센터)
- **공식 도메인:** `https://xn--220bq3dq4h3sb520a.com` (한글 도메인: `목동백내장.com`)
- **기술 스택:** 정적 웹 표준 (HTML5, Semantic Elements, CSS3, Vanilla JavaScript, JSON-LD Schema.org)
- **온라인 예약:** 네이버 플레이스 예약 연동 (`https://m.booking.naver.com/booking/13/bizes/777556?theme=place&service-target=map-pc&lang=ko&area=pll`)

---

## 2. 디렉토리 및 파일 구조

```text
yesoph/
├── index.html                   # 메인 랜딩 페이지
├── about/
│   └── index.html               # 병원소개 페이지
├── doctors/
│   └── index.html               # 의료진 소개 페이지 (안과 전문의 4인)
├── cataract/
│   └── index.html               # 백내장 수술 안내 페이지
├── dream-lens/
│   └── index.html               # 드림렌즈 및 소아근시 관리 페이지
├── treatments/
│   └── index.html               # 일반 진료안내 페이지 (노안/녹내장/망막/안구건조증/시력교정)
├── equipment/
│   └── index.html               # 의료장비 안내 페이지 (4대 카테고리)
├── location/
│   └── index.html               # 오시는 길 및 진료시간 안내 페이지
├── faq/
│   └── index.html               # 자주 묻는 질문(FAQ) 페이지 (15개 문항 + 아코디언)
├── privacy/
│   └── index.html               # 개인정보처리방침 페이지 (noindex 적용)
├── css/
│   └── style.css                # 글로벌 반응형 스타일시트
├── js/
│   └── main.js                  # 내비게이션 토글, 아코디언, 인터랙션 스크립트
├── data/
│   ├── doctors.json             # 의료진 데이터 (학력, 경력, 전문분야)
│   └── equipment.json           # 의료장비 데이터 (스펙, 층수, 검증상태)
├── assets/
│   └── images/                  # 웹 최적화 이미지 리소스 (doctors, equipment 등)
├── sitemap.xml                  # 검색엔진 사이트맵 (9개 URL 정의)
├── robots.txt                   # 검색로봇 수집 규칙 정의 (Yeti, Googlebot 등)
└── README.md                    # 프로젝트 관리 및 운영 매뉴얼 (본 문서)
```

---

## 3. 배포 방법 (Cloudflare Pages 가이드)

본 프로젝트는 정적 파일(HTML/CSS/JS)로 구성되어 있어 **Cloudflare Pages**를 통해 무중단, 초고속 전 세계 CDN 배포 및 무료 SSL 적용이 가능합니다.

### 3.1. GitHub 저장소 연동 및 배포
1. 본 프로젝트 폴더 전체를 GitHub 저장소(예: `yes-eye-clinic`)에 Push합니다.
2. [Cloudflare 대시보드](https://dash.cloudflare.com/)에 로그인 후 **Workers & Pages** > **Create application** > **Pages** 탭을 선택합니다.
3. **Connect to Git**을 클릭하고 방금 생성한 GitHub 저장소를 선택합니다.
4. 배포 설정을 구성합니다:
   - **Project name:** `yes-eye-clinic`
   - **Production branch:** `main` (또는 `master`)
   - **Framework preset:** `None`
   - **Build command:** (정적 사이트이므로 빈칸으로 둡니다)
   - **Build output directory:** `/` (루트 디렉토리)
5. **Save and Deploy** 버튼을 클릭하면 수초 내에 1차 배포 URL이 생성됩니다.

### 3.2. 한글 도메인(`목동백내장.com`) 및 퓨니코드 연결
1. Cloudflare Pages 프로젝트 상세 페이지에서 **Custom domains** 탭으로 이동합니다.
2. **Set up a custom domain**을 클릭합니다.
3. 도메인 입력란에 퓨니코드 형식인 `xn--220bq3dq4h3sb520a.com` (또는 `www.xn--220bq3dq4h3sb520a.com`)을 입력합니다.
4. 안내에 따라 DNS 호스팅 업체(가비아, 후이즈 등)에서 Cloudflare Nameserver로 변경하거나, CNAME 레코드를 지정합니다.
5. DNS 전파 완료 후 Cloudflare의 **Universal SSL**에 의해 `https://xn--220bq3dq4h3sb520a.com`로 자동 HTTPS 보안 접속이 활성화됩니다.

---

## 4. 검색엔진 등록 체크리스트

사이트 배포 완료 후 주요 검색 포털에 크롤링을 요청하고 소유권을 확인해야 합니다.

- [ ] **네이버 서치어드바이저(Naver Search Advisor) 등록:**
  - `https://searchadvisor.naver.com/` 접속 후 웹마스터 도구에 `https://xn--220bq3dq4h3sb520a.com` 사이트 등록
  - HTML 태그 메타인증 코드를 발급받아 각 페이지 `<head>` 태그 내 추가
  - 요청 > 사이트맵 제출 메뉴에서 `https://xn--220bq3dq4h3sb520a.com/sitemap.xml` 제출
  - 웹페이지 수집 요청 실행
- [ ] **구글 서치콘솔(Google Search Console) 등록:**
  - `https://search.google.com/search-console/` 접속 후 속성 추가
  - 소유권 확인 태그 등록 또는 DNS TXT 레코드 인증
  - Sitemaps 메뉴에서 `sitemap.xml` 제출
- [ ] **빙 웹마스터 도구(Bing Webmaster Tools) 등록:**
  - `https://www.bing.com/webmasters` 접속 후 구글 서치콘솔 계정 연동으로 간편 등록
  - 사이트맵 자동 동기화 확인
- [ ] **다음(Daum) 검색등록:**
  - `https://register.search.daum.net/` 접속하여 사이트 검색등록 신청
- [ ] **사이트맵(sitemap.xml) 정상 응답 확인:**
  - `https://xn--220bq3dq4h3sb520a.com/sitemap.xml`이 올바른 200 OK 헤더와 XML 형식을 반환하는지 브라우저에서 검증
- [ ] **IndexNow 키 생성 및 제출:**
  - 네이버와 빙이 지원하는 빠른 색인 API(IndexNow) 키 텍스트 파일 생성 후 루트 배포 및 제출
- [ ] **네이버 플레이스 정보 동기화 확인:**
  - 네이버 스마트플레이스 관리자 페이지에서 진료시간, 주소, 대표전화, 예약 링크가 일치하는지 최종 확인

---

## 5. '[확인 필요]' 항목 목록

의료법 준수 및 허위 정보 기재 방지를 위해 현재 임시값 또는 플레이스홀더로 적용된 항목들입니다. 원내 실무진 확인 후 실제 값으로 변경해 주십시오.

| 구분 | 항목 | 현재 상태 | 조치 방안 |
|---|---|---|---|
| 진료 안내 | 진료 시간 | 평일 09:00~18:00, 토 09:00~15:00 | 일요일 및 공휴일 휴진 여부, 토요일 점심시간 유무 최종 확인 |
| 의료진 | 학력/경력/전문분야 | `[학력 정보 입력 필요]`, `[경력 정보 입력 필요]` | 전문의 4인(박진환, 송영빈, 엄영섭, 나미리) 프로필 원문 수령 후 반영 |
| 오시는 길 | 지도 좌표 | 임시 좌표 (37.5367, 126.8646) | 목동태영프라자 정확한 지번/도로명 기준 위도·경도 확인 |
| 오시는 길 | 우편번호 | 누락 | 양천구 등촌로 32의 5자리 도로명 우편번호 기재 |
| 오시는 길 | 대중교통 노선 | `[대중교통 정보 확인 필요]` | 인근 버스 정류장명, 경유 버스 번호, 인근 지하철역(목동역/등촌역 등) 출구 안내 기재 |
| 오시는 길 | 주차 정보 | `[주차 정보 확인 필요]` | 건물 내 주차 가능 대수, 기계식/자주식 여부, 무료 주차권 지원 시간 기재 |
| 의료장비 | 층별 배치 | 전 장비 `[확인 필요]` | 4층 수술센터 배치 장비와 5층 외래검사센터 배치 장비 실사 후 기재 |
| 의료장비 | 실제 사진 | 플레이스홀더 이미지 | 원내 장비 실물 촬영 고해상도 사진을 WebP 포맷으로 assets에 업로드 |
| 의료장비 | TOPCON OCT-1 | `verified: false`, 사양 확인 필요 | 실제 도입된 정식 모델명(예: Maestro2 등) 확인 후 JSON 업데이트 |
| 의료장비 | Stellaris | `[확인 필요]` 표기 | 바슈롬 Stellaris PC 등 정확한 모델명 확인 및 verified 플래그 변경 |
| 의료장비 | Vitra 810 / Optimis II | 노출 완료 (레이저·피부관리 섹션) | 제조사 공식 자료 기준으로 용도 작성 |
| 의료장비 | DS-40UB / DERMA-S Ultra | 노출 완료 (레이저·피부관리 섹션) | 제조·유통사 자료 기준으로 용도 작성 |
| 의료장비 | Jeisys AQUA Cel | 노출 완료 (레이저·피부관리 섹션) | 안구건조증 열치료 장비로 작성 |
| 온라인 채널 | 네이버 플레이스 URL | 기본 예약 링크 적용 | 플레이스 메인 홈 URL 확정 시 추가 연결 |
| 온라인 채널 | 네이버 블로그 URL | 미적용 | 공식 병원 블로그 운영 시 푸터에 바로가기 링크 추가 |
| 검색엔진 | IndexNow 키 | 미적용 | IndexNow API 키 파일 생성 후 배포 |

---

## 6. `doctors.json` 수정 방법

경로: `data/doctors.json`

신규 원장님이 영입되거나 프로필 내용을 수정할 경우 JSON 파일의 해당 객체를 직접 편집합니다.

```json
[
  {
    "id": "park-jinhwan",
    "name": "박진환",
    "title": "대표원장",
    "image": "/assets/images/doctors/park-jinhwan.webp",
    "alt": "박진환 원장 - 예스안과의원 안과 전문의",
    "specialty": [
      "백내장 및 노안 수술",
      "각막 및 전안부 질환"
    ],
    "education": [
      "OO대학교 의과대학 졸업",
      "OO대학교 대학원 의학석사"
    ],
    "career": [
      "대한안과학회 정회원",
      "한국백내장굴절수술학회(KSCRS) 정회원",
      "전 OO병원 안과 과장"
    ]
  }
]
```

> **주의:** 의료법 제56조에 따라 과장되거나 객관적 근거가 없는 문구(예: 최고, 1위, 최다 수술 등)는 사용하지 마시고, 사실에 근거한 공식 학회 이력 및 학위만 기재하십시오.

---

## 7. `equipment.json` 수정 방법

경로: `data/equipment.json`

장비의 도입, 검증 상태, 층수 변경 시 아래 속성값을 업데이트합니다.

```json
{
  "id": "topcon-oct-1",
  "name": "TOPCON 3D OCT-1 Maestro2",
  "category": "망막·안저 검사",
  "description": "3차원 안저 및 시신경 단층촬영 장비로 황반부와 시신경 섬유층을 입체적으로 정밀 분석합니다.",
  "floor": "5층 외래검사센터",
  "image": "/assets/images/equipment/oct-maestro2.webp",
  "verified": true,
  "visible": true
}
```

- `verified`: 원내 실물 및 모델명 확인 여부 (`true` 또는 `false`)
- `visible`: 웹페이지 노출 여부 (`true`: 화면에 표시, `false`: 비노출)
- `floor`: 실제 배치 층수 ("4층 수술센터" 또는 "5층 외래검사센터")

---

## 8. GA4 및 네이버 애널리틱스 연동 방법

환자 유입 경로 분석 및 성과 측정을 위해 웹 분석 도구를 연동할 수 있습니다.

### 8.1. Google Analytics 4 (GA4) 연동
발급받은 GA4 측정 ID(`G-XXXXXXXXXX`)를 각 페이지 `<head>` 태그 상단에 삽입합니다.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8.2. 네이버 애널리틱스(Naver Analytics) 연동
네이버 애널리틱스 발급 스크립트를 각 페이지 `</body>` 닫는 태그 바로 위에 삽입합니다.

```html
<!-- Naver Analytics -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
<script type="text/javascript">
  if(!wcs_add) var wcs_add = {};
  wcs_add["wa"] = "s_xxxxxxxxxxxx"; // 발급받은 사이트 고유키
  if(window.wcs) {
    wcs_do();
  }
</script>
```

---

## 9. 라이선스 및 준수 사항

- 본 웹사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
- 의료광고 심의 및 의료법 제56조에 위배되는 전후 비교 사진, 환자 치료 경험담(후기), 할인 유인성 문구의 임의 기재를 엄격히 금지합니다.
- 문의 사항: 예스안과의원 행정실 (02-6956-1112)
