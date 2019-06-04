export class RequestConfig {
    public verb: string;
    public body: string;

    /**
     * Construct a request config from a given object
     */
    constructor( props: {[key: string]: any} = {}) {
        this.verb = props.verb;
        this.body = props.body;
    }
}
