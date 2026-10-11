/**
 * 예스안과의원 공통 스크립트 (common.js)
 * - 모바일 네비게이션 토글
 * - 진료 상태 (진료중 / 진료종료 / 점심시간) 실시간 뱃지 연산
 * - 스크롤 이벤트에 따른 헤더 그림자
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Header shadow on scroll
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Clinic Opening Hours Live Status Badge
  updateClinicStatus();
});

/**
 * 한국 시간(KST, UTC+9) 기준으로 현재 진료 상태 판별
 * 평일 09:00~18:00 (점심 13:00~14:00)
 * 토요일 09:00~15:00 (점심시간 없음)
 * 일요일, 공휴일 휴진
 */
function updateClinicStatus() {
  const badge = document.getElementById('clinic-status-badge');
  if (!badge) return;

  const now = new Date();
  // UTC+9 계산
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const kst = new Date(utc + (9 * 60 * 60000));

  const day = kst.getDay(); // 0: 일, 1: 월, ... 6: 토
  const hours = kst.getHours();
  const minutes = kst.getMinutes();
  const currentMinutes = (hours * 60) + minutes;

  const textElem = badge.querySelector('.status-text') || badge;

  // 일요일 (0)
  if (day === 0) {
    setBadge(badge, textElem, 'closed', '오늘 휴진 (일요일)');
    return;
  }

  // 토요일 (6)
  if (day === 6) {
    const openTime = 9 * 60; // 09:00
    const closeTime = 15 * 60; // 15:00

    if (currentMinutes >= openTime && currentMinutes < closeTime) {
      setBadge(badge, textElem, 'open', '진료중 (15:00 마감)');
    } else {
      setBadge(badge, textElem, 'closed', '진료종료 (토 09:00~15:00)');
    }
    return;
  }

  // 평일 (1~5)
  const openTime = 9 * 60; // 09:00
  const lunchStart = 13 * 60; // 13:00
  const lunchEnd = 14 * 60; // 14:00
  const closeTime = 18 * 60; // 18:00

  if (currentMinutes >= openTime && currentMinutes < lunchStart) {
    setBadge(badge, textElem, 'open', '진료중 (점심 13:00~14:00)');
  } else if (currentMinutes >= lunchStart && currentMinutes < lunchEnd) {
    setBadge(badge, textElem, 'closed', '점심시간 (14:00 진료 재개)');
  } else if (currentMinutes >= lunchEnd && currentMinutes < closeTime) {
    setBadge(badge, textElem, 'open', '진료중 (18:00 마감)');
  } else {
    setBadge(badge, textElem, 'closed', '진료종료 (평일 09:00~18:00)');
  }
}

function setBadge(container, textElem, statusClass, message) {
  container.classList.remove('open', 'closed');
  container.classList.add(statusClass);
  textElem.textContent = message;
}
