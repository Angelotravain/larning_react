// requisição

axios.interceptors.request.use(
    function (config) {
        console.log('antes da requisição');
    }, function (error) {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    function (config) {
        console.log('antes da resposta...');
    }, function (error) {
        return Promise.reject(error);
    }
)