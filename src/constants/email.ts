export const EMAIL_TEMPLATES = {
  SKT_USIM: {
    title: 'SKT 유심 대량 유출 사고 관련 국회의 적극적 대응 요청',
    content: `존경하는 국회의원님께,

안녕하십니까. 저는 귀 의원님께서 늘 국민의 안전과 권익을 위해 애써주심에 깊이 감사드립니다.

지난 2025년 4월 18일 SK텔레콤(SKT)의 핵심 시스템이 악성코드에 감염되어 약 2,300만 명 가입자의 유심(USIM) 관련 핵심 정보가 대량으로 유출되는 중대한 사고가 발생하였습니다.

주요 유출 정보
- IMSI (이동가입자식별번호)  
- IMEI (단말기 고유 식별번호)  
- KI (유심 인증키)  

현재 상황
1. 실제 이름·주민등록번호 등 직접적인 개인정보는 포함되지 않았으나, 유심 복제 및 금융사기 우려가 매우 높습니다.  
2. SIM 스와핑을 통한 금융자산 탈취 사례가 이미 다수 보고되었습니다.  
3. 본인 인증 시스템에 대한 신뢰가 크게 훼손되어, 금융기관·정부 서비스 전반에 걸쳐 2차·3차 피해 확산 가능성이 상존합니다.  
4. 피해자 입증의 어려움 및 집단소송제도 미비로 피해 구제가 현실적으로 매우 어렵습니다.  
5. 나아가 디지털 선거 투표·여론 조작 등 국가적 민주주의 체계에도 심각한 위협이 될 수 있습니다.  

제안드리는 입법·정책 과제 
1. 통신사 보안 강화 의무화
   - 이동통신사에 대한 주기적 정부 보안 감사 및 취약점 점검 제도 도입  
2. 집단소송제 도입
   - 대규모 개인정보 유출 시 실질적 피해 구제를 위한 집단소송 입법 추진  
3. 본인 인증 시스템 전면 개편  
   - SMS 인증의 한계를 보완할 다중 인증(생체·앱 기반 등) 도입 및 금융기관·통신사 협력 강화  
4. 선거 보안 대응 체계 강화  
   - 전자투표 및 본인 인증 절차에 대한 보안 기술 선진화 및 복제폰 탐지 시스템 구축  
5. 피해자 지원 시스템 구축  
   - 통신사·금융기관 간 신속 공조 프로세스 마련 및 피해자 구제 절차의 법제화  

국민의 소중한 개인정보와 디지털 민주주의를 보호하기 위해 귀 의원님의 적극적인 관심과 입법 활동을 부탁드립니다. 언제나 국민 곁에서 국정을 이끄시는 귀 의원님의 건승을 기원합니다.

감사합니다.
{senderName} 올림`,
  },
} as const;

export const EMAIL_PROVIDERS = {
  gmail: {
    name: 'Gmail',
  },
  outlook: {
    name: 'Outlook',
  },
  naver: {
    name: '네이버',
  },
} as const;
