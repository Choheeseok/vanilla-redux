import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Detail ({ toDo, onBtnClick }) {
  console.log(onBtnClick)
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={onBtnClick}>DEL</button>
    </>
  )
}

function mapStateToProps (state, ownProps) {
  const { match: { params: { id } } } = ownProps
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) }
}

function mapDispatchToProps (state, ownProps) {
  const { match: { params: { id } } } = ownProps
  return {
    onBtnClick: () => actionCreators.deleteTodo(id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
