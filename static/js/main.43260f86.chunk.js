(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var a,r=t(0),c=t.n(r),i=t(15),o=t.n(i),s=t(5),d=t(6),u=t.n(d),p=t(9),l=t(2),b=t(13),g=function(n){return[n.charAt(0).toUpperCase(),n.slice(1)].join("")};!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(a||(a={}));var j,m,x,A,h,f=function(){var n=Object(p.a)(u.a.mark((function n(e,t,a){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(a,"&category=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c.results.map((function(n){return Object(b.a)(Object(b.a)({},n),{},{answers:(e=[n.correct_answer].concat(Object(s.a)(n.incorrect_answers)),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),w=t(3),y=t(4),k=t.p+"static/media/kids.1046c5ea.jpg",O=t.p+"static/media/history-bg.254b1c7b.jpg",q=t.p+"static/media/general-knowledge-bg.242d85b6.jpg",N=t.p+"static/media/mythology-bg.9ed9cd91.jpg",J=t.p+"static/media/geography-bg.cb90e227.jpg",V=t.p+"static/media/theater.5f8ec65e.jpg",X=t.p+"static/media/music-bg.2176135c.jpg",S="hsl(325, 100%, 50%)",v="hsl(191, 100%, 32%)",L="#56FFA4",F="#FF5656",U="#56ccff",H="#59BC86",W="#C16868",R="#6eafb4",B=S,C=v,z="hsl(62, 100%, 78%)",T="hsl(52, 100%, 59%)",D=U,K="0px 5px 10px rgba(0, 0, 0, 0.25)",I="200px",G=[[9,"general knowledge","data:image/jpeg;base64,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",q],[20,"mythology",t.p+"static/media/herakles.329a51c6.jpg",N],[22,"geography",t.p+"static/media/geography.5691e163.jpg",J],[23,"history",t.p+"static/media/history.8e080b34.jpg",O],[11,"movies",t.p+"static/media/movies.62e9d510.jpg",V],[12,"music",t.p+"static/media/music.4690a8c2.jpg",X]],Q=Object(y.a)(j||(j=Object(w.a)(["\n\n  body {\n    margin: 0;\n  }\n\n  .App {\n    display: flex;\n    justify-content: center;\n    background-image: url(\n      ",'\n    );\n    background-size: cover;\n    background-position: center;\n    height: 100vh;\n    width: 100vw;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: "Noto Sans JP", sans-serif;\n  }\n'])),(function(n){var e=n.backgroundImageId,t=G.find((function(n){return e===n[0]}));return t&&t.length?t[3]:k})),P=y.b.div(m||(m=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n\n  > p {\n    color: fff;\n  }\n\n  .score {\n    color: ",";\n    font-size: 2rem;\n    margin: 0.5rem 0;\n    text-shadow: "," 2px 2px 2px;\n  }\n\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, ",");\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px ",");\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .gameOptions {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .difficultyLevel {\n    margin: 0.5rem;\n    padding: 1rem;\n    display: flex;\n    background-color: rgba(255, 255, 255, 0.9);\n    box-shadow: ",";\n  }\n  .difficultyLevel input {\n    width: 18px;\n    height: 18px;\n    margin-right: 0.3rem;\n  }\n  .difficultyLevel label {\n    margin-right: 1rem;\n  }\n\n  .categories {\n    display: flex;\n    justify-content: space-around;\n    max-width: 800px;\n    flex-wrap: wrap;\n    margin: 1rem 0;\n  }\n  .category {\n    min-height: ",";\n    min-width: ",";\n    height: ",";\n    width: ",";\n    margin: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    border-radius: 0.5rem;\n    border: solid #fff 2px;\n    box-shadow: ",";\n    color: #fff;\n    text-shadow: 1px 1px 2px black;\n    font-size: 1.5rem;\n    word-break: normal;\n    text-align: center;\n    cursor: pointer;\n  }\n  .category:hover {\n    transform: scale(1.05);\n  }\n  ","\n\n  // buttons wrapper\n  .quizButtons {\n    display: flex;\n    justify-content: center;\n  }\n\n  // buttons\n  .nextQuestion,\n  .endQuiz {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, ",");\n    border: 2px solid ",";\n    box-shadow: ",";\n    border-radius: 10px;\n    height: 3rem;\n    margin: 1rem;\n    padding: 0 40px;\n    width: 220px;\n  }\n"])),C,D,B,C,K,I,I,I,I,K,G.map((function(n){return'.category[data-name="'+n[1]+'"] { background-image:url('+n[2]+");}"})),z,T,K),Y=v,Z=L,M=H,E=U,_=R,$=F,nn=W,en=y.b.div(x||(x=Object(w.a)(["\n  margin: 20px;\n  width: 800px;\n  max-width: 800px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid ",';\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n\n  .questionNumber {\n    text-decoration: underline;\n  }\n\n  .answers {\n    width: 100%;\n    margin: 1rem 0 0;\n    display: inline-grid;\n    grid-gap: 1rem;\n    grid-template-areas:\n      "button button"\n      "button button";\n  }\n  .answers button {\n    height: 3rem;\n  }\n  .answers div {\n    width: 374px;\n    max-width: 374px;\n  }\n'])),Y),tn="linear-gradient(90deg, ".concat(Z,", ").concat(M,")"),an="linear-gradient(90deg, ".concat($,", ").concat(nn,")"),rn="linear-gradient(90deg, ".concat(E,", ").concat(_,")"),cn=y.b.div(A||(A=Object(w.a)(['\n  transition: all 0.3s ease;\n  grid-area: "button";\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    margin: 0;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ',";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?tn:!e&&t?an:rn})),on=t(1),sn=function(n){var e=n.question,t=n.answers,a=n.callback,r=n.userAnswer,c=n.questionNum,i=n.totalQuestions;return Object(on.jsxs)(en,{children:[Object(on.jsxs)("p",{className:"questionNumber",children:["Question: ",c,"/",i]}),Object(on.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(on.jsx)("div",{className:"answers",children:t.map((function(n){return Object(on.jsx)(cn,{correct:(null===r||void 0===r?void 0:r.correctAnswer)===n,userClicked:(null===r||void 0===r?void 0:r.answer)===n,children:Object(on.jsx)("button",{disabled:!!r,value:n,onClick:a,children:Object(on.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},dn=S,un=y.b.p(h||(h=Object(w.a)(["\n  font-size: 2.5rem;\n  font-weight: 600;\n  color: purple;\n  display: flex;\n  align-items: flex-end;\n  line-height: 1;\n\n  span {\n    display: inline-block;\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background-color: ",";\n    margin-left: 1rem;\n    transform: translateY(0.6rem);\n    animation: bounce ease-out 0.6s infinite alternate;\n    animation-delay: 0s;\n  }\n  span:nth-child(1) {\n    animation-delay: 0.4s;\n  }\n  span:nth-child(2) {\n    background-color: purple;\n    animation-delay: 0.2s;\n  }\n\n  @keyframes bounce {\n    to {\n      transform: translate3d(0, -0.8rem, 0);\n    }\n  }\n"])),dn),pn=function(){return Object(on.jsxs)(un,{children:["Loading",Object(on.jsx)("span",{className:"circle"}),Object(on.jsx)("span",{className:"circle"}),Object(on.jsx)("span",{className:"circle"})]})},ln=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),d=o[0],b=o[1],j=Object(r.useState)(0),m=Object(l.a)(j,2),x=m[0],A=m[1],h=Object(r.useState)([]),w=Object(l.a)(h,2),y=w[0],k=w[1],O=Object(r.useState)(0),q=Object(l.a)(O,2),N=q[0],J=q[1],V=Object(r.useState)(!0),X=Object(l.a)(V,2),S=X[0],v=X[1],L=Object(r.useState)(localStorage.getItem("quizDifficultyLevel")||"medium"),F=Object(l.a)(L,2),U=F[0],H=F[1],W=Object(r.useState)(0),R=Object(l.a)(W,2),B=R[0],C=R[1],z=function(){var n=Object(p.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),v(!1),n.prev=2,n.next=5,f(10,e,a[U.toUpperCase()]);case 5:return t=n.sent,n.next=8,C(e);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:b(t),J(0),A(0),k([]),c(!1);case 18:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(Q,{backgroundImageId:B}),Object(on.jsxs)(P,{className:"App",children:[Object(on.jsx)("h1",{children:"Simple Trivia"}),S&&Object(on.jsxs)("div",{className:"gameOptions",children:[Object(on.jsx)("div",{className:"difficultyLevel",children:["easy","medium","hard"].map((function(n){return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)("input",{type:"radio",name:"difficulty",value:n,onChange:function(n){return function(n){var e=n.currentTarget.value;U!==n.currentTarget&&(localStorage.setItem("quizDifficultyLevel",e),H(e))}(n)},id:n,checked:U===n}),Object(on.jsx)("label",{htmlFor:n,children:g(n)})]})}))}),Object(on.jsx)("div",{className:"categories",children:G.map((function(n){return Object(on.jsx)("div",{className:"category","data-name":n[1],onClick:function(){return z(n[0])},children:g(n[1])},n[1])}))})]}),!S&&Object(on.jsxs)("p",{className:"score",children:["Score: ",N]}),t&&Object(on.jsx)(pn,{}),!t&&!S&&Object(on.jsx)(sn,{questionNum:x+1,totalQuestions:10,question:d[x].question,answers:d[x].answers,userAnswer:y?y[x]:void 0,callback:function(n){if(!S){var e=n.currentTarget.value,t=e===d[x].correct_answer;t&&J((function(n){return n+1}));var a={question:d[x].question,answer:e,correct:t,correctAnswer:d[x].correct_answer};k((function(n){return[].concat(Object(s.a)(n),[a])}))}}}),Object(on.jsxs)("div",{className:"quizButtons",children:[!S&&Object(on.jsx)("button",{className:"endQuiz",onClick:function(){S||(v(!0),C(0))},children:"End trivia"}),!S&&!t&&y.length===x+1&&9!==x&&Object(on.jsx)("button",{className:"nextQuestion",onClick:function(){var n=x+1;10===n&&v(!0),A(n)},children:"Next question"})]})]})]})};o.a.render(Object(on.jsx)(c.a.StrictMode,{children:Object(on.jsx)(ln,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.43260f86.chunk.js.map