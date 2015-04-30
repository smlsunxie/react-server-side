import {Dispatcher} from 'flux';
import assign       from 'object-assign';
import AppConstants from '../constants/AppConstants';

const PayloadSources = AppConstants.PayloadSources;

export default assign(new Dispatcher(), {
  handleViewAction(action) {
    /**
    action = {
      type: ActionTypes.RECEIVE_TRACKS_BY_ARTIST,
      tracks: res.body.toptracks.track
    }
    **/

    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});
