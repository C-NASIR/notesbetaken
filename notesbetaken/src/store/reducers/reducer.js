import getInitialData from "../data";

const initalData = getInitialData();
export default function reducer(state = initalData, action) {
  if (action.type === "ASSIGN_VALUE") {
    console.log(` you assigned ${state}`);
    return {
      ...state,
      TabActiveIndex: action.value,
    };
  }
  console.log(` you did not assign ${state}`);
  return state;
}
