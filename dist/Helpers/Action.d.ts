export default class Action<Payload> {
    constructor(payload: Payload);
    type: string;
    payload: Payload;
    Is<Payload2>(actionType: new (..._) => Action<Payload2>): this is Action<Payload2>;
}
