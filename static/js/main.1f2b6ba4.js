/*! For license information please see main.1f2b6ba4.js.LICENSE.txt */
    let { project: t, index: n } = e;
    return (0, s.jsx)('div', {
      className: 'projectChild',
      children: (0, s.jsxs)(vw.Item, {
        eventKey: n,
        children: [
          (0, s.jsxs)(vw.Header, {
            className: 'projectHead',
            children: [
              (0, s.jsx)(Da, { className: 'projectIcon', icon: yw }),
              (0, s.jsx)('h3', { children: t.name }),
              (0, s.jsx)('a', {
                href: t.githubLink,
                className: 'links',
                children: (0, s.jsx)(Da, { icon: Ua }),
              }),
              (0, s.jsx)('a', {
                href: t.pageLink,
                className: 'links',
                children: (0, s.jsx)(Da, { icon: Pw }),
              }),
            ],
          }),
          (0, s.jsxs)(vw.Body, {
            className: 'projectDes',
            children: [
              t.description && (0, s.jsx)('p', { children: t.description }),
              (0, s.jsx)('div', {
                className: 'projPrograms',
                children: t.code.map((e, t) => (0, s.jsx)(e, {}, t)),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Hw = [
    {
      name: '3D Space Shooter',
      githubLink: 'https://github.com/MudiaZuwa/3D-Space-Shooter',
      pageLink: 'https://mudiazuwa.github.io/3D-Space-Shooter/',
      code: [oC, dC, yC, BC],
      description:
        "I developed a 3D space shooter game using Three.js and JavaScript. The game showcases a spaceship capable of flying and shooting within a 3D space environment. The player encounters various enemies and obstacles, presenting challenges throughout the gameplay. A straightforward user interface displays the spaceship's health and score. Users have the flexibility to choose their preferred controls.\nKeyboard Controls:\nWASD: Player movements and menu cursor movements\nEnter: Shoot Projectiles and select menu option\nEsc: Toggle Pause Game\n\nGamepad Controls:\nJoystick/D-Pad: Player movements and menu cursor movements\nA: Shoot Projectiles and select menu option\nStart: Toggle Pause Game",
    },
    {
      name: '3D Fighting Demo',
      githubLink: 'https://github.com/MudiaZuwa/3D-Fighting-Demo',
      pageLink: 'https://mudiazuwa.github.io/3D-Fighting-Demo/',
      code: [oC, dC, yC, BC],
      description:
        ' A 3D fighting game demo utilizing Three.js and the Cannon.js physics engine. Players can engage in battles against the computer or challenge their friends. Users have the flexibility to choose their preferred controls. The game showcases various characters with distinct move animations.\nKeyboard Controls:\nWASD: Player movements and menu cursor movements\nJ: Punch attacks and select menu option\nL: Kick attacks and back button\nEsc: Toggle Pause Game\n\nGamepad Controls:\nJoystick/D-Pad: Player movements and menu cursor movements\nA: Punch attacks and select menu option\nB: Kick attacks and back button\nStart: Toggle Pause Game',
    },
    {
      name: 'Mudia Store',
      githubLink: 'https://github.com/MudiaStore/MudiaStore.github.io',
      pageLink: 'https://mudiastore.github.io/ ',
      code: [oC, dC, yC, _C, YC],
      description:
        'An ecommerce website enabling users to create accounts, register as vendors, and upload their projects. Vendor projects are visible to other users, who can order and make payments using bank cards or transfers via Paystack.',
    },
    {
      name: 'Ball Fall',
      githubLink: 'https://github.com/MudiaZuwa/Ball-Fall',
      pageLink: 'https://mudiazuwa.github.io/Ball-Fall/ ',
      code: [oC, dC, yC],
      description:
        'A 2D game built with HTML canvas featuring a falling ball controlled by the user. The objective is to land the ball on continuously rising platforms, preventing it from touching the bottom or top of the screen. The game includes a straightforward user interface.\nKeyboard Controls:\nArrow Keys: Ball movements\nEsc: Toggle Pause Game\n\nAndroid Controls:\nSides of screen: Ball movements\nPause button: Toggle Pause Game\n\nGamepad Controls:\nJoystick/D-Pad: Ball movements\nStart: Toggle Pause Game',
    },
    {
      name: 'Phaser Endless Runner',
      githubLink: 'https://github.com/MudiaZuwa/Phaser-Endless-Runner',
      pageLink: 'https://mudiazuwa.github.io/Phaser-Endless-Runner/ ',
      code: [
        oC,
        dC,
        yC,
        () => (0, s.jsx)('img', { src: './Phaser Logo Web Quality.png' }),
      ],
      description:
        'I designed a Phaser Endless Runner, a 2D game utilizing Phaser 3 and JavaScript. The game features a character running across a platform, avoiding incoming obstacles.\nKeyboard Controls:\nSpacebar: Jumping.',
    },
    {
      name: 'MMO Platformer',
      githubLink: 'https://github.com/MudiaZuwa/MMO-Platformer',
      pageLink: 'https://mudiazuwa.github.io/MMO-Platformer/ ',
      code: [oC, dC, yC, YC],
      description:
        ' A 2D MMO-Platformer game crafted using HTML canvas, integrating Firebase Realtime Database to relay data, character positions, and actions between users. The game entails a user-controlled character navigating three distinct 2D platform rooms.\nKeyboard Controls:\nA: Move Player Left\nD: Move Player Right\nW: Jump\nS: Light Attack\nZ: Heavy Attack',
    },
    {
      name: 'Canvas Chess',
      githubLink: 'https://github.com/MudiaZuwa/Canvas-Chess',
      pageLink: 'https://mudiazuwa.github.io/Canvas-Chess/',
      code: [oC, dC, yC],
      description:
        ' A chess game implemented with HTML canvas, supporting two complete chess sets for two users to engage in a match. The game displays possible moves when a chess piece is clicked.',
    },
    {
      name: 'Image Slide Puzzle',
      githubLink: 'https://github.com/MudiaZuwa/Image-Slide-Puzzle',
      pageLink: 'https://mudiazuwa.github.io/Image-Slide-Puzzle/',
      code: [oC, dC, yC],
      description:
        'A 2D puzzle game designed with HTML canvas, featuring a 4x6 grid tile arrangement of a user-selected image split into 24 pieces. The objective is to rearrange the tiles by dragging them to reconstruct the original image.\nMouse/Android Controls:\nDrag tiles.',
    },
    {
      name: '2D Fighting Game',
      githubLink: 'https://github.com/MudiaZuwa/2d-Fighting-Game',
      pageLink: 'https://mudiazuwa.github.io/2d-Fighting-Game/',
      code: [oC, dC, yC],
      description:
        ' A 2D fighting game developed using HTML canvas. Users can play against the computer or challenge friends, choosing their preferred controls.\nKeyboard Controls:\nPlayer 1:\nA: Move Left\nD: Move Right\nW: Jump\nS: Light Attack\nZ: Heavy Attack\n\nPlayer 2:\nArrow Left: Move Left\nArrow Right: Move Right\nArrow Up: Jump and menu cursor movements\nArrow Down: Light Attack and menu cursor movements\nShift: Heavy Attack\nEnter: Select menu option\nEsc: Toggle Pause Game\n\nGamepad Controls:\nJoystick/D-Pad: Player movements and menu cursor movements\nA: Light Attack and select menu option\nB: Heavy Attack and back button\nStart: Toggle Pause Game',
    },
  ],
  Dw = () =>
    (0, s.jsxs)('div', {
      id: 'projects',
      children: [
        (0, s.jsx)('h2', { className: 'headings', children: 'Projects' }),
        (0, s.jsx)(vw, {
          children: Hw.map((e, t) =>
            (0, s.jsx)(Iw, { project: e, index: t }, t)
          ),
        }),
      ],
    }),
  kw = () =>
    (0, s.jsxs)('div', {
      id: 'contact',
      children: [
        (0, s.jsx)('h2', { className: 'headings', children: 'Contact' }),
        (0, s.jsx)('h3', { children: 'Contact Me' }),
        (0, s.jsx)('p', {
          children:
            "Reach out to me, and let's begin our collaboration. Let's work together to achieve a successful partnership.",
        }),
        (0, s.jsxs)('div', {
          className: 'contacts',
          children: [
            (0, s.jsxs)('div', {
              className: 'contact',
              children: [
                (0, s.jsx)(Da, { icon: bw }),
                (0, s.jsx)('a', {
                  href: 'mailto:mudiaosazuwa@gmail.com',
                  children: 'mudiaosazuwa@gmail.com',
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'contact',
              children: [
                (0, s.jsx)(Da, { icon: xw }),
                (0, s.jsx)('a', {
                  href: 'tel:+2347062545414',
                  children: '+2347062545414',
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'contact',
              children: [
                (0, s.jsx)(Da, { icon: Fa }),
                (0, s.jsx)('a', {
                  href: 'https://wa.me/+2347062545414',
                  children: '+2347062545414',
                }),
              ],
            }),
          ],
        }),
      ],
    });const Ow=function(){return(0,s.jsxs)("div",{className:"body",children:[(0,s.jsx)(Va,{}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"titleBody",children:[(0,s.jsx)("img",{src:"./IMG_20211218_100019.jpg"}),(0,s.jsx)($S,{})]}),(0,s.jsx)(ew,{}),(0,s.jsx)(Dw,{})]}),(0,s.jsx)(kw,{})]})};function Fw(){return Fw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fw.apply(this,arguments)}var Uw;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Uw||(Uw={}));const Vw="popstate";function Gw(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function jw(e,t){return{usr:e.state,key:e.key,idx:t}}function Ww(e,t,n,r){return void 0===n&&(n=null),Fw({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Jw(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Xw(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Jw(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yw(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Uw.Pop,c=null,l=u();function u(){return(o.state||{idx:null}).idx}function h(){s=Uw.Pop;let e=u(),t=null==e?null:e-l;l=e,c&&c({action:s,location:f.location,delta:t})}function d(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:Xw(e);return Gw(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==l&&(l=0,o.replaceState(Fw({},o.state,{idx:l}),""));let f={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vw,h),c=e,()=>{i.removeEventListener(Vw,h),c=null}},createHref:e=>t(i,e),createURL:d,encodeLocation(e){let t=d(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=Uw.Push;let r=Ww(f.location,e,t);n&&n(r,e),l=u()+1;let h=jw(r,l),d=f.createHref(r);try{o.pushState(h,"",d)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;i.location.assign(d)}a&&c&&c({action:s,location:f.location,delta:1})},replace:function(e,t){s=Uw.Replace;let r=Ww(f.location,e,t);n&&n(r,e),l=u();let i=jw(r,l),h=f.createHref(r);o.replaceState(i,"",h),a&&c&&c({action:s,location:f.location,delta:0})},go:e=>o.go(e)};return f}var Kw;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Kw||(Kw={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function qw(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}Error;const Qw=["post","put","patch","delete"],Zw=(new Set(Qw),["get",...Qw]);new Set(Zw),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function $w(){return $w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$w.apply(this,arguments)}const eE=t.createContext(null);const tE=t.createContext(null);function nE(){return null!=t.useContext(tE)}t.Component;r.startTransition;function rE(e){let{basename:n="/",children:r=null,location:i,navigationType:a=Uw.Pop,navigator:o,static:s=!1,future:c}=e;nE()&&Gw(!1);let l=n.replace(/^\/*/,"/"),u=t.useMemo((()=>({basename:l,navigator:o,static:s,future:$w({v7_relativeSplatPath:!1},c)})),[l,c,o,s]);"string"===typeof i&&(i=Jw(i));let{pathname:h="/",search:d="",hash:f="",state:p=null,key:m="default"}=i,g=t.useMemo((()=>{let e=qw(h,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:a}}),[l,h,d,f,p,m,a]);return null==g?null:t.createElement(eE.Provider,{value:u},t.createElement(tE.Provider,{children:r,value:g}))}new Promise((()=>{}));t.Component;new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);new Map;const iE=r.startTransition;_e.flushSync,r.useId;function aE(e){let{basename:n,children:r,future:i,window:a}=e,o=t.useRef();null==o.current&&(o.current=function(e){return void 0===e&&(e={}),Yw((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Ww("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:Xw(t)}),null,e)}({window:a,v5Compat:!0}));let s=o.current,[c,l]=t.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},h=t.useCallback((e=>{u&&iE?iE((()=>l(e))):l(e)}),[l,u]);return t.useLayoutEffect((()=>s.listen(h)),[s,h]),t.createElement(rE,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var oE,sE;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oE||(oE={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(sE||(sE={}));i.createRoot(document.getElementById("root")).render((0,s.jsx)(aE,{children:(0,s.jsx)(Ow,{})}))})()})();
//# sourceMappingURL=main.1f2b6ba4.js.map