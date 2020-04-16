import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h3>
        Viewing {expenseCount} expense(s) totalling {formattedExpenseTotal}
      </h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
