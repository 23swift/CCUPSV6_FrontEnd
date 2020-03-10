const baseUrl="http://localhost:3002"

export const fetchInstitutions = async () => {
    // setIsLoading(true);
    return fetch(baseUrl+"/api/institutions")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        return data;
      })
      .catch(function(error) {
        // setIsLoading(false);
        // setHasError(true);
        // setErrorMessage(error);
        console.log(error);
        return;
      });
  };

  export const fetchInstitution = async (id) => {
    // setIsLoading(true);
    return fetch(baseUrl+"/api/institutions/"+id)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        return data;
      })
      .catch(function(error) {
        // setIsLoading(false);
        // setHasError(true);
        // setErrorMessage(error);
        console.log(error);
        return;
      });
  };


  export const addOrUpdateIntstitution=(item)=>{
    return fetch((item.id) ? baseUrl+'/api/institutions/'+item.id: baseUrl+'/api/institutions', {
      method: (item.id) ? 'PUT' : 'POST', credentials: 'include',
      headers: {
        // 'X-XSRF-TOKEN':token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    }).then(response => response.json())
    .then((data)=>{
      return data;
      
    });
  }

  export const deleteInstitution = async (id) => {
    // setIsLoading(true);
    return fetch(baseUrl+"/api/institutions/"+id,{
      method: 'DELETE', credentials: 'include',
      headers: {
        // 'X-XSRF-TOKEN':token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        return data;
      })
      .catch(function(error) {
        // setIsLoading(false);
        // setHasError(true);
        // setErrorMessage(error);
        console.log(error);
        return;
      });
  };


  export const SearchInstitutionByCode = async (code) => {
    // setIsLoading(true);
    return fetch(baseUrl+"/api/institutions/?institutionCode="+code)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        return data;
      })
      .catch(function(error) {
        // setIsLoading(false);
        // setHasError(true);
        // setErrorMessage(error);
        console.log(error);
        return;
      });
  };