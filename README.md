# IXCX_InViewport (v2.0.0)
IXCX_InViewport is a very lightweight (1.81kb!) vanilla javascript library that runs a user defined funtion when the target element is in viewport!

# How to use
1. Add the script inside the head tag  
`<script src="assets/IXCX_InViewport.js"></script>`  
2. Create an IXCX_InViewport object  
3. Fill in the following data:  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) target (required) :**  `Your target element via getElementById, querySelector, etc..`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) callback (required; data type function) :**  `The function to run when target is in viewport`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) offsetTrigger (optional; default: full screen height; data type: string) :**  `trigger callback by screen height minus X pixels/percent`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) debugMode (optional; default: false; data type: boolean) :**  `shows a visual debugger to help determine the callback trigger point`  
4. Call start() method  

# Code Sample
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
