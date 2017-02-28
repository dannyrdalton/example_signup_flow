import { injectReducer } from '../../store/reducers'
import ROUTES from 'constants/routes'

export default (store) => ({
  path : ROUTES.DENTAL_HISTORY.path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/DentalHistoryContainer').default
      const reducer = require('./modules/dental_history').default

      /*  Add the reducer to the store on key 'pinfo'  */
      injectReducer(store, { key: 'dentalHistory', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'dentalHistory')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter dental history!');
  }
})
