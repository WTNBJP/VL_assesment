const text = document.getElementById('text');
const button = document.getElementById('button');
const resultDiv = document.getElementById('result');
const tweetDiv = document.getElementById('tweet');

const assesment = [
    'あなたの適正エージェントはジェットです',
    'あなたの適正エージェントはレイズです',
    'あなたの適正エージェントはフェニックスです',
    'あなたの適正エージェントはネオンです',
    'あなたの適正エージェントはレイナです',
    'あなたの適正エージェントはヨルです',
    'あなたの適正エージェントはネオンです',
    'あなたの適正エージェントはセージです',
    'あなたの適正エージェントはサイファーです',
    'あなたの適正エージェントはキルジョイです',
    'あなたの適正エージェントはチェンバーです',
    'あなたの適正エージェントはブリーチです',
    'あなたの適正エージェントはソーヴァです',
    'あなたの適正エージェントはスカイです',
    'あなたの適正エージェントはKAY/Oです',
    'あなたの適正エージェントはフェイドです',
    'あなたの適正エージェントはゲッコーです',
    'あなたの適正エージェントはオーメンです',
    'あなたの適正エージェントはブリムストーンです',
    'あなたの適正エージェントはヴァイパーです',
    'あなたの適正エージェントはアストラです',
    'あなたの適正エージェントはハーバーです'
];

button.onclick = () => {
    tweetDiv.innerText = '';
    if(text.value === '') {
        return;
    }
    let sum = 0;
    let getName = text.value;
    for(let i = 0; i < getName.length; i++) {
        sum =  sum + getName.charCodeAt(i);
    }
    text.value = '';
    const decideNum = sum % assesment.length;
    result = assesment[decideNum];
    result = result.replaceAll('あなた',getName);
    resultDiv.innerText = result;

    const anchor = document.createElement('a');
    const hrefValue ='https://twitter.com/intent/tweet?button_hashtag=VALORANT%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E8%A8%BA%E6%96%AD&ref_src=twsrc%5Etfw';
  
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #VALORANTエージェント診断';
  
    tweetDiv.appendChild(anchor);

     const script = document.createElement('script');
     script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
     tweetDiv.appendChild(script);
}

text.onkeydown = (event) => {
    if(event.key === 'Enter') {
        button.onclick();
    }
}