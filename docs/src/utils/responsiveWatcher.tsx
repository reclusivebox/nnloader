import React, {useEffect, useState} from 'react';

export class ResponsiveWatcher {
  callbackMap: Map<Symbol, (bigScreen: boolean) => any>;
  condition: MediaQueryList;

  constructor(query = 'screen and (min-aspect-ratio: 4/3)') {
    this.callbackMap = new Map();
    this.condition = matchMedia(query);

    this.condition.addEventListener('change', (event) => {
      const newState = (event.target as any).matches;
      const callbacks = Array.from(this.callbackMap.values());
      callbacks.forEach((callback) => callback(newState));
    });
  }

  get state() {
    return this.condition.matches;
  }

  registerCallback(id: Symbol, callback: (bigScreen: boolean) => any) {
    this.callbackMap.set(id, callback);
  }

  removeCallback(id: Symbol) {
    this.callbackMap.delete(id);
  }

  containCallback(id: Symbol | ((bigScreen: boolean) => any)) {
    if (id instanceof Symbol) {
      return this.callbackMap.has(id);
    } else {
      return Array.from(this.callbackMap.values()).includes(id)
    }
  }
}

const defaultWatcher = new ResponsiveWatcher();

export function useResponsiveWatcher(customWatcher?: ResponsiveWatcher): boolean {
  const watcher = customWatcher ?? defaultWatcher;

  const callbackId = useState(Symbol())[0];
  const [bigScreen, updateComponent] = useState(watcher.state);

  // Register Callback Effect
  useEffect(() => {
    watcher.registerCallback(callbackId, updateComponent);
  }, [updateComponent])

  // Remove Callback Effect
  useEffect(() => {
    return () => watcher.removeCallback(callbackId);
  }, [])

  return bigScreen;
}
