import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state ', () => {
  const state = expensesReducer(undefined, { type: '@@init' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Candy',
      note: 'test',
      amount: 1000,
      createdAt: moment(0).add(4, 'days').valueOf(),
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'hello!',
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].note).toBe(action.updates.note)
})

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'hello!',
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
