import { injectReducer } from '../../store/reducers'

export const PATH = 'dental-goals'

export default (store) => ({
  path : PATH,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SelectAnImage = require('./containers/DentalGoalsContainer').default
      const reducer = require('./modules/dental_goals').default

      /*  Add the reducer to the store on key 'pinfo'  */
      injectReducer(store, { key: 'dentalGoals', reducer })

      /*  Return getComponent   */
      cb(null, SelectAnImage)

    /* Webpack named bundle   */
    }, 'dentalGoals')
  },
  onEnter: () => {
    // load from mock backend here
    console.log('enter dental goals!');
  }
})
