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
    retryBtn: document.getElementById('retry-btn')
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
    const resultType = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );
    const personality = personalityTypes[resultType];

    const shareText = `我在「鏡中人格」測驗中是【${personality.name}】\n${personality.keyword}\n\n${personality.description}\n\n立即測試你的鏡中人格 👉`;
    const shareUrl = window.location.href;
    const fullText = shareText + ' ' + shareUrl;

    // 建立臨時提示訊息元素
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
            z-index: 10000;
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

    // 方法 1: 嘗試使用 Web Share API (行動裝置優先)
    if (navigator.share && navigator.canShare && navigator.canShare({ text: shareText })) {
        navigator.share({
            title: '鏡中人格：探索你的另一面',
            text: shareText,
            url: shareUrl
        }).then(() => {
            showToast('✓ 分享成功！');
        }).catch(err => {
            if (err.name !== 'AbortError') {
                // 如果不是使用者取消，嘗試其他方法
                copyToClipboard(fullText, showToast);
            }
        });
    }
    // 方法 2: 嘗試使用 Clipboard API
    else if (navigator.clipboard && navigator.clipboard.writeText) {
        copyToClipboard(fullText, showToast);
    }
    // 方法 3: 使用傳統方法 (textarea + execCommand)
    else {
        fallbackCopy(fullText, showToast);
    }
}

// Clipboard API 複製函數
function copyToClipboard(text, callback) {
    navigator.clipboard.writeText(text)
        .then(() => {
            callback('✓ 結果已複製到剪貼簿！');
        })
        .catch(() => {
            // 如果 Clipboard API 失敗，使用傳統方法
            fallbackCopy(text, callback);
        });
}

// 傳統複製方法 (相容所有瀏覽器)
function fallbackCopy(text, callback) {
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
            callback('✓ 結果已複製到剪貼簿！');
        } else {
            // 最後的備援方案：顯示文字讓使用者手動複製
            showManualCopy(text);
        }
    } catch (err) {
        showManualCopy(text);
    } finally {
        document.body.removeChild(textarea);
    }
}

// 手動複製視窗
function showManualCopy(text) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: #1a1a2e;
        padding: 2rem;
        border-radius: 16px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    const title = document.createElement('h3');
    title.textContent = '請手動複製以下內容';
    title.style.cssText = `
        color: #f0f0f5;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    `;

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.readOnly = true;
    textArea.style.cssText = `
        width: 100%;
        height: 200px;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: #f0f0f5;
        font-size: 1rem;
        resize: none;
        margin-bottom: 1rem;
        font-family: inherit;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '關閉';
    closeBtn.style.cssText = `
        padding: 0.8rem 2rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        color: #f0f0f5;
        cursor: pointer;
        font-size: 1rem;
        width: 100%;
    `;

    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    // 自動選取文字
    textArea.addEventListener('click', function() {
        this.select();
    });

    content.appendChild(title);
    content.appendChild(textArea);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);

    // 自動選取文字
    setTimeout(() => textArea.select(), 100);
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
