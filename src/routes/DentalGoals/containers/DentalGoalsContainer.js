import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { back, next } from '../modules/dental_goals'
import { REDUX_FORM_CONFIG } from '../config/dental_goals_config'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import DentalGoals from '../components/DentalGoals'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  back,
  next 
}

const mapStateToProps = (state) => ({
  dentalGoals: state.dentalGoals,
  initialValues: state.dentalGoals.data 
})

const reduxFormConfig = REDUX_FORM_CONFIG

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(DentalGoals))
