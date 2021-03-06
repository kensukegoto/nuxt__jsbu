export const state = () => {
  return {
    items: []
  }
}

export const getters = {
  items: state => {
    return state.items
  }
}

export const actions = {
  setItems(vuexContext, items){
    vuexContext.commit("setItems",items)
  }
}

export const mutations = {
  setItems(state,items){
    const {key, list} = items;
    let obj = {};
    obj[key] = list;
    state.items = { ...state.items, ...obj}
  }
}