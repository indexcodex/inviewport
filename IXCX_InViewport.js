class IXCX_InViewport {
    constructor(objectData = { target: null, callback: null }) {
        this.html = document.documentElement;
        this.target = objectData.target;
        this.callback = objectData.callback;
    }

    start() {
        let isInViewport = () => {
            if (this.html.scrollTop >= (this.target.offsetTop - (this.target.offsetTop / 2.5))) {
                this.callback();
                this.html = 0;
                this.target = 1;
            }
        }

        document.addEventListener('scroll', isInViewport);
    }
}
