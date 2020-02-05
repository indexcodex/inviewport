# IXCX_InViewport (v1.1.0)
IXCX_InViewport is a very lightweight (547bytes!) vanilla javascript library that runs a user defined funtions when the target element is in viewport!

# How to use
1. Add the script to your document  
`<script src="assets/IXCX_InViewport.js"></script>`  
2. Create an IXCX_InViewport object  
`let isInViewport = new IXCX_InViewport({target: null, callback: null})`  
3. Fill in the following data:  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) target (required) :**  `Your target element via getElementById, querySelector, etc..`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) callback (required) :**  `The function to run when target is in viewport` 

  ```
  function IXCX_InViewport_callback() {
     console.log('target is in viewport');
  }
  
  let isInViewport = new IXCX_InViewport({  
     target: myTargetElement,  
     callback: IXCX_InViewport_callback,
  });
  ```
4. Call start() method  
`isInViewport.start();`
