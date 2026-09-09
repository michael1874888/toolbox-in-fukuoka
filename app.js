const itinerary = {
  1: { date: '09.19 SAT', title: '抵達福岡，先把城市走熟', subtitle: '下午抵達後不趕景點，先安頓，再從天神開始。', badge: 'DAY 01', stay: '今泉住宿', theme: '城市暖身', schedule: [
    ['13:05', 'JX840 抵達福岡', '國際線入境、領行李；預留入境與進市區時間。', 'https://www.fukuoka-airport.jp/en/flight/airline/JX.html'],
    ['15:30', '前往今泉住宿', '放下行李、稍作休息；人多行李多可考慮分乘計程車。'],
    ['17:00', '天神地下街・PARCO・岩田屋', '把第一天留給逛街與熟悉附近街區。', 'https://www.google.com/maps/search/?api=1&query=Tenjin+Underground+Mall+Fukuoka'],
    ['19:30', '天神拉麵', '晚餐可在 Shin-Shin、Naka-chan 等店家中依現場排隊狀況選擇。']
  ], tips: [['TODAY’S MOOD', '抵達日留白一點，五人一起行動比較舒服。'], ['DINNER', '第一晚先吃拉麵，不安排跨區移動。']] },
  2: { date: '09.20 SUN', title: '公園、博物館與百道海風', subtitle: '白天走文化與綠地，傍晚把視線交給海。', badge: 'DAY 02', stay: '今泉住宿', theme: '綠地 × 海岸', schedule: [
    ['09:30', '舞鶴公園・大濠公園', '以公園散步開始，步調慢一點。', 'https://www.google.com/maps/search/?api=1&query=Ohori+Park+Fukuoka'],
    ['11:30', '福岡市博物館', '安排室內休息與福岡歷史；最後入館時間請依官方公告。', 'https://www.gofukuoka.jp/spots/detail/26814'],
    ['14:00', '前往百道・福岡塔', '博物館、福岡塔與海濱可集中安排。', 'https://www.gofukuoka.jp/spots/detail/26798'],
    ['19:00', '水炊鍋晚餐', '回天神用餐，避免晚間再跨太遠的區域。']
  ], tips: [['WALKING', '公園與海濱都以散步為主，鞋子優先選舒適。'], ['WEATHER', '晴天適合百道；下雨時可延長博物館停留。']] },
  3: { date: '09.21 MON', title: '把行李放下，走進博多', subtitle: '退房與入住之間，正好用一段博多舊市區填滿。', badge: 'DAY 03', theme: 'PLAN A / B', plans: {
    A: { name: '博多舊市區', short: '神社、老街、購物與屋台', note: '景點集中、轉乘少；最適合配合 17:00 入住與博多站寄放行李。', schedule: [['11:00', '博多站寄放行李', '使用 1F 中央驗票口前人工寄放，五人行李不必賭投幣櫃。'], ['11:45', '櫛田神社', '從博多站／祇園一帶開始博多舊市區散步。', 'https://www.crossroadfukuoka.jp/en/spot/12510'], ['13:00', '博多町家・川端通', '博多文化、商店街與午餐集中處理。'], ['14:30', 'Canal City', '購物、咖啡與水舞；16:00 左右回博多站取行李。', 'https://www.google.com/maps/search/?api=1&query=Canal+City+Hakata'], ['17:00', '入住御供所町', '從博多站搭地鐵到祇園，或五人分乘計程車。'], ['19:00', '中洲河畔・屋台', '入住後再輕鬆走到中洲一帶。']] },
    B: { name: '海之中道', short: '海濱公園、動物與自然', note: '園區大、戶外感強；需要提早離開，才能配合 17:00 入住。', schedule: [['11:00', '博多站寄放行李', '先把行李安置好，再搭 JR 前往海之中道。'], ['12:00', '海之中道海濱公園', '花園、動物森林、海濱與單車可依體力選擇。', 'https://www.crossroadfukuoka.jp/en/spot/12408'], ['15:00', '離開園區返回博多', '不建議把公園玩到閉園，需保留回程與入住緩衝。'], ['17:00', '入住御供所町', '入住後晚餐安排在祇園／中洲一帶。'], ['19:00', '中洲晚餐', '以屋台或中洲餐廳收尾。']] }
  }, tips: [['LUGGAGE', '博多站人工寄放列示服務時間 10:30–18:30，出發前再確認。'], ['RECOMMEND', '預設 A；B 適合全員都想把一天留給自然與戶外活動時。']] },
  4: { date: '09.22 TUE', title: '沿著海岸，去看糸島', subtitle: '兩種玩法各自成立：一種放鬆，一種把海岸串起來。', badge: 'DAY 04', stay: '御供所町住宿', theme: 'PLAN A / B', plans: {
    A: { name: '公共交通・二見ヶ浦', short: '直達海岸，拍照與咖啡', note: '不換車、節奏最簡單；重點放在夫婦岩、白色鳥居與海岸。', schedule: [['08:30', '前往博多巴士總站', '搭乘 West Coast Liner；建議先確認 9/22 假日班表。'], ['10:00', '二見ヶ浦・夫婦岩', '海岸散步、白色鳥居與拍照。', 'https://www.google.com/maps/search/?api=1&query=Futamigaura+Meotoiwa+Fukuoka'], ['12:00', '海邊咖啡／午餐', '以二見ヶ浦周邊店家為主，不再硬塞太多轉乘。'], ['14:30', '海岸慢走', '依天氣與體力安排 Palm Beach 一帶。'], ['16:00', '搭車返回博多', '回程班次有限，預留候車與塞車緩衝。']] },
    B: { name: '租車／包車串聯', short: '岐志、野北、二見ヶ浦', note: '彈性高、適合一定要跑多個海岸點；但成本與假日塞車風險較高。', schedule: [['08:30', '市區取車／包車出發', '五人同行建議預約車型與行李空間，不臨時找車。'], ['10:00', '岐志漁港', '可看漁港；9 月不能把牡蠣小屋營業當成必然。'], ['12:00', '野北海岸', '安排海岸景色與午餐。'], ['15:00', '二見ヶ浦・夫婦岩', '把最具代表性的海岸景點留在下午。'], ['17:30', '返回福岡市區', '9/22 假日需保守估算車程。']] }
  }, tips: [['BUS', 'West Coast Liner 可從博多直達二見ヶ浦，但班次有限。'], ['DECISION', '預設 A；只有岐志漁港是不可省略的目標時，才切換 B。']] },
  5: { date: '09.23 WED', title: '門司港與關門海峽', subtitle: '把一天交給老建築、海峽與一份燒咖哩。', badge: 'DAY 05', stay: '御供所町住宿', theme: '遠方一日', schedule: [['07:30', '博多出發', 'JR 前往門司港，建議早點出發。'], ['10:00', '門司港懷舊區', '車站、港邊建築與散步。', 'https://www.mojiko.info/'], ['11:30', '關門汽船 → 唐戶市場', '搭船到下關；9/23 國定假日市場可安排早午餐。', 'https://kanmon.gr.jp/kanmon2020/en/detail/97.html'], ['14:00', '回門司港・燒咖哩', '下午回到門司港，把餐點留給當地名物。'], ['18:30', '返回博多', '晚餐可簡化，保留體力。']], tips: [['HOLIDAY', '唐戶市場國定假日營業資訊列示為 08:00–15:00。'], ['PACE', '這天交通時間長，景點不再額外塞入太多。']] },
  6: { date: '09.24 THU', title: '柳川水路，最後一站太宰府', subtitle: '水面放慢上午，神社收住下午。', badge: 'DAY 06', stay: '御供所町住宿', theme: '水路 × 神社', schedule: [['08:15', '祇園 → 天神／西鐵站', '從新住宿出發，預留轉乘與買票時間。'], ['09:00', '西鐵前往柳川', '使用柳川＋太宰府相關票券時，先確認遊船接待時間。', 'https://www.nishitetsu.jp/train/digitalkippu/'], ['10:10', '柳川遊船', '約 60–70 分鐘，沿水路慢慢看城市。'], ['11:30', '鰻魚蒸籠飯', '柳川午餐。'], ['14:00', '前往太宰府', '下午安排太宰府天滿宮與表參道。', 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu'], ['17:40', '返回福岡市區', '回天神／祇園，晚餐就近安排。']], tips: [['TICKET', '西鐵數位票券的遊船接待與季節班次要以官方公告為準。'], ['LAST BIG DAY', '這是最後一個完整觀光日，晚上不再排太遠。']] },
  7: { date: '09.25 FRI', title: '把福岡收進行李', subtitle: '早一點出發，讓回程也保留餘裕。', badge: 'DAY 07', stay: '返程', theme: 'RETURN', schedule: [['08:00', '祇園／博多早餐', '以住宿附近為主，不安排跨區移動。'], ['09:30', '退房並前往福岡機場', '若 JX841 為約 14:15 班次，不建議等到 11:00 才離開。'], ['10:30', '國際線航廈報到', '星宇航空使用福岡機場國際線航廈；預留報到、安檢與行李時間。', 'https://www.fukuoka-airport.jp/en/target/beginner.html'], ['14:15', 'JX841 回台灣', '時間以電子機票與航空公司當日資訊為準。']], tips: [['CHECKOUT', '住宿規定 11:00 退房，但實際離開時間建議提前。'], ['AIRPORT', '五人同行加上行李，建議事先決定計程車／接駁方式。']] }
};

const checklistItems = [
  ['確認 JX840／JX841 航班時間與護照資料', 'FLIGHT'],
  ['確認第一段今泉住宿的入住與退房時間', 'STAY'],
  ['確認 9/21 博多站人工行李寄放服務', 'LUGGAGE'],
  ['購買或確認柳川＋太宰府交通／遊船票券', 'TRANSPORT'],
  ['查看 9/22 糸島假日公車班表', 'ITOSHiMA'],
  ['若選第 4 天 B，完成租車或包車預約', 'OPTION B'],
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
  plans: { 3: localStorage.getItem('fukuoka-plan-3') || 'A', 4: localStorage.getItem('fukuoka-plan-4') || 'A' },
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

function scheduleItem([time, title, description, link]) {
  const isMap = link?.includes('google.com/maps');
  const mapLink = isMap ? link : mapLinkFor(title);
  const officialLink = link && !isMap ? `<a class="route-link subtle" href="${link}" target="_blank" rel="noreferrer">相關資訊 ↗</a>` : '';
  return `<div class="schedule-item"><div class="schedule-time" data-time="${time}"></div><div class="schedule-content"><strong>${title}</strong><p>${description}</p><div class="schedule-actions"><a class="route-link" href="${mapLink}" target="_blank" rel="noreferrer">開啟地圖 ↗</a>${officialLink}</div></div></div>`;
}

function renderDay() {
  const data = itinerary[state.day];
  const selectedPlan = data.plans ? data.plans[state.plans[state.day]] : data;
  const schedule = selectedPlan.schedule || data.schedule;
  $('#day-content').innerHTML = `<article class="day-shell"><header class="day-banner"><div><span class="day-number">${data.date} · ${data.theme}</span><h3>${data.title}</h3><p>${data.subtitle}</p></div><span class="day-badge">${data.badge}</span></header>${data.plans ? planSelector(state.day, data) : ''}<div class="schedule">${schedule.map(scheduleItem).join('')}</div><footer class="day-footer">${(data.tips || []).map(([label, text]) => `<div class="footer-tip"><small>${label}</small><strong>${label === 'RECOMMEND' || label === 'DECISION' ? '目前預設：A' : '記得留意'}</strong><p>${text}</p></div>`).join('')}</footer></article>`;
  $$('.plan-button').forEach((button) => button.addEventListener('click', () => { const day = Number(button.dataset.planDay); state.plans[day] = button.dataset.plan; localStorage.setItem(`fukuoka-plan-${day}`, button.dataset.plan); renderDay(); renderPlanSummary(); showToast(`第 ${day} 天已切換為 ${button.dataset.plan} 方案`); }));
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
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js?v=3').then((registration) => registration.update()).catch(() => {}));
}
