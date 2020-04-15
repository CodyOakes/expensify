import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = (props) => {
  const expenseCount = props.expenses.length
  const expenseTotal = getExpensesTotal(props.expenses)
  return (
    <div>
      {expenseCount === 0 ? (
        <p>no summary</p>
      ) : (
        <p>
          Viewing {expenseCount} expense(s) totalling{' '}
          {numeral(expenseTotal / 100).format('$0,0.00')}
        </p>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
})

export default connect(mapStateToProps)(ExpensesSummary)
