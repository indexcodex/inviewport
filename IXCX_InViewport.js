class IXCX_InViewport {
    constructor(objectData = { target: null, callback: null, offsetTrigger: null,}) {
        this.html = document.documentElement;
        this.body = document.body;

        this.innerHeight_half = window.innerHeight / 2;

        this.target = objectData.target;
        this.callback = objectData.callback;
        this.offsetTrigger = objectData.offsetTrigger;
    }

    start() {
        let isInViewport = () => {
            if ((this.html.scrollTop || this.body.scrollTop) >= (this.target.offsetTop - (this.offsetTrigger == null ? this.innerHeight_half : this.offsetTrigger))) {
                this.callback();
                this.html = 0;
                this.body = 0;
                this.target = 1;
            }
        }

        document.addEventListener('scroll', isInViewport);
    }
}
