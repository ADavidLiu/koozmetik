class SidebarManager {
    constructor() {
        this.backContent = $("body");
        this.sidebar = $(".sidebar");
        this.trigger = $(".js-sidebar-trigger");
        this.bindEvents();
    }

    bindEvents = () => {
        this.trigger.click(this.toggleNav);
        this.sidebar.click(this.handleSidebarClick);
        this.backContent.click(this.closeNav);
    }

    handleSidebarClick = (e) => {
        e.stopPropagation();
    }

    toggleNav = (e) => {
        e.stopPropagation();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-sidebar");
        const $target = $(`.sidebar[data-sidebar="${target}"]`);
        $target.toggleClass("sidebar--active");
    }

    closeNav = () => {
        this.sidebar.removeClass("sidebar--active");
    }
}