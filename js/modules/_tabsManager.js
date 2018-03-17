class TabsManager {
    constructor() {
        this.control = $(".tabs__control");
        this.bindEvents();
    }

    bindEvents = () => {
        this.control.click(this.toggleTab);
    }

    toggleTab = (e) => {
        const $this = $(e.currentTarget);
        $this.addClass("tabs__control--active").siblings().removeClass("tabs__control--active");
        const target = $this.attr("data-tab");
        const $target = $(`.tabs__content-item[data-tab="${target}"]`);
        $target.addClass("tabs__content-item--active").siblings().removeClass("tabs__content-item--active");
    }
}