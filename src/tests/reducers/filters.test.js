import filtersReducer from '../../reducers/filters'
import moment from 'moment'

let defaultFiltersState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
}

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    ...defaultFiltersState,
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    ...defaultFiltersState,
    sortBy: 'amount',
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'test' }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(action.text)
})

test('should set start date filter', () => {
  const action = { type: 'SET_START_DATE', startDate: moment() }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(action.startDate)
})

test('should set endDate filter', () => {
  const action = { type: 'SET_END_DATE', endDate: moment() }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(action.endDate)
})
