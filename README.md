# IXCX_InViewport (v2.0.0)
IXCX_InViewport is a very lightweight (1.81kb!) vanilla javascript library that runs a user defined funtion when the target element is in viewport!

# How to use
1. Add the script inside the head tag  
`<script src="assets/IXCX_InViewport.js"></script>`  
2. Create an IXCX_InViewport object  
`let isInViewport = new IXCX_InViewport({target: null, callback: null, offsetTrigger: null, debugMode: false});`  
3. Fill in the following data:  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) target (required) :**  `Your target element via getElementById, querySelector, etc..`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) callback (required; data type function) :**  `The function to run when target is in viewport`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) offsetTrigger (optional; default: full screen height; data type: string) :**  `trigger callback by X pixels/percent above the target`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) debugMode (optional; default: false; data type: boolean) :**  `shows a visual debugger to help determine the callback trigger point`  
   
  ```
  function IXCX_InViewport_callback() {
     console.log('target is in viewport');
  }
  
  let isInViewport = new IXCX_InViewport({  
     target: myTargetElement,  
     callback: IXCX_InViewport_callback,
     offsetTrigger: null,
     debugMode: 1,
  });
  ```
4. Call start() method  
`isInViewport.start();`
