import { RisuButton } from "./btnDeclare";
export enum CharacterMenuGroup {
    Character = 0,
    Display = 1,
    Lorebook = 2,
    TTS = 3,
    Script = 4,
    Advanced = 5,
    Share = 6,
    Devtool = -1
}
type CharacterButtonConfig = {
    text: string,
    onclick: () => void,
    size: "large" | "small",
    menuSelector: CharacterMenuGroup | number,
}

export class CharacterButton extends RisuButton<CharacterButtonConfig> {
    constructor(id: string, options: Partial<CharacterButtonConfig> = {}) {
        super(id, options);
    }
    protected override getButtonElement(): HTMLElement {
        const btn = super.getButtonElement();
        btn.classList.add(
            "bg-darkbutton",
            "hover:bg-selected",
            "focus:ring-selected",
            "border-darkborderc",
            "border",
            "text-textcolor",
            "rounded-md",
            "shadow-sm",
            "focus:outline-none",
            "focus:ring-2",
            "transition-colors",
            "duration-200",
            "mt-2",
            "px-2",
            this.options.size === "small" ? "text-sm" : "text-lg",
        );
        return btn;
    }
    protected override getDefaultOptions(): CharacterButtonConfig {
        return {
            text: "Sample Button",
            onclick: () => { },
            size: "small",
            menuSelector: CharacterMenuGroup.Share
        }
    }
    protected override onDocumentChange(btn: HTMLElement): () => void {
        return () => {
            const menu = this.findThisMenu();
            if (menu === undefined) {
                return;
            }
            if (menu !== this.options.menuSelector) {
                //We're on the wrong menu
                return;
            }
            if (document.getElementById(this.id)) {
                // Button already exists
                return;
            }

            //Whoa, this code works in devtool too.
            const lastElement = document.querySelector("div.setting-area > :nth-last-child(1)")
            if (lastElement) {
                lastElement.after(btn);
            } else {
                console.warn("Could not find the last element to insert the button after.");
            }
        }
    }
    private findThisMenu(): CharacterMenuGroup | undefined {
        const menubar = document.querySelector(`div.setting-area div.flex.mb-2.gap-2`)
        if (!menubar) {
            //it might be in devtool
            if (document.querySelector("div.setting-area"))
                return CharacterMenuGroup.Devtool;
            else
                return undefined;
        }
        //find a menubar's child that doesnt have the class "text-textcolor2"
        for (let i = 0; i < menubar.children.length; i++) {
            const child = menubar.children[i];
            if (!child.classList.contains("text-textcolor2")) {
                return i;
            }
        }
    }
}