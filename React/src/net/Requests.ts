const SERVER_URL: string = 'http://127.0.0.1:8000/api/'

export async function getRequest(endpoint: string): Promise<JSON>{
    const url = SERVER_URL + endpoint;
    const req = {
      method: "get",
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
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

// export default getRequest