import request        from 'superagent';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import AppConstants   from '../constants/AppConstants';

const ActionTypes = AppConstants.ActionTypes;
const urlRoot = "http://ws.audioscrobbler.com/2.0/?api_key=b867bf0fdfe95e6c6dc31a275535f765&format=json&";

// TODO Loading
export default {
  fetchByArtist(artist) {
    // 2. action: get server side data
    request.get(`${urlRoot}method=artist.gettoptracks&artist=${encodeURIComponent(artist)}`)
    .end((err, res) => {
      // 3. Dispatcher: call handleViewAction.
      AppDispatcher.handleViewAction({
        type: ActionTypes.RECEIVE_TRACKS_BY_ARTIST,
        tracks: res.body.toptracks.track
      });
    });
  },
  fetchByCountry(country) {
    request.get(`${urlRoot}method=geo.gettoptracks&country=${encodeURIComponent(country)}`)
    .end((err, res) => {
      AppDispatcher.handleViewAction({
        type: ActionTypes.RECEIVE_TRACKS_BY_ARTIST,
        tracks: res.body.toptracks.track
      });
    });
  }
};
