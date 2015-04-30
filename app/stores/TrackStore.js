import {EventEmitter} from 'events';
import assign         from 'object-assign';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import AppConstants   from '../constants/AppConstants';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';
let tracks = [];

const TrackStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll() {
    return tracks;
  },
});

TrackStore.dispatchToken = AppDispatcher.register( payload => {
  const action = payload.action;

  switch (action.type) {
    case ActionTypes.RECEIVE_TRACKS_BY_ARTIST:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
    case ActionTypes.RECEIVE_TRACKS_BY_COUNTRY:
      tracks = action.tracks;
      TrackStore.emitChange();
      break;
  }
});

export default TrackStore;
