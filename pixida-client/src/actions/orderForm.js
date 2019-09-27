

export const resetOrderForm = () => {
  return {
    type: "RESET_NEW_ORDER_FORM",
  }
}

export const updateOrderFormData = (orderFormData) => {

  return {
    type: 'UPDATED_DATA',
    orderFormData
  }

}
