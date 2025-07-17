import { RisuButton } from "./btnDeclare";

type ChatboxHamburgerButtonConfig = {
    text: string,
    onclick: () => void,
    icon: SVGSVGElement | HTMLElement,
    order: "top" | "bottom",
}

export class ChatboxHamburgerButton extends RisuButton<ChatboxHamburgerButtonConfig> {
    constructor(id: string, options: Partial<ChatboxHamburgerButtonConfig> = {}) {
        super(id, options);
    }

    /**
     * Returns the button element.
     * Cause button is in div element, this method is overridden.
     * @returns {HTMLElement} The button element.
     */
    protected override getButtonElement(): HTMLElement {
        const btnFamily = document.createElement("div");
        btnFamily.className = "flex items-center cursor-pointer lg:hover:text-green-500 svelte-ba8msf"
        btnFamily.id = this.id;
        btnFamily.onclick = this.options.onclick;

        const icon = this.options.icon;
        btnFamily.appendChild(icon);

        const text = document.createElement("span");
        text.className = "ml-2 svelte-ba8msf";
        text.textContent = this.options.text;
        btnFamily.appendChild(text);

        return btnFamily;
    }
    protected override getDefaultOptions(): ChatboxHamburgerButtonConfig {
        /**
         * @license {MIT}
         * @copyright Bootstrap Icons, 2019-2024, from https://icons.getbootstrap.com/icons/file-earmark-break/
         * License from: https://github.com/twbs/icons/blob/cd39b90329843c396378b468aafec3fdb24bb7fa/LICENSE
         */
        const icon = (new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
</svg>`, "image/svg+xml").documentElement) as unknown as SVGSVGElement;

        return {
            text: "Sample Button",
            onclick: () => { },
            icon: icon,
            order: "top"
        }
    }
    protected override onDocumentChange(btn: HTMLElement): () => void {
        return () => {
            if (document.getElementById(this.id)) {
                // Button already exists
                return;
            }

            //Try to find clicked hamburger menu
            const menu = document.querySelector("html body div#app main.flex.bg-bg.w-full.h-full.max-w-100vw.text-textcolor div.flex-grow.h-full.min-w-0.relative.justify-center.flex div.h-full.w-full div.w-full.h-full.svelte-ba8msf div.h-full.w-full.flex.flex-col-reverse.overflow-y-auto.relative.default-chat-screen.svelte-ba8msf div.right-2.bottom-16.p-5.bg-darkbg.flex.flex-col.gap-3.text-textcolor.rounded-md.svelte-ba8msf")
            if (menu) {
                if (this.options.order === "top")
                    menu.firstElementChild!!.before(btn);
                else
                    menu.lastElementChild!!.after(btn);
            }
        }
    }
}