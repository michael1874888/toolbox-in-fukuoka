const itinerary = {
  1: { date: '09.19 SAT', title: '抵達福岡，先把城市走熟', subtitle: '下午抵達後不趕景點，先安頓，再從天神開始。', badge: 'DAY 01', stay: '今泉住宿', theme: '城市暖身', schedule: [
    ['13:05', 'JX840 抵達福岡', '國際線入境、領行李；預留入境與進市區時間。', 'https://www.fukuoka-airport.jp/en/flight/airline/JX.html'],
    ['14:30', '國際線 → 今泉', '搭地鐵須先乘免費接駁巴士到國內線，再由福岡空港 K13 至博多 K11，轉七隈線 N18 至藥院 N14；五人有行李可直接分乘計程車。'],
    ['15:30', '抵達今泉住宿', '放下行李、稍作休息；完整門牌與建物名稱請查看私人訂房資料。'],
    ['17:00', '天神地下街・PARCO・岩田屋', '把第一天留給逛街與熟悉附近街區；9/19 或 9/20 經過西鐵福岡（天神）站時，順路一次兌換 5 人份的 9/24 紙本觀光套票。', 'https://www.google.com/maps/search/?api=1&query=Tenjin+Underground+Mall+Fukuoka'],
    ['19:30', '天神拉麵', '晚餐可在 Shin-Shin、Naka-chan 等店家中依現場排隊狀況選擇。']
  ], tips: [['TODAY’S MOOD', '抵達日留白一點，五人一起行動比較舒服。'], ['TICKET', '兌換 9/24 套票時使用 LINKTIVITY 憑證；9/22 糸島一日遊是另一張 Klook 憑證，不需到車站換票。']] },
  2: { date: '09.20 SUN', title: '公園、美術館與百道海風', subtitle: '白天走文化與綠地，傍晚把視線交給海。', badge: 'DAY 02', stay: '今泉住宿', theme: '綠地 × 海岸', schedule: [
    ['09:30', '舞鶴公園・大濠公園', '以公園散步開始，步調慢一點。', 'https://www.google.com/maps/search/?api=1&query=Ohori+Park+Fukuoka'],
    ['11:30', '福岡市美術館', '美術館就在大濠公園內，可順路參觀並安排室內休息。', 'https://www.fukuoka-art-museum.jp/'],
    ['14:00', '前往百道・福岡塔', '搭巴士前往福岡塔，再依天氣漫步海濱百道。', 'https://www.gofukuoka.jp/spots/detail/26798'],
    ['19:00', '水炊鍋晚餐', '回天神用餐，避免晚間再跨太遠的區域。']
  ], tips: [['WALKING', '公園與海濱都以散步為主，鞋子優先選舒適。'], ['WEATHER', '晴天適合百道；下雨時可延長美術館停留。']] },
  3: { date: '09.21 MON', title: '把行李放下，走進博多', subtitle: '退房與入住之間，正好用一段博多舊市區填滿。', badge: 'DAY 03', theme: 'PLAN A / B', plans: {
    A: { name: '博多舊市區', short: '神社、老街、購物與屋台', note: '景點集中、轉乘少；最適合配合 17:00 入住與博多站寄放行李。', schedule: [['11:00', '博多站寄放行李', '使用 1F 中央驗票口前人工寄放，五人行李不必賭投幣櫃。'], ['11:45', '櫛田神社', '從博多站／祇園一帶開始博多舊市區散步。', 'https://www.crossroadfukuoka.jp/en/spot/12510'], ['13:00', '博多町家・川端通', '博多文化、商店街與午餐集中處理。'], ['14:30', 'Canal City', '購物、咖啡與水舞；16:00 左右回博多站取行李。', 'https://www.google.com/maps/search/?api=1&query=Canal+City+Hakata'], ['17:00', '入住御供所町', '從博多站搭地鐵到祇園，或五人分乘計程車。'], ['19:00', '中洲河畔・屋台', '入住後再輕鬆走到中洲一帶。']] },
    B: { name: '海之中道', short: '海濱公園、動物與自然', note: '園區大、戶外感強；需要提早離開，才能配合 17:00 入住。', schedule: [['11:00', '博多站寄放行李', '先把行李安置好，再搭 JR 前往海之中道。'], ['12:00', '海之中道海濱公園', '花園、動物森林、海濱與單車可依體力選擇。', 'https://www.crossroadfukuoka.jp/en/spot/12408'], ['15:00', '離開園區返回博多', '不建議把公園玩到閉園，需保留回程與入住緩衝。'], ['17:00', '入住御供所町', '入住後晚餐安排在祇園／中洲一帶。'], ['19:00', '中洲晚餐', '以屋台或中洲餐廳收尾。']] }
  }, tips: [['LUGGAGE', '博多站人工寄放列示服務時間 10:30–18:30，出發前再確認。'], ['RECOMMEND', '預設 A；B 適合全員都想把一天留給自然與戶外活動時。']] },
  4: { date: '09.22 TUE', title: '沿著海岸，去看糸島', subtitle: '兩種簡單選擇：自己慢慢看二見浦，或交給一日遊帶路。', badge: 'DAY 04', stay: '御供所町住宿', theme: 'PLAN A / B', plans: {
    A: { name: '公共交通・二見浦', short: '只看代表海岸，節奏最自由', note: '轉乘少、停留自由；重點放在夫婦岩、白色鳥居與海邊咖啡，不再嘗試用公車串遍糸島。', schedule: [['08:50', '前往博多巴士總站', '到 3 樓 32 號乘車處，搭 West Coast Liner；出發前再確認 9/22 假日班表。', 'https://itoshima-now.com/ja/about/access/'], ['10:50', '二見浦・夫婦岩', '海岸散步、白色鳥居與拍照。', 'https://www.google.com/maps/search/?api=1&query=Sakurai+Futamigaura+Meotoiwa+Fukuoka'], ['12:00', '海邊咖啡／午餐', '以二見浦周邊店家為主，連假可能排隊，保留替代店家。'], ['14:30', '海岸慢走', '依天氣與體力安排 Palm Beach 一帶。'], ['16:00', '搭車返回博多', '回程約每小時一班且可能塞車；不要為等日落錯過末班車。']] },
    B: { name: 'Klook 糸島一日遊・已預訂', short: '5 人成行，依憑證集合', note: '已預訂 9/22 糸島一日遊；這張憑證不是太宰府・柳川套票，不需到西鐵車站兌換。集合時間、地點與語言以 Klook 訂單及前一晚通知為準。', schedule: [['08:00', '依 Klook 憑證前往集合點', '前一天確認最終通知；全員提早 15 分鐘抵達，現場出示糸島一日遊 QR Code。', 'https://s.klook.com/c/QylzYzRK1b', { map: false, linkLabel: '開啟已訂行程 ↗' }], ['上午', '白糸瀑布・宮地嶽神社', '依當日導遊安排移動；景點順序可能調整。', null, { map: false }], ['中午', '一蘭之森', '用餐內容與費用以商品說明及現場安排為準。', null, { map: false }], ['下午', '二見浦・椰子樹鞦韆', '包含夫婦岩、白色鳥居等代表景觀；每站依導遊指定時間集合。', 'https://www.google.com/maps/search/?api=1&query=Sakurai+Futamigaura+Meotoiwa+Fukuoka'], ['傍晚', '返回福岡市區', '整體約 8 小時，道路壅塞時可能延後抵達。', null, { map: false }]] }
  }, tips: [['PLAN A', '保留為臨時取消時的公共交通備案。'], ['BOOKED', '目前採用 B；5 位成人已完成 Klook 預訂。']] },
  5: { date: '09.23 WED', title: '門司港與關門海峽', subtitle: '先把握唐戶市場，再慢慢走老建築與海峽。', badge: 'DAY 05', stay: '御供所町住宿', theme: '遠方一日', schedule: [['07:36', '博多 → 小倉｜NOZOMI 8', 'SmartEX 已訂 5 人指定席：2 號車 3A–3E；每人使用各自的 QR-Ticket，進站後拿取 Seat Information。', 'https://smart-ex.jp/en/entraining/qr/', { map: false, linkLabel: '查看 QR 乘車方式 ↗' }], ['07:51', '抵達小倉・轉普通列車', '小倉 → 門司港不含在 SmartEX 車票內，另以 Suica 等交通 IC 卡進出站。'], ['08:30', '門司港 → 唐戶市場', '抵達門司港後先往渡船碼頭，不先逛懷舊區；搭最早能銜接的關門汽船。', 'https://www.karatoichiba.com/'], ['09:00', '唐戶市場早午餐', '9/23 為假日，趁攤位品項齊全時先完成市場行程。'], ['12:00', '回門司港懷舊區', '下午再走洋風建築；燒咖哩可視食量改成共享或下午茶。', 'https://www.mojiko.info/'], ['17:30', '返回博多', '回程如未預訂指定席，依當日人潮提早前往小倉站。']], tips: [['QR × 5', '五個座位各有一張不同的 QR-Ticket；出發前分給每位旅客並離線保存，出站也要再次掃描。'], ['PAPER', '不必提前領紙票；若家人不便使用手機，可自 9/20 起在博多站 EX 售票機一次印出五張。']] },
  6: { date: '09.24 THU', title: '柳川水路，最後一站太宰府', subtitle: '一張觀光套票，順著柳川一路走到太宰府。', badge: 'DAY 06', stay: '御供所町住宿', theme: '水路 × 神社', schedule: [['08:00', '御供所町 → 西鐵福岡（天神）站', '五人建議搭計程車；目的地是西鐵福岡（天神）站，不是 JR 博多站。'], ['08:25', '確認 5 人紙本套票', '套票已於 9/19 或 9/20 在天神順路領取；確認電車票、乘船券與優惠券都帶齊，不要自行撕票。', 'https://www.klook.com/zh-TW/activity/152456-dazaifu-yanagawa-excursion-pass-fukuoka/', { map: false, linkLabel: '開啟 Klook 套票 ↗' }], ['09:00', '西鐵特急前往柳川', '走人工驗票口，搭往大牟田方向、停靠西鐵柳川的列車；西鐵特急不劃位也不另加價。', 'https://www.ensen24.jp/kippu/tc/dazaifu-yanagawa/', { map: false, linkLabel: '查看套票規則 ↗' }], ['09:50', '柳川站遊船服務台', '出站後到案內所出示乘船券，由工作人員安排松月乘船場最近一班共享船。'], ['10:10–11:10', '柳川共享遊船', '套票不保證固定 10:10；一般約每 30 分鐘一班，實際可能安排 10:10、10:40 或 11:10，船程約 60 分鐘、單程下船。', 'https://www.yanagawakk.co.jp/index_e.html', { linkLabel: '查看官方船班 ↗' }], ['11:30', '御花／沖端鰻魚飯', '下船後就近午餐；若超過 13:00，五人直接搭計程車回柳川站，避免等下一班接駁。'], ['13:30', '柳川 → 太宰府', '搭往天神方向列車，在西鐵二日市站內轉太宰府線；不要出站，也不要先返回天神。'], ['14:30', '太宰府天滿宮・表參道', '先參拜，再逛表參道、兌換梅枝餅；部分商店約 17:00 起陸續關門。', 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu'], ['17:00', '返回福岡市區', '太宰府 → 西鐵二日市站內轉乘 → 天神，最後一段仍走人工驗票口。']], tips: [['EARLY PICKUP', '9/19 或 9/20 經過西鐵福岡（天神）站時，一次兌換全部 5 人份；紙票從兌換日起一個月內有效。'], ['BOAT', '共享船現場安排班次，09:50 到服務台即可，不再另外購買或預約 10:10 船票。']] },
  7: { date: '09.25 FRI', title: '把福岡收進行李', subtitle: '早一點出發，讓回程也保留餘裕。', badge: 'DAY 07', stay: '返程', theme: 'RETURN', schedule: [['08:00', '祇園／博多早餐', '以住宿附近為主，不安排跨區移動。'], ['09:30', '退房並前往福岡機場', '若 JX841 為約 14:15 班次，不建議等到 11:00 才離開。'], ['10:30', '國際線航廈報到', '星宇航空使用福岡機場國際線航廈；預留報到、安檢與行李時間。', 'https://www.fukuoka-airport.jp/en/target/beginner.html'], ['14:15', 'JX841 回台灣', '時間以電子機票與航空公司當日資訊為準。']], tips: [['CHECKOUT', '住宿規定 11:00 退房，但實際離開時間建議提前。'], ['AIRPORT', '五人同行加上行李，建議事先決定計程車／接駁方式。']] }
};

const checklistItems = [
  ['確認 JX840／JX841 航班時間與護照資料', 'FLIGHT'],
  ['確認第一段今泉住宿的入住與退房時間', 'STAY'],
  ['確認 9/21 博多站人工行李寄放服務', 'LUGGAGE'],
  ['9/19 或 9/20 在天神一次兌換 5 人份太宰府・柳川紙本套票', 'TRANSPORT'],
  ['將 9/23 SmartEX 的 3A–3E QR-Ticket 分給五位旅客', 'SHINKANSEN'],
  ['第 4 天 A：確認 West Coast Liner 假日班表與末班車', 'PLAN A'],
  ['確認 9/22 Klook 糸島一日遊的最終集合通知', 'BOOKED'],
  ['下載離線地圖、準備 IC 卡與行動電源', 'ESSENTIAL']
];

const tripDates = { start: '2026-09-19', end: '2026-09-25' };

function taipeiDate() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date()).reduce((result, part) => ({ ...result, [part.type]: part.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function getTripContext() {
  const today = taipeiDate();
  if (today < tripDates.start) {
    const days = Math.round((Date.parse(`${tripDates.start}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86400000);
    return { phase: 'before', label: `距離出發 ${days} 天` };
  }
  if (today > tripDates.end) return { phase: 'after', label: '旅程已結束 · 行程保留作為紀錄' };
  return { phase: 'during', day: Number(today.slice(-2)) - 18, label: `旅程進行中 · 今天是 Day ${Number(today.slice(-2)) - 18}` };
}

const initialTripContext = getTripContext();
const state = {
  day: initialTripContext.phase === 'during' ? initialTripContext.day : Number(localStorage.getItem('fukuoka-active-day') || 1),
  plans: { 3: localStorage.getItem('fukuoka-plan-3') || 'A', 4: localStorage.getItem('fukuoka-plan-4-v7') || 'B' },
  view: 'itinerary'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderDayTabs() {
  $('#day-tabs').innerHTML = Object.entries(itinerary).map(([day, data]) => `
    <button class="day-tab ${Number(day) === state.day ? 'active' : ''}" data-day="${day}" role="tab" aria-selected="${Number(day) === state.day}">
      <small>${data.date}</small><strong>Day ${day}</strong>${data.plans ? '<span class="plan-dot" aria-label="有兩組方案"></span>' : ''}
    </button>`).join('');
  $$('.day-tab').forEach((button) => button.addEventListener('click', () => { state.day = Number(button.dataset.day); localStorage.setItem('fukuoka-active-day', state.day); renderDayTabs(); renderDay(); }));
  requestAnimationFrame(() => $('.day-tab.active')?.scrollIntoView({ block: 'nearest', inline: 'center' }));
}

function planSelector(day, data) {
  const selected = state.plans[day];
  return `<div class="plan-section"><div class="plan-heading"><h4>今天有兩種走法</h4><small>預設顯示 A，可自行切換</small></div><div class="plan-switch">${Object.entries(data.plans).map(([key, plan]) => `<button class="plan-button ${selected === key ? 'active' : ''}" data-plan-day="${day}" data-plan="${key}"><span class="plan-letter">${key}</span><span><strong>${plan.name}</strong><small>${plan.short}</small></span></button>`).join('')}</div><div class="plan-note"><b>NOTE</b><span>${data.plans[selected].note}</span></div></div>`;
}

function mapLinkFor(title) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${title} 福岡`)}`;
}

function scheduleItem([time, title, description, link, options = {}]) {
  const isMap = link?.includes('google.com/maps');
  const mapLink = isMap ? link : mapLinkFor(title);
  const mapAction = options.map === false ? '' : `<a class="route-link" href="${mapLink}" target="_blank" rel="noreferrer">開啟地圖 ↗</a>`;
  const officialLink = link && !isMap ? `<a class="route-link subtle" href="${link}" target="_blank" rel="noreferrer">${options.linkLabel || '相關資訊 ↗'}</a>` : '';
  const actions = mapAction || officialLink ? `<div class="schedule-actions">${mapAction}${officialLink}</div>` : '';
  return `<div class="schedule-item"><div class="schedule-time" data-time="${time}"></div><div class="schedule-content"><strong>${title}</strong><p>${description}</p>${actions}</div></div>`;
}

function renderDay() {
  const data = itinerary[state.day];
  const selectedPlan = data.plans ? data.plans[state.plans[state.day]] : data;
  const schedule = selectedPlan.schedule || data.schedule;
  $('#day-content').innerHTML = `<article class="day-shell"><header class="day-banner"><div><span class="day-number">${data.date} · ${data.theme}</span><h3>${data.title}</h3><p>${data.subtitle}</p></div><span class="day-badge">${data.badge}</span></header>${data.plans ? planSelector(state.day, data) : ''}<div class="schedule">${schedule.map(scheduleItem).join('')}</div><footer class="day-footer">${(data.tips || []).map(([label, text]) => `<div class="footer-tip"><small>${label}</small><strong>${label === 'RECOMMEND' || label === 'DECISION' ? '目前預設：A' : '記得留意'}</strong><p>${text}</p></div>`).join('')}</footer></article>`;
  $$('.plan-button').forEach((button) => button.addEventListener('click', () => { const day = Number(button.dataset.planDay); state.plans[day] = button.dataset.plan; localStorage.setItem(day === 4 ? 'fukuoka-plan-4-v7' : `fukuoka-plan-${day}`, button.dataset.plan); renderDay(); renderPlanSummary(); showToast(`第 ${day} 天已切換為 ${button.dataset.plan} 方案`); }));
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem('fukuoka-checklist') || '{}');
  $('#checklist').innerHTML = checklistItems.map(([text, tag], index) => `<div class="check-item"><input id="check-${index}" type="checkbox" data-check="${index}" ${saved[index] ? 'checked' : ''}><span class="check-box">✓</span><label for="check-${index}">${text}</label><span class="check-tag">${tag}</span></div>`).join('');
  $$('#checklist input').forEach((input) => input.addEventListener('change', () => { const next = JSON.parse(localStorage.getItem('fukuoka-checklist') || '{}'); next[input.dataset.check] = input.checked; localStorage.setItem('fukuoka-checklist', JSON.stringify(next)); updateChecklistProgress(); }));
  updateChecklistProgress();
}

function updateChecklistProgress() { const count = $$('#checklist input:checked').length; $('#checklist-progress').textContent = `${count} / ${checklistItems.length}`; }

function renderPlanSummary() { $('#active-plan-summary').innerHTML = `<div class="active-plan-row"><span>第 3 天</span><strong>${state.plans[3]} · ${itinerary[3].plans[state.plans[3]].name}</strong></div><div class="active-plan-row"><span>第 4 天</span><strong>${state.plans[4]} · ${itinerary[4].plans[state.plans[4]].name}</strong></div>`; }

function renderTripStatus() {
  const context = getTripContext();
  $('#trip-status').textContent = context.label;
  $('#trip-status').dataset.phase = context.phase;
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
  showToast(`已複製${label}`);
}

function updateCurrency() {
  const rate = Number($('#rate-input').value) || 0;
  const yen = Number($('#yen-input').value) || 0;
  $('#twd-result').textContent = Math.round(yen * rate).toLocaleString();
  $('#rate-caption').textContent = `1 JPY ≈ ${rate || 0} TWD · 已儲存在這台裝置`;
}

function switchView(view) {
  state.view = view;
  $$('.view-tab, .bottom-nav-item').forEach((button) => { const active = button.dataset.view === view; button.classList.toggle('active', active); if (button.classList.contains('view-tab')) button.setAttribute('aria-selected', active); });
  $$('.view').forEach((section) => { const active = section.id === `${view}-view`; section.classList.toggle('active', active); section.hidden = !active; });
  window.scrollTo({ top: $('#top').offsetTop, behavior: 'smooth' });
}

function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => toast.classList.remove('show'), 2400); }

$$('[data-view]').forEach((button) => button.addEventListener('click', () => switchView(button.dataset.view)));
$$('[data-copy]').forEach((button) => button.addEventListener('click', () => copyText(button.dataset.copy, button.dataset.copyLabel)));
$('#rate-input').value = localStorage.getItem('fukuoka-exchange-rate') || $('#rate-input').value;
$('#yen-input').addEventListener('input', updateCurrency);
$('#rate-input').addEventListener('input', (event) => { localStorage.setItem('fukuoka-exchange-rate', event.target.value); updateCurrency(); });

renderTripStatus(); renderDayTabs(); renderDay(); renderChecklist(); renderPlanSummary(); updateCurrency();
if ('serviceWorker' in navigator) {
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) { refreshing = true; window.location.reload(); }
  });
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js?v=7').then((registration) => registration.update()).catch(() => {}));
}
