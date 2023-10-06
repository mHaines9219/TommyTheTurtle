# 🐢 Tommy The Turtle 🐢

## Tommy The Turtle just hatched and he needs your help!

Did you know that 90% of Sea Turtle hatchlings are eaten by predators? Birds, crabs, fish: everyone is out to get our delicious little guy Tommy but he's determined to beat the odds. As the last hatchling left in his brood he faces a tough and lonely road ahead but you can help! In this Frogger-style game it's up to you to tell Tommy when to move forward so he can avoid the perils of the beach and get to open water.

Avoid hungry predators, dodge obstacles, and use your skills to lead Tommy to safety. Can you help Tommy become one of the lucky few who survive to embark on a lifetime of ocean adventures? Play now and save a turtle today!

## MVP

- Create a game board resembling a beach
- Render Start screen with instructions and button
- Render game screen displaying canvas and available lives
- Render WASD control scheme
- Render variety of enemies moving on x-axis across screen
- Render collision algorithm that when detected, will subtract a life from available lives

## Stretch Goals

- Rerender to create multiple levels where speed/quantity of enemies increases
- Create a toggle for a second skin of the game
- Create an SVG element on the side of the canvas of Tommy's face that reacts as you progress
- Create a "scrolling" canvas to increase game length

## Tech Stack

- HTML
- CSS
- Javascript

## Wireframe

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="547px" height="1072px" viewBox="-0.5 -0.5 547 1072" content="&lt;mxfile&gt;&lt;diagram id=&quot;YoSR6fyOTfUL3SyawTTG&quot; name=&quot;Page-1&quot;&gt;1ZhNc5swEIZ/ja8ePoI/jontthc3nXFn2pw6KpJBE4EYIQfcX9/VsIABu008DpCLLb2skPbRaiU0cVdR/lmRJNxKysTEsWg+cdcTx7E96w7+jHIsFOdu4RZKoDhFq1rY8T8MRQvVA6csbRhqKYXmSVP0ZRwzXzc0opTMmmZ7KZq9JiRgHWHnE9FVf3Cqw0JdeFatf2E8CMuebQufRKQ0RiENCZXZieRuJu5KSamLUpSvmDD0Si5Fu08XnlYDUyzWr2mA3F+IOKBv3x+32yccnD6WHqdayefKWRjmQ6gjAUUbiuBEYuyiPDATPt0LmfkhUXqaavj9ZWyykGu2S4hvDDMwA01JTTSXMShLC+o4FqY0yy/6Y1eUIL6YjJhWRzDBBo6LYDG0lkusZ/U8VbMRnszRDDWCoRFUr67pQQEBnoe56MDsckRUKY8Dwe5NLF6Ac8L3FlyaWOZ9YlmOF4u9GJBLmc3GCMa9GxKMfS0YyhXk+yKlZCzV/bBaNll5sz5ZOR+KVTs/98uqu9uNmZU3JCpvvLmptZe5Xp9cZuPl0t7M+gUzHy8Ydz4kmKtPhcNsZnOvwaoKql5YXX1UHMVm1iurMgt+EFbekKjmHTKMwgc9VmMZs3P+Gpt/ewuvlAflo1UxAV0Cign4zH1pvuucP9j0m+TQS52tWgTgkzpgGo1aEKpeX8dl8UYuLOf650n5CcrW1MPa2ky1VVaOWBkHyzIKWyv2Hdm+4VyeKOmzNP3/OvxN/OdAyUNMHw9acDM9tztUnVmQznstyG6e33xdd/iANyY5FXdPKymkqqOSCB6YBOaDfwz0hz0XomVzQs6w4T4R99gs4pSabi7cSwFhRhsBfJuN4gTu7DZsoVrfFhZxWl+6upu/&lt;/diagram&gt;&lt;/mxfile&gt;"><defs/><g><ellipse cx="287" cy="1020" rx="50" ry="30" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="2" transform="rotate(90,287,1020)" pointer-events="all"/><g transform="translate(-0.5 -0.5)rotate(90 287 1020)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 1020px; margin-left: 238px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">TOMMY</div></div></div></foreignObject><text x="287" y="1024" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">TOMMY</text></switch></g><path d="M 27 811 L 107 811 L 107 790 L 127 820 L 107 850 L 107 829 L 27 829 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 187 811 L 267 811 L 267 790 L 287 820 L 267 850 L 267 829 L 187 829 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 347 811 L 427 811 L 427 790 L 447 820 L 427 850 L 427 829 L 347 829 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 397 581 L 477 581 L 477 560 L 497 590 L 477 620 L 477 599 L 397 599 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,447,590)" pointer-events="all"/><path d="M 237 581 L 317 581 L 317 560 L 337 590 L 317 620 L 317 599 L 237 599 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,287,590)" pointer-events="all"/><path d="M 57 581 L 137 581 L 137 560 L 157 590 L 137 620 L 137 599 L 57 599 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,107,590)" pointer-events="all"/><path d="M 27 371 L 107 371 L 107 350 L 127 380 L 107 410 L 107 389 L 27 389 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 187 371 L 267 371 L 267 350 L 287 380 L 267 410 L 267 389 L 187 389 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 377 371 L 457 371 L 457 350 L 477 380 L 457 410 L 457 389 L 377 389 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 382 201 L 462 201 L 462 180 L 482 210 L 462 240 L 462 219 L 382 219 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,432,210)" pointer-events="all"/><path d="M 237 201 L 317 201 L 317 180 L 337 210 L 317 240 L 317 219 L 237 219 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,287,210)" pointer-events="all"/><path d="M 57 201 L 137 201 L 137 180 L 157 210 L 137 240 L 137 219 L 57 219 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" transform="rotate(180,107,210)" pointer-events="all"/><path d="M 207 30 L 13.37 30" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 8.12 30 L 15.12 26.5 L 13.37 30 L 15.12 33.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 327 30 L 530.63 30" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 535.88 30 L 528.88 33.5 L 530.63 30 L 528.88 26.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><rect x="207" y="0" width="120" height="60" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><path d="M 219 0 L 219 60 M 315 0 L 315 60" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><rect x="237" y="0" width="60" height="60" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 30px; margin-left: 238px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">END</div></div></div></foreignObject><text x="267" y="34" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">END</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>
