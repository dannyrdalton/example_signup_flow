import { injectReducer } from '../../store/reducers'
import ROUTES from 'constants/routes'

export const PATH = 'review-and-submit'

export default (store) => ({
  path : ROUTES.REVIEW_AND_SUBMIT.path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/ReviewAndSubmitContainer').default
      const reducer = require('./modules/review_and_submit').default

      /*  Add the reducer to the store on key 'reviewAndSubmit'  */
      injectReducer(store, { key: 'reveiwAndSubmit', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'reveiwAndSubmit')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter review and submit!');
  }
})
