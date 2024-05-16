export default class DatabaseManager {
    /**
     * Creates an instance of DatabaseManager.
     *
     * @constructor
     * @param {string} name - the name of the app
     * @param {object} config - the structure of the database
     */
    constructor(name, config) {
        this.name = name;
        this.config = config;
    }

    devMode = true;

    create() {
        if (this.devMode) {
            this.delete();
        }

        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, JSON.stringify(this.config));
        }
    }

    read() {
        return JSON.parse(localStorage.getItem(this.name));
    }

    /**
     * Updates localStorage with the new data
     *
     * @param {object} data
     */
    update(data) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }

    // eslint-disable-next-line class-methods-use-this
    delete() {
        localStorage.clear();
    }
}
