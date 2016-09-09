/// <reference path="../../typings/index.d.ts" />

declare module "lib/util" {
    class Arrays extends Array{
        /**
         * 删除 数组指定元素
         */
        remove():void;
    }
}