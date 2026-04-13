import { Buffer } from 'buffer';
import * as stream from 'stream-browserify';

(window as any).global = window;
(window as any).Buffer = Buffer;
(window as any).process = {
  env: { NODE_ENV: 'development' },
  version: 'v18.0.0',
  nextTick: (cb: any) => setTimeout(cb, 0),
  browser: true,
  cwd: () => '/',
};
(window as any).stream = stream;
(window as any).util = {
    inherits: (ctor: any, superCtor: any) => {
        if (superCtor) {
            ctor.super_ = superCtor;
            Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
        }
    }
};
