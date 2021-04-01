import { refreshStoredCanvasList } from '../events';
import type { CanvasState } from '../types';
import { canvasReviver } from './canvas-reviver';

export const loadFromLocalStorage = (uuid: string) => JSON.parse(localStorage.getItem(uuid), canvasReviver);
export const saveToLocalStorage = (uuid: string, canvas: CanvasState) => localStorage.setItem(uuid, JSON.stringify(canvas));

export const renameSavedCanvas = (uuid: string, newName: string) => {
  const data = loadFromLocalStorage(uuid);
  data.title = newName;
  data.lastUpdated = new Date();
  saveToLocalStorage(uuid, data);
  dispatchEvent(refreshStoredCanvasList);
}

export const deleteCanvas = (uuid: string) => {
  localStorage.removeItem(uuid);
  dispatchEvent(refreshStoredCanvasList);
}

export const getLocalCanvases = () => Object.entries(localStorage).map(([uuid, v]) => {
  try {
    const { title, lastUpdated, blobs } = JSON.parse(v, canvasReviver);
    return { uuid, title, lastUpdated, blobs };
  } catch {
    return undefined;
  }
}).filter(x => x);
