Redux Steps

create a store and make the link with extension

1. first we create the *constants*, example:(
 export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
 export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
 export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";)
2. then we create the *actions* that these constants will do, example:(
  export const listProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get("/api/products");
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };
};)
3. then we connect the actions with the constants showing the change of state in *Reducers*, example:(
  export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
)
4. then give a constant to the export of Reducers in *store.js file using combineReducers*. example:(
  const reducer = combineReducers({
  productList: productListReducer,
});

file in which we need to change the state
1. then we use the *UseSelector* on the const we get from the store  example:(  
  const productList = useSelector((state) => state.productList);
)
and also,
   we define the states to the same const we get from the store,example:(

  const { loading, error, products } = productList;

   )
6. then finally we use the *useEffect with dispatch* on the const we get from Actions, example:(
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);)
  