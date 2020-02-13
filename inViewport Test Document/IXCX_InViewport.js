class IXCX_InViewport {
    constructor(objectData = { target: null, callback: null, offsetTrigger: null, debugMode: false }) {
        this.target = objectData.target;
        this.callback = objectData.callback;
        this.innerHeight = window.innerHeight;
        this.innerHeight_half = window.innerHeight / 2;
        this.offsetTriggerStr = objectData.offsetTrigger;

        if (!objectData.offsetTrigger) {
            this.offsetTriggerInt = innerHeight;
        } else if (/\dpx$/.test(this.offsetTriggerStr) == true) {
            this.offsetTriggerInt = innerHeight - parseInt(objectData.offsetTrigger.replace('px', ''))
        } else if (/\d%$/.test(this.offsetTriggerStr) == true) {
            this.offsetTriggerInt = innerHeight * (parseInt(objectData.offsetTrigger.replace('%', '')) / 100)
        } else {
            this.offsetTriggerInt = innerHeight;
        }

        // DEBUG
        this.debugMode = objectData.debugMode;
        this.debugElem = document.createElement('debug');
        this.txtNode = document.createTextNode('Callback Activated');

        if (this.debugMode == true || this.debugMode == 1) {
            let body = document.body;
            this.debugElem.setAttribute('style', 'background: rgba(255, 0, 0, 0.5); width: 100%; height: ' + this.offsetTriggerInt + 'px; position: fixed; top: 0; left: 0; font-family: sans-serif; font-size: 20px; display: flex; justify-content: center; align-items: center;');
            body.appendChild(this.debugElem);
        }
    }
    start() {
        let isInViewport = () => {
            if (this.target) {
                let target = this.target.getBoundingClientRect();
                let targetPosition = target.top;

                if (targetPosition <= (this.offsetTriggerInt ? this.offsetTriggerInt : this.innerHeight)) {
                    this.callback();

                    if (this.debugMode == true || this.debugMode == 1) {
                        console.log('Callback Activated');
                        this.debugElem.appendChild(this.txtNode);
                    }

                    this.target = null;
                    target = null;
                    targetPosition = null;
                }
            }
        }
        document.addEventListener('scroll', isInViewport);
    }
}
