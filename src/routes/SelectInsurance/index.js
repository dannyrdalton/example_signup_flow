import { injectReducer } from '../../store/reducers'

export const PATH = 'select-insurance'

export default (store) => ({
  path : PATH,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/SelectInsuranceContainer').default
      const reducer = require('./modules/select_insurance').default

      /*  Add the reducer to the store on key 'pinfo'  */
      injectReducer(store, { key: 'selectInsurance', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'selectInsurance')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter select insurance!');
  }
})
