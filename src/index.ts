import {Loader, createLoader} from './Loader';
export {createLoader, createLoaderWithPath, Loader} from './Loader';

class LoaderStore {
  private _nestingLevel: number = 1;
  public loader: Loader | null = null;

  set nestingLevel(value: number) {
    if (this.loader) {
      throw new Error("The nesting level can't be changed after a method has been called.");
    } else {
      this._nestingLevel = value;
    }
  }

  get nestingLevel() {
    return this._nestingLevel;
  }
}

const nnLoaderStore = new LoaderStore();

const handler: ProxyHandler<LoaderStore> = {
  get: function(target, prop, receiver) {
    if (!(prop in target)) {
      if (target.loader) {
        return Reflect.get(target.loader, prop, receiver);
      } else {
        target.loader = createLoader(1);
        return Reflect.get(target.loader, prop, receiver);
      }
    } else {
      return Reflect.get(target, prop, receiver);
    }
  }
}

const nnLoader = new Proxy(nnLoaderStore, handler) as unknown as Loader & {nestingLevel: number};

export default nnLoader;
