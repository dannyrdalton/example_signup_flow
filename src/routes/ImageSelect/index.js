import { injectReducer } from '../../store/reducers'
import ROUTES from 'constants/routes'

export default (store) => ({
  path : ROUTES.IMAGE_SELECT.path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/ImageSelectContainer').default
      const reducer = require('./modules/image_select').default

      /*  Add the reducer to the store on key 'pinfo'  */
      injectReducer(store, { key: 'imageSelect', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'imageSelect')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter select an image!');
  }
})
