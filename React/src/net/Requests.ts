import { Flavor } from "../model/Flavor";

const SERVER_URL: string = 'http://127.0.0.1:8000/api/'

// Request Code adapted from CS 340 Starter Code

export async function getRequest(endpoint: string): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "get",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    };

    return responseHandling(url, req, "Get");
  
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
  
    return responseHandling(url, req, "Post");
}

export async function deleteRequest(endpoint: string): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "delete",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    };
  
    return responseHandling(url, req, "Delete");

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
  
    return responseHandling(url, req, "Put");
}

async function responseHandling(url: string, req: object, method: string){
    try {
        const resp = await fetch(url, req);
        if (resp.ok) {
          const response: JSON = await resp.json();
          return response;
        } else {
          const error = await resp.json();
          throw new Error(error.errorMessage);
        }
  
      } catch (err) {
        throw new Error(
          `${method} Request Failed: \n` + (err as Error).message
        );
      }
}
