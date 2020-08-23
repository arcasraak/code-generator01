import React from "react";
import CodeBlock from "./../CodeBlock";

const Reducer = ({
  actionNameSingular,
  actionNamePlural,
  namePlural,
  uniqueSelector,
  actions,
}) => {
  // intro
  const intro = `
  export default (state, action) => {
  switch (action.type) {`;

  // get
  const reducerGet = `    
  case 'GET_${actionNamePlural}':
      return {
        ...state,
        ${namePlural}: action.payload,
        loading: false,
        isAddingTransaction: false,
      };`;

  //add
  const reducerAdd = `    
    case 'ADD_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: [action.payload, ...state.${namePlural}],
        loading: false,
      }; `;

  // delete
  const reducerDel = `
  case 'DELETE_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: state.${namePlural}.filter(
          (element) => element.${uniqueSelector} !== action.payload
        ),
        loading: false,
      };`;

  //edit
  const reducerEdit = `  
  case 'EDIT_${actionNameSingular}':
      return {
        ...state,
        ${namePlural}: state.${namePlural}.map((element) => {
          if (element.${uniqueSelector} !== action.payload.${uniqueSelector}) {
            return element;
          }
          return {
            ...action.payload.'YOUR_API_RESPONSE_UPDATED ITEM,',
          };
        }),
        loading: false,
      };`;

  // error
  const reducerError = `    
  case '${actionNamePlural}_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };`;

  // set-loading
  const reducerSetLoading = `
  case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };`;

  // outro
  const outro = `    
    default:
      return state;
  }
};
    `;

  const getContent = actions.get.checked ? reducerGet : "";
  const addContent = actions.add.checked ? reducerAdd : "";
  const deleteContent = actions.delete.checked ? reducerDel : "";
  const editContent = actions.edit.checked ? reducerEdit : "";
  const setLoadingContent = actions.setLoading.checked ? reducerSetLoading : "";

  const reducer =
    intro +
    getContent +
    addContent +
    deleteContent +
    editContent +
    setLoadingContent +
    reducerError +
    outro;

  const reducerContent =
    actionNameSingular && actionNamePlural && uniqueSelector
      ? reducer
      : "Fill out the required form fields to see the code.";

  return <CodeBlock content={reducerContent} />;
};

export default Reducer;
