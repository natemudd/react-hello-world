class BillApi {  
  static getAllBills() {
    return fetch('https://congress.api.sunlightfoundation.com/bills?congress=113&history.enacted=true').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default BillApi;