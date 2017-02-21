import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'pinfo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PersonalInformation = require('./containers/PersonalInformationContainer').default
      const reducer = require('./modules/personal_information').default

      /*  Add the reducer to the store on key 'pinfo'  */
      injectReducer(store, { key: 'pinfo', reducer })

      /*  Return getComponent   */
      cb(null, PersonalInformation)

    /* Webpack named bundle   */
    }, 'pinfo')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter pinfo!');
  }
})
