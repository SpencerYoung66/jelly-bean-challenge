import { Flavor } from "../model/Flavor";

const SERVER_URL: string = 'http://127.0.0.1:8000/api/'

export async function getRequest(endpoint: string): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "get",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    };
  
    try {
        const resp = await fetch(url, req);
        if (resp.ok) {
          const response: JSON = await resp.json();
          console.log(response);
          return response;
        } else {
          const error = await resp.json();
          throw new Error(error.errorMessage);
        }
  
      } catch (err) {
        throw new Error(
          "Get Request Failed: \n" + (err as Error).message
        );
      }
}

export async function postRequest(endpoint: string, data: object): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "post",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(data)
    };
  

    try {
        const resp = await fetch(url, req);
        if (resp.ok) {
          const response: JSON = await resp.json();
          console.log(response);
          return response;
        } else {
          const error = await resp.json();
          throw new Error(error.errorMessage);
        }
  
      } catch (err) {
        throw new Error(
          "Post Request Failed: \n" + (err as Error).message
        );
      }
}

export async function deleteRequest(endpoint: string): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "delete",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    };
  
    console.log(url);
    console.log(req);
    try {
        const resp = await fetch(url, req);
        if (resp.ok) {
          const response: JSON = await resp.json();
          console.log(response);
          return response;
        } else {
          const error = await resp.json();
          throw new Error(error.errorMessage);
        }
  
      } catch (err) {
        throw new Error(
          "Delete Request Failed: \n" + (err as Error).message
        );
      }
}

export async function putRequest(endpoint: string, data: object): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "put",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(data)
    };
  

    try {
        const resp = await fetch(url, req);
        if (resp.ok) {
          const response: JSON = await resp.json();
          console.log(response);
          return response;
        } else {
          const error = await resp.json();
          throw new Error(error.errorMessage);
        }
  
      } catch (err) {
        throw new Error(
          "Put Request Failed: \n" + (err as Error).message
        );
      }
}

// export default getRequest