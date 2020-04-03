export default function Reducer(state, action) {
  switch (action.type) {
    case "SET_PAGE":
      return {
        page: action.data
      };
    default:
      throw new Error();
  }
}
