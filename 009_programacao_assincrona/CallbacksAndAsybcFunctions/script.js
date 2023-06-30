// Exemplo 1

let dataArr;

const requestGit = function (callback, ref) {
    fetch("https://api.github.com/users/lucasdksan")
        .then((data) => data.json())
        .then(function (res) {
            callback(res, ref);
        });
}

const setData = function (data, ref) {
    ref = data;
    callbackAfterSetData(ref);
}

const callbackAfterSetData = function (data) {
    console.log(data);
}


requestGit(setData, dataArr);

// Exemplo 2

const execAsyncFuntion = async function () {
    const requestGitNew = await fetch("https://api.github.com/users/lucasdksan");
    const resultCall = await requestGitNew.json();
    console.log(resultCall);

    return resultCall;
}

execAsyncFuntion().then((e) => console.log("Result: ", e));

// Exemplo 3

function operacaoAssincrona(callback) {
    // Simulando uma operação assíncrona
    setTimeout(function () {
        const resultado = 42;
        callback(resultado);
    }, 2000);
}

const requestGitAll = function () {
    return fetch("https://api.github.com/users/lucasdksan")
        .then((data) => data.json());
}

Promise.all([new Promise(operacaoAssincrona), requestGitAll()]).then((e) => console.log("E: ", e));
