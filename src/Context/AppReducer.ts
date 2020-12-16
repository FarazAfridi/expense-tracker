export enum ActionType {
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export default (state: any, action: any) => {
     switch(action.type) {
      case ActionType.DELETE_TRANSACTION:
        return {
          ...state,
          transactions: state.transactions?.filter((transaction: any) => transaction.id !== action.payload)
        }
      case ActionType.ADD_TRANSACTION:
        return {
          ...state,
          transactions:[action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }
  