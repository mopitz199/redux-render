const initialState = {
  name: 'Maximiliano',
  age: 27,
  height: '1.76',
  lastName: 'Opitz'
};

const reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case `SET_${action.type.split("_")[1]}`:
      return {
        ...state,
        [action.payload.varName]: action.payload.value
      };
    default:
      return state;
  }
}

export default reducer1;