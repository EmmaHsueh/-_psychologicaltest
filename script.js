// ===============================
// 資料結構：測驗題目
// ===============================
const questions = [
    {
        id: 1,
        title: '（夜深看鏡子）｜內心初印象',
        text: '夜深人靜時，你看著鏡子中的自己，第一個感覺是？',
        quote: '「誰看見了自己的陰影，也同時認識了自己的光。」 — 卡爾·榮格',
        options: [
            { text: '像在觀察陌生人，想知道他在想什麼', type: 'observer' },
            { text: '有點不自在，好像牠比我更了解我自己', type: 'witness' },
            { text: '想移開視線，怕看到不想面對的部分', type: 'escapist' },
            { text: '感覺鏡中的我比現在的我更堅定', type: 'guardian' }
        ]
    },
    {
        id: 2,
        title: '（陰影行為反應）｜被誤解的本能反應',
        text: '當你被誤解時，你最本能的反應是──？',
        quote: '「你的陰影不是你的敵人，而是你靈魂的一部分。」 — 卡爾·榮格',
        options: [
            { text: '解釋清楚,不想留下誤會。', type: 'observer' },
            { text: '沉默,希望對方自己發現真相。', type: 'witness' },
            { text: '表面冷靜,內心卻很受傷。', type: 'escapist' },
            { text: '用開玩笑帶過,其實很在意。', type: 'guardian' }
        ]
    },
    {
        id: 3,
        title: '（遇見另一個自己）｜自我對話',
        text: '如果你能與「另一個自己」見面，他會對你說什麼？',
        quote: '「你的一切內在對話，都是自我整合的旅程。」 — 心靈格言',
        options: [
            { text: '「你太在意別人的想法了。」', type: 'witness' },
            { text: '「讓真實的你出來吧，你比自己想的更強」', type: 'guardian' },
            { text: '「你一直在逃，累不累？」', type: 'escapist' },
            { text: '「別害怕,做你自己就好。」', type: 'observer' }
        ]
    },
    {
        id: 4,
        title: '（投射）｜最無法忍受的他人行為',
        text: '你最無法忍受別人哪種行為？',
        quote: '「我們常在別人身上看見自己的陰影。」 — 卡爾·榮格',
        options: [
            { text: '情緒不穩、容易爆發', type: 'guardian' },
            { text: '說話模棱兩可、不夠真誠', type: 'observer' },
            { text: '不會閱讀空氣、不回應別人的情緒', type: 'witness' },
            { text: '問題一來就閃避，把重要事情推著不處理', type: 'escapist' }
        ]
    },
    {
        id: 5,
        title: '（夢境象徵）｜夢裡的場景',
        text: '夢裡最常出現的場景是──？',
        quote: '「夢是通往潛意識的王道，它告訴你未被察覺的自己。」 — 卡爾·榮格',
        options: [
            { text: '熟悉又找不到出口的長廊、樓梯或教室', type: 'escapist' },
            { text: '被追趕、時間快要來不及、事情逼近卻無法完成', type: 'guardian' },
            { text: '水面、鏡子、倒影或重複的房間', type: 'witness' },
            { text: '回到過去的地方，例如老家、童年街道，或看見過去的自己', type: 'escapist' }
        ]
    },
    {
        id: 6,
        title: '（自我語言）｜朋友眼中的你',
        text: '朋友形容你最常說過的話是？',
        quote: '「語言是心靈的鏡子，你說的每一句，也映照了內在世界。」 — 心靈格言',
        options: [
            { text: '「我覺得都可以，看你們」', type: 'escapist' },
            { text: '「不要吵架，以和為貴」', type: 'witness' },
            { text: '「沒事沒事～」', type: 'guardian' },
            { text: '「等一下，我需要整理一下情緒跟想法～」', type: 'observer' }
        ]
    },
    {
        id: 7,
        title: '（人際角色）｜在人群中的定位',
        text: '在人群中，你通常扮演什麼角色？',
        quote: '「認識自己在群體中的位置，等於認識自己的心理邊界。」 — 心理智慧',
        options: [
            { text: '安靜的觀察者,默默分析一切、善於掌握細節', type: 'observer' },
            { text: '熱情的組織者,帶動氣氛，需要時會挺身而出', type: 'guardian' },
            { text: '善良的傾聽者,善於安撫情緒、給予支持', type: 'witness' },
            { text: '孤行者，保持距離、待在自己的舒適圈', type: 'escapist' }
        ]
    },
    {
        id: 8,
        title: '（內在勇氣）｜面對重大選擇',
        text: '面對人生重大選擇時，你會？',
        quote: '「勇氣不是不害怕，而是面對恐懼仍選擇前行。」 — 卡爾·榮格',
        options: [
            { text: '仔細分析利弊,理性決策', type: 'observer' },
            { text: '跟隨內心直覺,相信感覺', type: 'guardian' },
            { text: '尋求他人意見,希望被理解', type: 'witness' },
            { text: '拖延猶豫,希望事情自己變得更明朗', type: 'escapist' }
        ]
    }
];

// ===============================
// 資料結構：人格類型結果
// ===============================
const personalityTypes = {
    observer: {
        name: '光之觀察者',
        keyword: '理性 · 控制 · 冷靜',
        color: '#4a90e2',
        description: '你習慣保持距離,用理智保護自己\n在混亂中尋找秩序,在情感中建立界限\n你的世界井然有序,每個決定都經過深思熟慮。',
        shadow: '鏡中的你其實渴望情感連結\n那些被理性壓抑的情緒,正在鏡子另一端等待被釋放\n也許,偶爾放下防備,會看見更真實的自己。',
        symbol: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="observerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#6bb6ff;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#observerGrad)" stroke-width="3" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" fill="none" stroke="url(#observerGrad)" stroke-width="2" opacity="0.5"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="url(#observerGrad)" stroke-width="2" opacity="0.7"/>
                <circle cx="100" cy="100" r="15" fill="url(#observerGrad)" opacity="0.9"/>
                <path d="M 100 20 L 100 60" stroke="url(#observerGrad)" stroke-width="2" opacity="0.8"/>
                <path d="M 100 140 L 100 180" stroke="url(#observerGrad)" stroke-width="2" opacity="0.8"/>
                <path d="M 20 100 L 60 100" stroke="url(#observerGrad)" stroke-width="2" opacity="0.8"/>
                <path d="M 140 100 L 180 100" stroke="url(#observerGrad)" stroke-width="2" opacity="0.8"/>
            </svg>
        `
    },
    escapist: {
        name: '夢之逃亡者',
        keyword: '壓抑 · 逃避 · 幻想',
        color: '#8b7fc7',
        description: '你在夢境與現實之間遊走,用想像力建構屬於自己的世界\n面對傷痛時選擇遠離,面對壓力時尋找出口\n你的心靈是一座迷宮,只有自己知道出路在哪。',
        shadow: '鏡中藏著未被釋放的創造力\n那些你逃避的事物,其實是通往真實自我的鑰匙\n當你願意面對,會發現自己比想像中更堅強。',
        symbol: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="escapistGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#8b7fc7;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#b8a9e0;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <path d="M 100 30 Q 130 60 120 100 Q 110 140 140 170"
                      fill="none" stroke="url(#escapistGrad)" stroke-width="3" opacity="0.6"/>
                <path d="M 100 30 Q 70 60 80 100 Q 90 140 60 170"
                      fill="none" stroke="url(#escapistGrad)" stroke-width="3" opacity="0.6"/>
                <circle cx="100" cy="30" r="8" fill="url(#escapistGrad)" opacity="0.8"/>
                <circle cx="140" cy="170" r="8" fill="url(#escapistGrad)" opacity="0.8"/>
                <circle cx="60" cy="170" r="8" fill="url(#escapistGrad)" opacity="0.8"/>
                <path d="M 50 80 Q 100 90 150 80" fill="none" stroke="url(#escapistGrad)" stroke-width="2" opacity="0.5"/>
                <path d="M 60 120 Q 100 110 140 120" fill="none" stroke="url(#escapistGrad)" stroke-width="2" opacity="0.5"/>
            </svg>
        `
    },
    guardian: {
        name: '焰之守護者',
        keyword: '熱情 · 衝動 · 正義',
        color: '#e85d4e',
        description: '你以強烈的情感驅動自己,對在乎的事物全力以赴\n你的內心燃燒著正義之火,無法容忍不公與虛偽\n你用行動證明存在,用熱情點燃希望。',
        shadow: '鏡中的火焰代表你真誠的渴望,卻也揭示了內心害怕被誤解的脆弱\n你越是奮力燃燒,越需要被理解\n記得,溫柔也是一種力量。',
        symbol: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="guardianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e85d4e;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ff8a75;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <path d="M 100 150 Q 70 120 80 80 Q 85 50 100 30 Q 115 50 120 80 Q 130 120 100 150 Z"
                      fill="url(#guardianGrad)" opacity="0.7"/>
                <path d="M 100 140 Q 80 120 85 90 Q 90 70 100 50 Q 110 70 115 90 Q 120 120 100 140 Z"
                      fill="url(#guardianGrad)" opacity="0.9"/>
                <circle cx="100" cy="70" r="5" fill="#fff" opacity="0.8"/>
                <circle cx="90" cy="90" r="3" fill="#fff" opacity="0.6"/>
                <circle cx="110" cy="85" r="3" fill="#fff" opacity="0.6"/>
                <path d="M 100 30 L 100 20" stroke="url(#guardianGrad)" stroke-width="2" opacity="0.7"/>
                <path d="M 120 45 L 130 35" stroke="url(#guardianGrad)" stroke-width="2" opacity="0.7"/>
                <path d="M 80 45 L 70 35" stroke="url(#guardianGrad)" stroke-width="2" opacity="0.7"/>
            </svg>
        `
    },
    witness: {
        name: '影之觀照者',
        keyword: '感性 · 洞察 · 內省',
        color: '#e0e0e0',
        description: '你擁有深刻的理解力,能看見他人心中的光與影\n你習慣內省,在沉默中思考人生的意義\n你的存在像是一面鏡子,映照出世界的真實與虛幻。',
        shadow: '鏡中提醒你:「理解他人,也要原諒自己」\n你常陷入自我懷疑,卻忘了自己也值得被溫柔對待\n放下完美主義,接納不完整的自己,才能真正自由。',
        symbol: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="witnessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e0e0e0;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#f5f5f5;stop-opacity:1" />
                    </linearGradient>
                    <radialGradient id="witnessRadial">
                        <stop offset="0%" style="stop-color:#fff;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:0.3" />
                    </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="url(#witnessRadial)" opacity="0.5"/>
                <path d="M 50 100 Q 75 70 100 100 Q 125 70 150 100"
                      fill="none" stroke="url(#witnessGrad)" stroke-width="2" opacity="0.7"/>
                <path d="M 50 100 Q 75 130 100 100 Q 125 130 150 100"
                      fill="none" stroke="url(#witnessGrad)" stroke-width="2" opacity="0.7"/>
                <circle cx="100" cy="100" r="30" fill="none" stroke="url(#witnessGrad)" stroke-width="2" opacity="0.6"/>
                <circle cx="100" cy="100" r="15" fill="url(#witnessGrad)" opacity="0.8"/>
                <circle cx="70" cy="80" r="5" fill="url(#witnessGrad)" opacity="0.5"/>
                <circle cx="130" cy="80" r="5" fill="url(#witnessGrad)" opacity="0.5"/>
                <circle cx="70" cy="120" r="5" fill="url(#witnessGrad)" opacity="0.5"/>
                <circle cx="130" cy="120" r="5" fill="url(#witnessGrad)" opacity="0.5"/>
            </svg>
        `
    }
};

// ===============================
// 全域變數
// ===============================
let currentQuestion = 0;
let answers = {
    observer: 0,
    escapist: 0,
    guardian: 0,
    witness: 0
};

// ===============================
// DOM 元素
// ===============================
const scenes = {
    intro: document.getElementById('intro-scene'),
    question: document.getElementById('question-scene'),
    result: document.getElementById('result-scene')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressFill: document.querySelector('.progress-fill'),
    currentQ: document.getElementById('current-q'),
    totalQ: document.getElementById('total-q'),
    resultTitle: document.getElementById('result-title'),
    resultKeyword: document.getElementById('result-keyword'),
    resultDescription: document.getElementById('result-description'),
    resultShadow: document.getElementById('result-shadow'),
    resultSymbol: document.getElementById('result-symbol'),
    shareBtn: document.getElementById('share-btn'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn')
};

// ===============================
// 場景切換函數
// ===============================
function switchScene(from, to) {
    scenes[from].classList.remove('active');
    setTimeout(() => {
        scenes[to].classList.add('active');
    }, 300);
}

// ===============================
// 初始化
// ===============================
function init() {
    elements.totalQ.textContent = questions.length;
    elements.startBtn.addEventListener('click', startQuiz);
    elements.retryBtn.addEventListener('click', resetQuiz);
    elements.shareBtn.addEventListener('click', shareResult);
    elements.homeBtn.addEventListener('click', goToHomePage);
}

// ===============================
// 開始測驗
// ===============================
function startQuiz() {
    currentQuestion = 0;
    answers = { observer: 0, escapist: 0, guardian: 0, witness: 0 };
    switchScene('intro', 'question');
    showQuestion();
}

// ===============================
// 顯示問題
// ===============================
function showQuestion() {
    const question = questions[currentQuestion];

    // 更新進度
    elements.currentQ.textContent = currentQuestion + 1;
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;

    // 更新問題標題和心靈小語
    const questionTitle = document.getElementById('question-title');
    const questionQuote = document.getElementById('question-quote');
    if (questionTitle && questionQuote) {
        questionTitle.textContent = question.title || '';
        questionQuote.textContent = question.quote || '';
    }

    // 更新問題文字
    elements.questionText.textContent = question.text;

    // 清空並重新建立選項
    elements.optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.style.animationDelay = `${index * 0.1}s`;

        button.addEventListener('click', () => selectOption(option.type, button));

        elements.optionsContainer.appendChild(button);
    });

    // 更新鏡面效果亮度
    updateMirrorClarity();
}

// ===============================
// 選擇選項
// ===============================
function selectOption(type, button) {
    // 記錄答案
    answers[type]++;

    // 視覺回饋
    button.classList.add('selected');

    // 禁用所有按鈕
    const allButtons = elements.optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');

    // 延遲後進入下一題或顯示結果
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 800);
}

// ===============================
// 更新鏡面清晰度(隨進度變化)
// ===============================
function updateMirrorClarity() {
    const clarity = (currentQuestion / questions.length);
    const mirrorEffect = document.querySelector('.mirror-effect');
    if (mirrorEffect) {
        mirrorEffect.style.filter = `blur(${20 - clarity * 15}px) brightness(${1 + clarity * 0.3})`;
    }
}

// ===============================
// 計算並顯示結果
// ===============================
function showResult() {
    // 找出得分最高的人格類型
    const resultType = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );

    const personality = personalityTypes[resultType];

    // 切換場景
    switchScene('question', 'result');

    // 觸發碎裂動畫
    setTimeout(() => {
        const shatter = document.querySelector('.shatter-overlay');
        shatter.classList.add('active');
    }, 300);

    // 設定結果顏色
    document.documentElement.style.setProperty('--result-color', personality.color);

    // 顯示結果內容
    setTimeout(() => {
        elements.resultTitle.textContent = personality.name;
        elements.resultKeyword.textContent = personality.keyword;
        elements.resultDescription.textContent = personality.description;
        elements.resultShadow.textContent = personality.shadow;
        elements.resultSymbol.innerHTML = personality.symbol;
    }, 1000);
}

// ===============================
// 分享結果
// ===============================
function shareResult() {
    // 顯示分享選項模態框
    showShareModal();
}

// 顯示分享選項模態框
function showShareModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        padding: 2.5rem;
        border-radius: 20px;
        max-width: 450px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    const title = document.createElement('h3');
    title.textContent = '分享你的結果';
    title.style.cssText = `
        color: #f0f0f5;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        text-align: center;
    `;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `;

    // Instagram 分享按鈕
    const igBtn = createShareButton(
        'Instagram',
        '#E4405F',
        `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
        </svg>
        `,
        () => {
            modal.remove();
            shareToInstagram();
        }
    );

    // Facebook 分享按鈕
    const fbBtn = createShareButton(
        'Facebook',
        '#1877F2',
        `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
        </svg>
        `,
        () => {
            modal.remove();
            shareToFacebook();
        }
    );

    // 複製文字按鈕
    const copyBtn = createShareButton(
        '複製文字',
        '#4a90e2',
        `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        () => {
            modal.remove();
            copyResultToClipboard();
        }
    );

    // 關閉按鈕
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '取消';
    closeBtn.style.cssText = `
        margin-top: 1rem;
        padding: 0.8rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        color: #f0f0f5;
        cursor: pointer;
        font-size: 1rem;
        width: 100%;
        transition: all 0.3s ease;
    `;

    closeBtn.addEventListener('mouseover', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    closeBtn.addEventListener('mouseout', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.05)';
    });

    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    buttonsContainer.appendChild(igBtn);
    buttonsContainer.appendChild(fbBtn);
    buttonsContainer.appendChild(copyBtn);

    content.appendChild(title);
    content.appendChild(buttonsContainer);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// 創建分享按鈕的輔助函數
function createShareButton(text, color, iconSVG, onClick) {
    const button = document.createElement('button');
    button.style.cssText = `
        padding: 1rem 1.5rem;
        background: ${color};
        border: none;
        border-radius: 12px;
        color: white;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    const icon = document.createElement('span');
    icon.innerHTML = iconSVG;
    icon.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    button.appendChild(icon);
    button.appendChild(textSpan);

    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('click', onClick);

    return button;
}

// Instagram 分享功能
function shareToInstagram() {
    // Instagram 網頁版無法直接分享，複製文字讓用戶手動發布
    copyResultToClipboard();
    setTimeout(() => {
        showToast('文字已複製！請到 Instagram 手動發布', true);
    }, 800);
}

// Facebook 分享功能
function shareToFacebook() {
    const resultType = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );
    const personality = personalityTypes[resultType];

    const shareUrl = window.location.href;
    const shareText = `我在「鏡中人格」測驗中是【${personality.name}】\n${personality.keyword}`;

    // 先複製文字到剪貼簿
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).catch(() => {});
    }

    // Facebook 分享 URL（只能分享連結，無法自訂文字）
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

    // 在新視窗開啟 Facebook 分享
    window.open(fbShareUrl, '_blank', 'width=600,height=500');

    showToast('✓ 文字已複製，請在 Facebook 貼上', true);
}

// 複製結果文字到剪貼簿
function copyResultToClipboard() {
    const resultType = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );
    const personality = personalityTypes[resultType];

    const shareText = `我在「鏡中人格」測驗中是【${personality.name}】
${personality.keyword}

${personality.description}

鏡中的陰影面：
${personality.shadow}

立即測試你的鏡中人格 👉 ${window.location.href}`;

    // 嘗試使用 Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText)
            .then(() => {
                showToast('✓ 結果已複製到剪貼簿！', true);
            })
            .catch(() => {
                // 如果失敗，使用傳統方法
                fallbackCopyText(shareText);
            });
    } else {
        // 使用傳統方法
        fallbackCopyText(shareText);
    }
}

// 傳統複製方法（相容所有瀏覽器）
function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = `
        position: fixed;
        top: -9999px;
        left: -9999px;
        opacity: 0;
    `;
    document.body.appendChild(textarea);

    try {
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        const successful = document.execCommand('copy');

        if (successful) {
            showToast('✓ 結果已複製到剪貼簿！', true);
        } else {
            showToast('複製失敗，請手動複製', false);
        }
    } catch (err) {
        showToast('複製失敗，請手動複製', false);
    } finally {
        document.body.removeChild(textarea);
    }
}

// 顯示提示訊息
function showToast(message, isSuccess = true) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${isSuccess ? 'rgba(74, 144, 226, 0.95)' : 'rgba(232, 93, 78, 0.95)'};
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 12px;
        font-size: 1.1rem;
        z-index: 10001;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: toastIn 0.3s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===============================
// 重新測驗
// ===============================
function resetQuiz() {
    currentQuestion = 0;
    answers = { observer: 0, escapist: 0, guardian: 0, witness: 0 };

    // 清除碎裂效果
    const shatter = document.querySelector('.shatter-overlay');
    shatter.classList.remove('active');

    // 重置進度條
    elements.progressFill.style.width = '0%';

    // 回到首頁
    switchScene('result', 'intro');
}

// ===============================
// 跳轉到首頁
// ===============================
function goToHomePage() {
    window.location.href = 'https://emmahsueh.github.io/psychological-test_full-ver./';
}

// ===============================
// 頁面載入時初始化
// ===============================
document.addEventListener('DOMContentLoaded', init);

// ===============================
// 新增更多粒子效果 (動態生成)
// ===============================
function createFloatingParticles() {
    const particles = document.querySelector('.particles');
    const floatingParticles = document.querySelector('.floating-particles');

    if (particles) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(255, 255, 255, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            particle.style.animation = `particleFloat ${Math.random() * 4 + 6}s infinite ease-in-out`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            particles.appendChild(particle);
        }
    }

    if (floatingParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 5 + 3 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'var(--result-color, rgba(255, 255, 255, 0.6))';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            particle.style.animation = `floatUp ${Math.random() * 3 + 5}s infinite ease-in-out`;
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.opacity = '0.6';
            floatingParticles.appendChild(particle);
        }
    }
}

// 初始化粒子
createFloatingParticles();

// ===============================
// 鏡面互動效果 (滑鼠移動)
// ===============================
document.addEventListener('mousemove', (e) => {
    const mirrorReflection = document.querySelector('.mirror-reflection');
    const mirrorEffect = document.querySelector('.mirror-effect');

    if (mirrorReflection && scenes.intro.classList.contains('active')) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        mirrorReflection.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (mirrorEffect && scenes.question.classList.contains('active')) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        mirrorEffect.style.transform = `translate(${x}px, ${y}px)`;
    }
});
