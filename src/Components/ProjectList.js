import { ReactComponent as HTMLLogo } from '../assets/html-1.svg';
import { ReactComponent as CSSLogo } from '../assets/css-3.svg';
import { ReactComponent as JavaScriptLogo } from '../assets/javascript-1.svg';
import { ReactComponent as BootStrapLogo } from '../assets/bootstrap-5-1.svg';
import { ReactComponent as ReactLogo } from '../assets/react-2.svg';
import { ReactComponent as NodeJsLogo } from '../assets/nodejs-3.svg';
import { ReactComponent as ThreeJsLogo } from '../assets/threejs-1.svg';
import { ReactComponent as ElectronJsLogo } from '../assets/electron-svgrepo-com.svg';
import { ReactComponent as FirebaseLogo } from '../assets/firebase-icon.svg';
import { ReactComponent as GitHubLogo } from '../assets/github-icon-1.svg';
const PhaserJsLogo = () => <img src="./Phaser Logo Web Quality.png" />;

export const ProjectList = [
  {
    name: '3D Space Shooter',
    githubLink: 'https://github.com/MudiaZuwa/3D-Space-Shooter',
    pageLink: 'https://mudiazuwa.github.io/3D-Space-Shooter/',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: `I developed a 3D space shooter game using Three.js and JavaScript. The game showcases a spaceship capable of flying and shooting within a 3D space environment. The player encounters various enemies and obstacles, presenting challenges throughout the gameplay. A straightforward user interface displays the spaceship's health and score. Users have the flexibility to choose their preferred controls.
Keyboard Controls:
WASD: Player movements and menu cursor movements
Enter: Shoot Projectiles and select menu option
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Shoot Projectiles and select menu option
Start: Toggle Pause Game`,
  },
  {
    name: '3D Fighting Demo',
    githubLink: 'https://github.com/MudiaZuwa/3D-Fighting-Demo',
    pageLink: 'https://mudiazuwa.github.io/3D-Fighting-Demo/',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, ThreeJsLogo],
    description: ` A 3D fighting game demo utilizing Three.js and the Cannon.js physics engine. Players can engage in battles against the computer or challenge their friends. Users have the flexibility to choose their preferred controls. The game showcases various characters with distinct move animations.
Keyboard Controls:
WASD: Player movements and menu cursor movements
J: Punch attacks and select menu option
L: Kick attacks and back button
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Punch attacks and select menu option
B: Kick attacks and back button
Start: Toggle Pause Game`,
  },
  {
    name: 'Mudia Store',
    githubLink: 'https://github.com/MudiaStore/MudiaStore.github.io',
    pageLink: 'https://mudiastore.github.io/ ',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, BootStrapLogo, FirebaseLogo],
    description: `An ecommerce website enabling users to create accounts, register as vendors, and upload their projects. Vendor projects are visible to other users, who can order and make payments using bank cards or transfers via Paystack.`,
  },
  {
    name: 'Ball Fall',
    githubLink: 'https://github.com/MudiaZuwa/Ball-Fall',
    pageLink: 'https://mudiazuwa.github.io/Ball-Fall/ ',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D game built with HTML canvas featuring a falling ball controlled by the user. The objective is to land the ball on continuously rising platforms, preventing it from touching the bottom or top of the screen. The game includes a straightforward user interface.
Keyboard Controls:
Arrow Keys: Ball movements
Esc: Toggle Pause Game

Android Controls:
Sides of screen: Ball movements
Pause button: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Ball movements
Start: Toggle Pause Game`,
  },
  {
    name: 'Phaser Endless Runner',
    githubLink: 'https://github.com/MudiaZuwa/Phaser-Endless-Runner',
    pageLink: 'https://mudiazuwa.github.io/Ball-Fall/ ',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, PhaserJsLogo],
    description: `I designed a Phaser Endless Runner, a 2D game utilizing Phaser 3 and JavaScript. The game features a character running across a platform, avoiding incoming obstacles.
Keyboard Controls:
Spacebar: Jumping.`,
  },
  {
    name: 'MMO Platformer',
    githubLink: 'https://github.com/MudiaZuwa/MMO-Platformer',
    pageLink: 'https://mudiazuwa.github.io/MMO-Platformer/ ',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo, FirebaseLogo],
    description: ` A 2D MMO-Platformer game crafted using HTML canvas, integrating Firebase Realtime Database to relay data, character positions, and actions between users. The game entails a user-controlled character navigating three distinct 2D platform rooms.
Keyboard Controls:
A: Move Player Left
D: Move Player Right
W: Jump
S: Light Attack
Z: Heavy Attack`,
  },
  {
    name: 'Canvas Chess',
    githubLink: 'https://github.com/MudiaZuwa/Canvas-Chess',
    pageLink: 'https://mudiazuwa.github.io/Canvas-Chess/',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: ` A chess game implemented with HTML canvas, supporting two complete chess sets for two users to engage in a match. The game displays possible moves when a chess piece is clicked.`,
  },
  {
    name: 'Image Slide Puzzle',
    githubLink: 'https://github.com/MudiaZuwa/Image-Slide-Puzzle',
    pageLink: 'https://mudiazuwa.github.io/Image-Slide-Puzzle/',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: `A 2D puzzle game designed with HTML canvas, featuring a 4x6 grid tile arrangement of a user-selected image split into 24 pieces. The objective is to rearrange the tiles by dragging them to reconstruct the original image.
Mouse/Android Controls:
Drag tiles.`,
  },
  {
    name: '2D Fighting Game',
    githubLink: 'https://github.com/MudiaZuwa/2d-Fighting-Game',
    pageLink: 'https://mudiazuwa.github.io/2d-Fighting-Game/',
    code: [HTMLLogo, CSSLogo, JavaScriptLogo],
    description: ` A 2D fighting game developed using HTML canvas. Users can play against the computer or challenge friends, choosing their preferred controls.
Keyboard Controls:
Player 1:
A: Move Left
D: Move Right
W: Jump
S: Light Attack
Z: Heavy Attack

Player 2:
Arrow Left: Move Left
Arrow Right: Move Right
Arrow Up: Jump and menu cursor movements
Arrow Down: Light Attack and menu cursor movements
Shift: Heavy Attack
Enter: Select menu option
Esc: Toggle Pause Game

Gamepad Controls:
Joystick/D-Pad: Player movements and menu cursor movements
A: Light Attack and select menu option
B: Heavy Attack and back button
Start: Toggle Pause Game`,
  },
];
