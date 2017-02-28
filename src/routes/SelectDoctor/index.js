import { injectReducer } from '../../store/reducers'
import ROUTES from 'constants/routes'

export default (store) => ({
  path : ROUTES.SELECT_DOCTOR.path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/SelectDoctorContainer').default
      const reducer = require('./modules/select_doctor').default

      /*  Add the reducer to the store on key 'selectDoctor'  */
      injectReducer(store, { key: 'selectDoctor', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'selectDoctor')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter selectDoctor!');
  }
})
