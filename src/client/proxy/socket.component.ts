import {Base} from '../base';

export abstract class SocketComponent extends Base{
    private _socket_ =window['io']()
    public get socket(){
        return this._socket_;
    }

    abstract closeSocket():void
}