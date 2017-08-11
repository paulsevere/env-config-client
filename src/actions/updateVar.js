import jsonFetch from "json-fetch";
import { host } from "./hostConfig";

const updateVar = variable => dispatch => {
  console.log(variable);
  console.log("Calling update var");
  jsonFetch(host(`variable?name=${variable.name}&value=${variable.value}`), {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: { "Access-Control-Allow-Origin": "*" },
    body: variable
  })
    .then(res => {
      console.log(res);
      if (res.status === 400) {
        return { type: "ERROR" };
      }
      console.log(res);
      return res.body;
    })
    .then(dispatch);
};

export default updateVar;
