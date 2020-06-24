export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";

let nextId = 0;

export function addPost(
  prod_name,
  prod_type,
  prod_status,
  prod_desc,
  prod_quantity,
  cust_name,
  cust_number,
  cust_mail
) {
  return {
    type: ADD_POST,
    id: nextId++,
    prod_name,
    prod_type,
    prod_status,
    prod_desc,

    prod_quantity,
    cust_name,
    cust_number,
    cust_mail,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function updatePost(
  id,
  prod_name,
  prod_type,
  prod_status,
  prod_desc,
  prod_quantity,
  cust_name,
  cust_number,
  cust_mail
) {
  return {
    type: UPDATE_POST,
    id,
    prod_name,
    prod_type,
    prod_status,
    prod_desc,

    prod_quantity,
    cust_name,
    cust_number,
    cust_mail,
  };
}
