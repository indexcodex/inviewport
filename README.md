# IXCX_InViewport (v3.0.0)
IXCX_InViewport is a very lightweight (2.3kb!) vanilla javascript library that runs a user defined funtion when the target element is in viewport!

# How to use
1. Add the script inside the head tag  
`<script src="IXCX_InViewport.js"></script>`  
2. Create an IXCX_InViewport object  
3. Fill in the following data:  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) target (required) :**  `Your target element via getElementById, querySelector, etc..`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) callback (required; data type function) :**  `The function to run when target is in viewport`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) offsetTrigger (optional; default: full screen height; data type: string) :**  `trigger callback by screen height minus X pixels(px)/percent(%)`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) debugMode (optional; default: false; data type: boolean) :**  `shows a visual debugger to help determine the callback trigger point`  
4. Call start() method  

# Code Sample 
**Trigger Callback at 50% height**  
![pysql](https://raw.githubusercontent.com/indexcodex/inviewport/master/demo/debugMode1.png)  
```
let h1 = document.querySelector('h1');

function inViewportCallback() {
  h1.style.color = 'red';
}

let inViewport = new IXCX_InViewport({
  target: h1,
  callback: inViewportCallback,
  offsetTrigger: '50%',
  debugMode: 1,
});

inViewport.start();
```

**Trigger Callback at 300px**  
![pysql](https://raw.githubusercontent.com/indexcodex/inviewport/master/demo/debugMode2.png)  
```
let h1 = document.querySelector('h1');

function inViewportCallback() {
  h1.style.color = 'red';
}

let inViewport = new IXCX_InViewport({
  target: h1,
  callback: inViewportCallback,
  offsetTrigger: '300px',
  debugMode: 1,
});

inViewport.start();
```
