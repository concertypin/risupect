declare function onUnload(callback: () => void): void;

/**
 * Configuration options for a RisuButton.
 * @property {string} text - The button label which user can see.
 * @property {() => void} onclick - The click event handler.
 */
type RisuButtonConfig = {
    text: string,
    onclick: () => void
}

/**
 * Abstract base class for creating custom buttons with mutation observation and lifecycle management.
 * 
 * @template T - The configuration type extending RisuButtonConfig. Subclasses can define their own configuration types.
 */
export abstract class RisuButton<T extends RisuButtonConfig> {
    /** Unique identifier for the button element. */
    protected readonly id: string;

    /** Button configuration options. */
    options: T;

    /** MutationObserver for document changes. */
    protected observer: MutationObserver | undefined;

    /**
     * Returns the default configuration options for the button.
     * Must be implemented by subclasses.
     */
    protected abstract getDefaultOptions(): T;

    /**
     * Creates a new RisuButton instance.
     * @param {string} id - The button's unique ID. It should be unique across the document.
     * @param {Partial<T>} [options={}] - Partial configuration options to override defaults.
     */
    constructor(id: string, options: Partial<T> = {}) {
        if (new.target === RisuButton) {
            throw new Error("RisuButton is an abstract class and must be extended by a subclass.");
        }

        this.id = id;
        this.options = { ...this.getDefaultOptions(), ...options };
        onUnload(() => { this.destroy() });
        //Handover button styling to the subclass
    }

    /**
     * Returns the button element.
     * Subclasses can override this method to fit their neighborhood's format like <div><button>.
     * @returns {HTMLElement} The button element.
     */
    protected getButtonElement(): HTMLElement {
        const btn = document.createElement("button");
        btn.id = this.id;
        btn.textContent = this.options.text;
        btn.onclick = this.options.onclick;
        return btn;
    }
    /**
     * Applies new configuration options to the button.
     * @param {Partial<T>} options - Partial options to update.
     * @returns {this}
     */
    apply(options: Partial<T>): this {
        this.options = { ...this.options, ...options };
        return this;
    }
    /**
     * Creates and configures the button element, sets up mutation observation.
     * @returns {this}
     */
    create(): this {
        const btn = this.getButtonElement();

        this.observer = new MutationObserver(this.onDocumentChange(btn));
        this.observer.observe(document.body, { childList: true, subtree: true });

        return this;
    }
    /**
     * Cleans up the button and disconnects the observer.
     * @returns {this}
     */
    destroy(): this {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
        const btn = document.getElementById(this.id);
        if (btn) {
            btn.remove();
        }
        return this;
    };
    /**
     * Handles document changes observed by MutationObserver.
     * Must be implemented by subclasses.
     */
    protected abstract onDocumentChange(btn: HTMLElement): () => void;
}