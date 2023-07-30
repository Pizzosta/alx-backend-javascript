export default function getFullResponseFromAPI(success) {
  const responseData = new Promise((resolve, reject) => {
    /* eslint-disable */
        if (success) {
            resolve({ status: 200, body: 'Success' })
        } else {
            reject(new Error('The fake API is not working currently'));
        }});
    return responseData;
}